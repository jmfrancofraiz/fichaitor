const fichar = (login,password,dry) => {

    return new Promise(function(resolve, reject) {

        const request = require('request');
        const querystring = require('querystring');
    
        // set some defaults
        req = request.defaults({
            jar: true,                 // save cookies to jar
            rejectUnauthorized: false, 
            followAllRedirects: true   // allow redirections
        });

        req.get('https://gestion.kiom.com.es/web/login', function(err, resp, body) {

            const csrf = body.match(/([0-9a-z]{51})/g)[0];

            const form = {
                csrf_token: csrf,
                login: login,
                password: password
            }

            const formData = querystring.stringify(form);
            const contentLength = formData.length;

            req({
                headers: {
                'Content-Length': contentLength,
                'Content-Type': 'application/x-www-form-urlencoded'
                },
                uri: 'https://gestion.kiom.com.es/web/login',
                body: formData,
                method: 'POST'
            }, function (err, res, body) {

                if (body.includes('Wrong login/password')) {
                    return reject('Login incorrecto');
                }

                const rpc = {
                    jsonrpc:"2.0",
                    method:"call",
                    params:{
                        args:[[1324],"hr_attendance.hr_attendance_action_my_attendances"],
                        model:"hr.employee",
                        method:"attendance_manual",
                        kwargs:{}
                    },
                    id:Math.floor(Math.random() * 1000 * 1000 * 1000)
                }

                if (!dry) {
                    req({
                        uri: 'https://gestion.kiom.com.es/web/dataset/call_kw/hr.employee/attendance_manual',
                        json: rpc,
                        method: 'POST'
                    }, function (err, res, body) {
                        resolve(body);
                    });
                } else {
                    resolve('Dry run ok!');
                }

            });

        });

    });

}

exports.fichar = fichar;


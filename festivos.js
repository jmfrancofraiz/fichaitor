
const festivos = [
    // festivos de 2020
    '01/01/2020', '06/01/2020', '25/02/2020', '19/03/2020', '28/03/2020', '09/04/2020', '10/04/2020', 
    '01/05/2020', '24/06/2020', '25/07/2020', '15/08/2020', '12/10/2020', '08/12/2020', '25/08/2020',
    // festivos de 2021
    // to do
];

const isFestivo = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    var formatted = day + '/' + month + '/' + year;
    return festivos.includes(formatted);
}

exports.isFestivo = isFestivo;
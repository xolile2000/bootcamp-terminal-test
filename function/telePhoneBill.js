module.exports = function (list) {
    var bills = list.split(', ');

    var total = 0;
    for (var i = 0; i < bills.length; i++) {
        if (bills[i] === 'sms') {
            total += 0.65;
        }
        else if (bills[i] === 'call') {
            total += 2.75;
        }
    }
    return 'R' + total.toFixed(2)
}
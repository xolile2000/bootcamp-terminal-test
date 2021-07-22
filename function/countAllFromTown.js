module.exports = function (list, startstring) {
    var regNo = list.split(',')
    var counter = 0;
    for (var i = 0; i < regNo.length; i++) {
        const currentRegNum = regNo[i].trim();

        if (currentRegNum.trim().startsWith(startstring)) {
            counter++;
        }
    }
    return counter;
}

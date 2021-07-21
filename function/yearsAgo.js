module.exports = function(yearAgo){
    var today = new Date()
 const year = today.getFullYear() - yearAgo
 return year
}
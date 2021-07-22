module.exports = function(itemList){
    var items = [];
    for( var i = 0; i<itemList.length; i++){
    if(itemList[i].qty > 20){
    items.push(itemList[i])
      
    }
      
    }
     return items
}
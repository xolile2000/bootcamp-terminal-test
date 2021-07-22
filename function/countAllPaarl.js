module.exports = function(list){
    
    var regNum = list.split(', ')
    var Counter = 0

for(var i = 0 ; i<regNum.length;i++){
  const currentRegNo = regNum[i]
if(currentRegNo.startsWith('CJ')){
 
  Counter++ ;
  
}
}
  return Counter
  
}

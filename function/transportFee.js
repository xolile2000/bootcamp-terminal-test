module.exports = function(price){
    if(price === 'morning'){
        return 'R20'
        }else if(price === 'afternoon'){
          return 'R10'
        }else{
          return 'free'
        }
}
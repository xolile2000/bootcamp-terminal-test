module.exports = function(salesdata){
    const dataMap = {};
   
    for (var i in salesdata){
     
      const addDept = salesdata[i];
      dataMap[addDept.department] = 0;
    }
    
   
   for(var i in  salesdata){
      const addDept = salesdata[i];
     
      var currentDeptTotal = dataMap[addDept.department];
      currentDeptTotal += addDept.sales;
      dataMap[addDept.department] = currentDeptTotal;
    }
 var currentMaxSales = 0;
 var currentDep = "";
  for(const salesDatas in dataMap){
 const currentDepSales = dataMap[salesDatas];
    if(currentDepSales > currentMaxSales){
    currentMaxSales = currentDepSales;
      currentDep = salesDatas
      
    }
  }
  return currentDep
  console.log(currentDep)
}

         
     
    

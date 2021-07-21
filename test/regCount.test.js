var assert = require("assert")
var regCount = require("../function/regCount") 
    
describe("regCount",function(){
it("should return the number of registration numbers in a list",function(){
    assert.equal(3,regCount('CA 182736,CY 523519,CJ 812328'))
});
it("should return the number of registration numbers in a list",function(){
    assert.equal(2,regCount('CA 182736,CY 523519'))
});
});
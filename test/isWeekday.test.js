var assert = require(assert);
var isweekDay = require(isweekDay);

describe("isWeekDay",function(){
    it("should return true if a string is a weekday",function(){
        assert.equal(true,isweekDay("Monday"))
    });
});
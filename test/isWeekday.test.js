var assert = require("assert");
var isweekDay = require("../function/isWeekday");

describe("isWeekDay",function(){
    it("should return true if a string is a weekday",function(){
        assert.equal(true,isweekDay("Monday"))
    });
    it("should return false if a string is not a weekday",function(){
        assert.equal(false,isweekDay("sunday"))
    });
});
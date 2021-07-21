var assert = require("assert");
var isFromBellville = require("../function/isFromBellville")

describe('isFromBellville', function(){

    it('should be able to return true if registration number starts with CY', function(){
        assert.equal(true, isFromBellville('CY 543 876'));
    });
});
var assert = require("assert")
var regCheck = require("../function/regCheck")
describe('isFromBellville', function(){

    it('should be able to return true for registration numbers that end with GP, L, EC, MP', function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

    it('should be able to return false for registration numbers that do not end with GP, L, EC, MP', function(){
        assert.equal(regCheck("ND 123-456"), false);
    });
});
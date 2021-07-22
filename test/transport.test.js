var assert = require("assert")
var transportFee = require("../function/transportFee")
describe('transportFee', function(){

    it('should be able to return R20 for morning shift', function(){
        assert.equal('R20', transportFee('morning'));
    });
    it('should be able to return R10 for afternoon shift', function(){
        assert.equal('R10', transportFee('afternoon'));
    });
    it('should be able to return free if no shift was worked', function(){
        assert.equal('free', transportFee(''));
    });
});
var assert = require("assert")
var telePhoneBill = require("../function/telePhoneBill")
describe('telePhoneBill', function(){

    it('should be able to calculate the total bill of sms and calls made', function(){
        assert.equal('R7.45', telePhoneBill('call, sms, call, sms, sms'));
    });
    it('should be able to calculate the total bill of sms and calls made', function(){
        assert.equal('R6.80', telePhoneBill('call, sms, call, sms, sms,call,sms'));
    });
});
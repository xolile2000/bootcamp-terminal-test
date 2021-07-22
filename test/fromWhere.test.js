var assert = require("assert")
var fromWhere = require("../function/fromWhere")
describe('fromWhere', function(){

    it('shuld return bellville if a registration number starts with CY', function(){
        assert.equal('Bellville', fromWhere('CY 7756245'));
    });
    it('shuld return paarl if a registration number starts with CJ', function(){
        assert.equal('Paarl', fromWhere('CJ 9876 087'));
    });
    it('shuld return "some other place!"if a registration number is not from cape town,paarl and bellville', function(){
        assert.equal('Some other place!', fromWhere('CC 98765'));
    });
});
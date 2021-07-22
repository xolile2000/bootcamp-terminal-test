var assert = require("assert")
var countAllPaarl = require("../function/countAllPaarl")
describe('countAllPaarl', function(){

    it('should be able to count all registration numbers from paarl', function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });
    it('should be able to count all registration numbers from paarl', function(){
        assert.equal(6, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123, CJ 4653 876, CJ 7653, CJ 09876'));
    });
});
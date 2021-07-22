var assert = require("assert")
var countAllFromTown = require("../function/countAllFromTown")
describe('countAllFromTown', function(){

    it('should be able to return the number of registration numbers from stallies town', function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
    it('should be able to return the number of registration numbers from a stallies town', function(){
        assert.equal(1, countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'));
    });

});
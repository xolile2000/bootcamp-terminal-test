var assert = require("assert");
const yearsAgo = require("../function/yearsAgo");
describe('yearsAgo', function(){

    it('should be able to return how many years ago that year is from now', function(){
        assert.equal(yearsAgo(1999), 22);
    });
    it('should be able to return how many years ago that year is from now', function(){
        assert.equal(yearsAgo(2010), 11);
    });
});
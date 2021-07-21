let assert = require("assert");
var greet = require('../function/greet');
describe('The greet function', function(){

    it('should be able to greet bob', function(){
        assert.equal('Hello ,bob', greet('bob'));
    });
    

        it('should be able to greet Xolile', function(){
            assert.equal('Hello ,Xolile', greet('Xolile'));
        });
});

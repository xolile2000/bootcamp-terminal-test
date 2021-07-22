var assert = require("assert")
var findItemsOver20= require("../function/findItemsOver20")
describe('findItemsOver20', function(){

    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    it("should return all the products that have a quantity higher than 20.",function(){
        assert.deepEqual([{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}],findItemsOver20(itemList))
});
it("should return an empty array if items  have a  quantity lower than 20",function(){

    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 11},
        {name : 'bananas', qty : 17},
        {name : 'apples', qty : 13},
    ];
    assert.deepEqual([],findItemsOver20(itemList))
    

});
});
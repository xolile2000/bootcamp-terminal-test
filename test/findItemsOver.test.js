var assert = require("assert")
var findItemsOver= require("../function/findItemsOver")
describe('findItemsOver', function(){

    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    var threshold = 25
    it("should return items higher then the thresholder",function(){
        assert.deepEqual([{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}],findItemsOver(itemList,threshold))
        
    
    });

    it("should return an empty array if items are lower then the thresholder",function(){

        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 3},
            {name : 'bananas', qty : 7},
            {name : 'apples', qty : 2},
        ];
        assert.deepEqual([],findItemsOver(itemList,threshold))
        
    });
});
    
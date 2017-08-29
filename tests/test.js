
//import chai from the modules
import chai from 'chai';

//assign const assert to chai-assert attribute
const assert = chai.assert;

//import class shop for testing
import shop from '../src/models/shop';

//import class item for testing
import item from '../src/models/item';

//begin test for shop class
describe('Shop Class', () => {
    describe('Check Class attribute:name privacy',()=>{
        it('The name of the class should only be accessible by calling showName method',()=>{
            assert.isUndefined(new shop('Andela ShoppingMall')._name);
        });
    });


    describe('Validate input',() =>{
        const myShop = new shop('Andela ShoppingMall');
        it('The initialized shop name must match the output from the showName method ',()=>{
            assert.equal(myShop.showName(), 'Andela ShoppingMall');
        })
    });
});

//end test for shop class

//begin test for Item class
describe('Item Class', () => {
    describe('Check Class attribute:name privacy',()=>{
        it('The name of the class should only be accessible by calling showName method',()=>{
            assert.isUndefined(new item('Indomie')._name);
        });
    });


    describe('Validate input',() =>{
        const myItem = new item('Indomie',10,40);
        it('The initialized item name must match the output from the showName method ',()=>{
            assert.equal(myItem.showName(), 'Indomie');
        })
           it('The Item cost must match the output from the cost method ',()=>{
            assert.equal(myItem.cost(), 400);
        })
    });
});
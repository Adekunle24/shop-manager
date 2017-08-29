
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

    describe('Check class attributes, methods and privacy',()=>{
        it('The name of the class should only be accessible by calling showName method',()=>{
            assert.isUndefined(new shop('Andela ShoppingMall')._name);
        });
          it('The showName method must be defined',()=>{
            assert.isDefined(new shop('').showName());
        });
          it('The searchFor method must be defined',()=>{
            assert.isDefined(new shop('').seachFor());
        });
           it('The reduceStock method must be defined',()=>{
            assert.isDefined(new shop('').reduceStock());
        });
    });


    describe('Validate input',() =>{
        const myShop = new shop(4);
        it('The name of the shop must be a string ',()=>{
            assert.equal(myShop.showName(), undefined);
        });
    });
     describe('Validate output',() =>{
        const myShop = new shop('Andela ShoppingMall');
        it('The initialized shop name must match the output from the showName method ',()=>{
            assert.equal(myShop.showName(), 'Andela ShoppingMall');
        });

        //add an item for testing outputs
        const itemOne = new item('Indomie',10,40);
        myShop.addItem(itemOne);
        it('Calculated shop worth must be equal to 400',()=>{
            assert.equal(myShop.showWorth(),400);
        });
         it("The shop stock should not contain item named 'Ink' ",()=>{
            assert.equal(myShop.seachFor('Ink'),-1);
        });

        const shopTwo = new shop('Andela ShoppingMall');
        const itemTwo = new item('Indomie',10,40);
        shopTwo.addItem(itemTwo);
        shopTwo.reduceStock('Indomie',5);
          it("The shop networth must be equal to 200 ",()=>{
            assert.equal(shopTwo.showWorth(),200);
        });

        const shopThree = new shop('Andela ShoppingMall');
        const itemThree = new item('Indomie',10,40);
        shopThree.addItem(itemThree);
        shopThree.reduceStock('Indomie',15);
          it("The shop networth must be equal to 0 ",()=>{
            assert.equal(shopThree.showWorth(),0);
        });

        const shopFour = new shop('Andela ShoppingMall');
        const itemFour = new item('Indomie',10,40);
        const itemFive = new item('Fanta',10,150);
        const itemSix = new item('Butter',15,550);
        shopFour.addItem(itemFour);
        shopFour.addItem(itemFive);
        shopFour.addItem(itemSix);
          it("The shop items count must be 3 ",()=>{
            assert.equal(shopFour.itemsCount(),3);
        });
    });
});

//end test for shop class

//begin test for Item class
describe('Item Class', () => {
    describe('Check class attributes, methods and privacy',()=>{
        it('The name of the class should only be accessible by calling showName method',()=>{
            assert.isUndefined(new item('Indomie')._name);
        });
         it('The cost method must be defined',()=>{
            assert.isDefined(new item('Indomie').cost());
        });
         it('The Price per each quantity must be 100',()=>{
            assert.equal(new item('Indomie',50,100).pricePerEach(),100);
        });
    });


    describe('Validate input',() =>{
        const myItem = new item(4,10,40);
        it('The item name must be a string ',()=>{
            assert.equal(myItem.showName(),undefined);
        });
    });
      describe('Validate output',() =>{
        const myItem = new item('Indomie',10,40);
        it('The initialized item price must match the output from the pricePerEach method ',()=>{
            assert.equal(myItem.pricePerEach(), 40);
        });
        it('The initialized item name must match the output from the showName method ',()=>{
            assert.equal(myItem.showName(), 'Indomie');
        });
           it('The item cost must match the output from the cost method ',()=>{
            assert.equal(myItem.cost(), 400);
        });
            it('The initialized item quantity must match the output from the cost method ',()=>{
            assert.equal(myItem.quantity(), 10);
        })
    });
});
//The name of the application is ShopManager
import shop from './models/shop';
import item from './models/item';

//create constant for myShop
const myShop = new shop();

//create variable for indomie item
let indomie = new item('Indomie',10,30);

//stock shop with indomie
myShop.addItem(indomie);

//create variable for spaghetti
let spaghetti = new item('Spaghetti',200,50);

//stock shop with spaghetti
 myShop.addItem(spaghetti);

let coke = new item('Coke',150,10);
//stock shop with coke

myShop.addItem(coke);

//print shop's networth
console.log(`Your shop networth is ${myShop.showWorth()}`);

//display stock details
myShop.showStock();

//remove all coke items from stock
myShop.removeItem('Coke');

//print shop's networth
console.log(`Your shop networth is ${myShop.showWorth()}`);

//reduce the quantity of indomie by 5 when it is sold
 myShop.reduceStock('Spaghetti',5);

//show new networth
console.log(`Your shop networth is ${myShop.showWorth()}`);
// console.log(myShop.showWorth());

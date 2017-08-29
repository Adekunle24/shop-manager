//The name of the application is ShopManager
import shop from './models/shop';
import item from './models/item';

const myShop = new shop();
let indomie = new item('Indomie',10,30);
console.log(myShop.showWorth());
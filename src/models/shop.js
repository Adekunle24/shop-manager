import item from './item';


//a constant to hold the shop class
const shop = class Shop{
    //constructor for the shop class
    constructor(name){
        //privary with priviledged methods
        let _name = name;
        let _netWorth = 0;
        let _items = [];
        this.showWorth = function(){
            return `Your shop's networth is ${_netWorth}`;
        }
        this.showName = function(){
            return `${_name}`;
        }
        this.addItem = function (){
            _items.push()
        }
    }
   
}
export default shop;

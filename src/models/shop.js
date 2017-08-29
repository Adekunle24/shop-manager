import Item from './item';
// a constant to hold the shop class
// OOP feature: inheritance
// Shop  class inherits from class Array to expose forEach method for iteration
const shop = class Shop extends Array { 
    // constructor for the shop class
    constructor(name){
        // privacy with priviledged methods
        let _name = name;
        let _netWorth = 0;
        let _items = [];

        // call the base class Array
        super(_items);
        
        // outputs networth of shop
        this.showWorth = () => {
            return  _netWorth;
        }
        // outputs name of shop
        this.showName = () => {
            // shop name must be string
            if(typeof(_name)=='string')
            {
                return `${_name}`;
            }
            else{
                return undefined;
            }
        }
        // appends an item to shop catalogue
        this.addItem =  (newItem) => {
            _netWorth += newItem.cost();
            return _items.push(newItem)+1;
        }
        // output total number of items in shop
        this.itemsCount = () => {
            return _items.length;
        }
        // show details of stocks in shop
        this.showStock = () => {
        // OOP feature: Abstraction
        // I made use of the forEach method that belongs to Array class without concerning myself with its implementation
            _items.forEach((storedItem) =>  {
               console.log(`${storedItem.quantity()} quantity of ${storedItem.showName()} at ${storedItem.pricePerEach()} per each`);
            }, this);

        }
        //  removes all existence of item in shop catalogue
        this.removeItem = (index) => {
            //  removes item via the name or index
            if(typeof(index)=='string')
            {
                const indexFound = this.find(index);
                // if item was found
                if(indexFound!=-1)
                {
                    this.removeItem(indexFound);
                }
            }
            else if(typeof(index)=='number')
            {
                let removableItem = _items[index];
                _netWorth -= removableItem.cost();
                _items.splice(index-2,1);
            }
        }
        // reduce quantity of an item in stock
        this.reduceStock = (query,quantity) => {
           const itemIndex = this.find(query);
           // if item was found
           if(itemIndex!=-1)
           {
                const foundItem = _items[itemIndex];
                // check if the quantity of items in stock exceeds the quantity of items to remove
                if(foundItem.quantity()>quantity)
                {
                    // reduce quantity in stock
                    foundItem.setQuantity(foundItem.quantity()-quantity);
                    // reduce shop's networth
                    _netWorth -= foundItem.pricePerEach()*quantity;
                    return foundItem.quantity();
                }
                else{
                    this.removeItem(itemIndex);
                }
           }   
           else{
                return -1;
           }
        }
        // search for an item in the shop
        // OOP feature: polymorphism
        /* the find method exist for this class and the parent class(Array)
        *  this depicts polymorphism as the find method exist in two forms
        */
        this.find = (query) =>{
            const foundIndex = _items.findIndex((currentItem) => currentItem.showName().includes(query));
            // if item was found
            if(foundIndex!= -1)
            {
                const foundItem = _items[foundIndex];
                return foundIndex;
            }
            else{
                return -1;
            }
            
        }
    }
   
}
export default shop;
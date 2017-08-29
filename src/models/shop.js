import item from './item';


//a constant to hold the shop class
const shop = class Shop extends Array{ 
    //constructor for the shop class
    constructor(name){
        //privary with priviledged methods
        let _name = name;
        let _netWorth = 0;
        let _items = [];
        super();
        
        //outputs networth of shop
        this.showWorth = function(){
            return  _netWorth;
        }
        //outputs name of shop
        this.showName = function(){
            //shop name must be string
            if(typeof(_name)=='string')
            {
                return `${_name}`;
            }
            else{
                return undefined;
            }
        }
        //appends an item to shop catalogue
        this.addItem = function (newItem){
            _netWorth += newItem.cost();
            return _items.push(newItem)+1;
        }
        //output total number of items in shop
        this.itemsCount = function(){
            return _items.length;
        }
        //show details of stocks in shop
        this.showStock = function(){
            for(let storedItem of _items)
            {
                console.log(`${storedItem.quantity()} quantity of ${storedItem.showName()} at ${storedItem.pricePerEach()} per each`);
            }
        }
        //removes all existence of item in shop catalogue
        this.removeItem = function(index){
            //removes item via the name or index
            if(typeof(index)=='string')
            {
                const indexFound = this.seachFor(index);
                //if item was found
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
        //reduce quantity of an item in stock
        this.reduceStock = function(query,quantity){
           const itemIndex = this.seachFor(query);
           //if item was found
           if(itemIndex!=-1)
           {
                const foundItem = _items[itemIndex];
                //check if the quantity of items in stock exceeds the quantity of items to remove
                if(foundItem.quantity()>quantity)
                {
                    //reduce quantity in stock
                    foundItem.setQuantity(foundItem.quantity()-quantity);
                    console.log(`Reducing ${foundItem.showName()} stock by ${quantity}. Remaining:quantity: ${foundItem.quantity()}`)
                    //reduce shop's networth
                    _netWorth -= foundItem.pricePerEach()*quantity;
                }
                else{
                    this.removeItem(itemIndex);
                }
           }   
           else{
                return -1;
           }
        }
        //search for an item in the shop
        this.seachFor = function(query){
            const foundIndex = _items.findIndex((currentItem) => currentItem.showName().includes(query));
            //if item was found
            if(foundIndex!= -1)
            {
                const foundItem = _items[foundIndex];
                console.log(`Found ${foundItem.quantity()} quantity of ${foundItem.showName()} at ${foundItem.pricePerEach()} per each`);
                return foundIndex;
            }
            else{
                return -1;
            }
            
        }
    }
   
}
export default shop;

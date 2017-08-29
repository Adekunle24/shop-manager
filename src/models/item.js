
const item = class Item {
    //create a constructor method for Item class
        constructor(name,quantity,price){
            //initialize all required variable
            let _name = name;
            let _quantity = quantity;
            let _price = price;
            //calculate the cost of item
            this.cost = function(){
                return _quantity*_price;
            }
            //calculate quantity of item
            this.quantity = function(){
                return _quantity;
            }
            //changes the quantity of an item in stock
            this.setQuantity = function (newQuantity){
                _quantity = newQuantity;
            }
            //updates the price per each quantity in item
            this.setPricePerEach = function(newPrice){
                _price = newPrice;
            }
            //display name of item
            this.showName = function(){
                if(typeof(_name)=='string')
                {
                    return _name;
                }
                else{
                    return undefined;
                }
            }
            //price for each quantity in the item
            this.pricePerEach = function(){
                return _price;
            }
        }
}
export default item;
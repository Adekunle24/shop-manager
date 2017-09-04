
const item = class Item {
    // create a constructor method for Item class

    // OOP feature: encapsulation

    /* prefix all attributes to hide them and prevent direct access
     * declare all methods within constructor scope to give access to class attributes
     * */
        constructor(name,quantity,price){
            // initialize all required variable
            let _name = name;
            let _quantity = quantity;
            let _price = price;
            // calculate the cost of item
            this.cost = () => {
                return _quantity * _price;
            }
            // calculate quantity of item
            this.quantity = () =>{
                return _quantity;
            }
            // changes the quantity of an item in stock
            this.setQuantity = (newQuantity) => {
                _quantity = newQuantity;
            }
            // updates the price per each quantity in item
            this.setPricePerEach = (newPrice) => {
                _price = newPrice;
            }
            // display name of item
            this.showName = () => {
                if(typeof(_name)=='string')
                {
                    return _name;
                }
                else{
                    return undefined;
                }
            }
            // price for each quantity in the item
            this.pricePerEach = () => {
                return _price;
            }
        }
}
export default item;
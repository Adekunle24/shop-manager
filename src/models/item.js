
const item = class Item {
        constructor(name,quantity,price){
            let _name = name;
            let _quantity = quantity;
            let _price = price;
            this.name = function(){
                return _name;
            }
            this.cost = function(){
                return _quantity*_price;
            }
            this.quantity = function(){
                return _quantity;
            }
            this.showName = function(){
                return _name;
            }
        }
}
export default item;
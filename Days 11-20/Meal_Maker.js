// Codecademy's Meal maker project
let menu = {
    _meal: '',
    _price: 0,
    set meal (mealToCheck){
      if (typeof mealToCheck === 'string'){
        return this._meal = mealToCheck;
      }
    },
   set price (priceToCheck){
     if (typeof priceToCheck === 'number'){
       return this._price = priceToCheck;
     }
   },
    get todaysSpecial () {
      if (this._meal && this._price){
        return `Today's special is ${this._meal} for only ${this._price} ETH!`
    } else return "Meal or price was not set correctly!"
   }
  };
  
  menu.meal = 'Tacos';
  menu.price = 3;
  
  console.log(menu.todaysSpecial);
  
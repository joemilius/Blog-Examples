// let mainCourse = 'omelette'
// let side1 = 'bacon'
// let side2 = 'toast'
// let beverage = 'coffee'
// let price = 11.50

// let breakfastObject = {
//     mainCourse: 'omelette',
//     side1: 'bacon',
//     side2: 'hashbrowns',
//     beverage: 'coffee',
//     price: 11.50
// }
/*
=> {
    mainCourse: 'omelette',
    side1: 'bacon',
    side2: 'hashbrowns',
    beverage: 'coffee',
    price: 11.50
}
*/

// console.log(breakfastObject)

class Breakfast {
    constructor (mainCourse, side1, side2, beverage, price){
        this.mainCourse = mainCourse;
        this.side1 = side1;
        this.side2 = side2;
        this.beverage = beverage;
        this.price = price
    }      
}

let thisMorning = new Breakfast('omellete', 'bacon', 'hashbrowns', 'coffee', 11.50)
/* => Breakfast {
  mainCourse: 'omellete',
  side1: 'bacon',
  side2: 'hashbrowns',
  beverage: 'coffee',
  price: 11.5
}
*/

// get tip() {
//     this.calculateTip()
// }

// calculateTip(){
//     this.price * 0.20
// }


let breakfastObject = {
    mainCourse: 'eggs benedict',
    side1: 'hashbrowns',
    side2: 'bacon',
    coffee: true,
    price: 12.85
}

class Breakfast {
    constructor (){
        this.mainCourse = mainCourse;
        this.side1 = side1;
        this.side2 = side2;
        this.beverage = beverage;
        this.price = price
    }
        get tip() {
            this.calculateTip()
        }

        calculateTip(){
            this.price * 0.20
        }
    
}
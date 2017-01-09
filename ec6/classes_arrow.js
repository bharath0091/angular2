/**
 * Created by t937426 on 1/6/2017.
 */

class Toppings{
    constructor(topings){
        this.topings = Array.isArray(topings) ? topings : [];
    }

print(){
    this.topings.forEach(function(topping, i) {
        console.log("topping " + i + " is " + topping);
        //console.log("total no of toppings " + this.topings.length); // gives error, uncomment and run to check
    });
}
}

var toppings = new Toppings(["a", "b"])
toppings.print();

////////////With Arrow functions


class ToppingsArrow{
    constructor(topings){
        this.topings = Array.isArray(topings) ? topings : [];
    }

    print(){
        this.topings.forEach((topping, i) => {
            console.log("with arrow :" + "topping " + i + " is " + topping);
            console.log("with arrow :" + "total no of toppings " + this.topings.length); // works
        });
    }
}

var toppingsArrow = new ToppingsArrow(["a", "b"])
toppingsArrow.print();

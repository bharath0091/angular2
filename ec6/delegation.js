/**
 * Created by t937426 on 1/6/2017.
 */

class Bird{
    constructor(weight, height){
        this.weight = weight;
        this.height = height;
    }
walk() {
    console.log("walk")
}

}

class Penguin {
    constructor(bird){
       this.bird = bird;
    }

    walk() {
        this.bird.walk();
    }

    swim(){
        console.log("swim");
    }
}

var bird = new Bird(20, 1);
var penguin = new Penguin(bird);
penguin.walk();
penguin.swim();

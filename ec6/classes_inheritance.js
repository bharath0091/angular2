/**
 * Created by t937426 on 1/6/2017.
 */

//note : you can also extend a method
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width*this.height;
    }
    toString(){
        console.log(`width : ${this.width} height : ${this.height}`)
    }
}

class Square extends Rectangle{
    constructor(width){
        super(width, width);
}

    toString() {
        console.log("in Square toString")
        super.toString();
    }

}

var square = new Square(10);
square.toString();

/**
 * Created by t937426 on 1/6/2017.
 */

class Rectangle{
    constructor(width, height){
    this.width = width;
    this.height = height;
}

printFields(){
    console.log(`width : ${this.width}, height : ${this.height}`)
}
}

var rectangle = new Rectangle(10, 20);
rectangle.printFields();



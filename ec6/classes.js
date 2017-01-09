/**
 * Created by t937426 on 1/6/2017.
 */

class Rectangle{
    constructor(width, height){
    this.width = width;
    this.height = height;
}

getArea(){
    return this.width*this.height;
}

static staticMethodForTest(a, b){
    return a*b;
}

}

var rectangle = new Rectangle(10, 20);
console.log("rectangle area" + rectangle.getArea());
console.log("sattic method call" + Rectangle.staticMethodForTest(2, 3));


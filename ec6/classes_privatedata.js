/**
 * Created by t937426 on 1/6/2017.
 */
//http://stackoverflow.com/questions/22156326/private-properties-in-javascript-es6-classes
//TODO check Symbol
var _width = Symbol();
var _height = Symbol();
class Rectangle{

    constructor(width, height){
    _width = width;
    _height = height;
}

getArea(){
    return this.width*this.height;
}

getWidth(){
    return _width;
}

}

var rectangle = new Rectangle(10, 20);
console.log("rectangle width" + rectangle.getWidth());


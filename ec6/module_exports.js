/**
 * Created by t937426 on 1/7/2017.
 */

 export const pi = 22;

 export let circleArea = (radius) => pi*radius*radius;

 export class Rectangle{
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
};

// this is named export
// export {pi, circleArea, Rectangle};

//default export
export  default function cube(x) {
    return x * x * x;
}

export  const a = 2;


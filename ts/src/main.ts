/**
 * Created by t937426 on 1/7/2017.
 */

import {sayHello} from './print'

function showHello(msg : string){
    let ele = document.getElementById("greeting");
    ele.innerHTML = sayHello(msg);
}

showHello("Type script");


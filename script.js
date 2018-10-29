"use strict"

class TrafficLight {

    constructor() {
        this.colors = ["red", "yellow", "green"]
    }

    outOfOrder() {
        setInterval(() => {
            console.log(this.colors[1]);
        }, 1000);
    }

    shift() {
        let i = 0;
        setInterval(() => {

        }, 1000);
    }
}

let light1 = new TrafficLight();

light1.shift();


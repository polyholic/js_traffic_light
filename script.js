"use strict"

class TrafficLight {

    constructor() {
        this.colors = ["red", "yellow", "green", "yellow"]
    }

    outOfOrder() {
        setInterval(() => {
            console.log(this.colors[1]);
        }, 1000);
    }

    shift() {
        let i = 0;
        setInterval(() => {
            if (i >= 4) {
                i = 0;
            }

            console.log(this.colors[i]);
            i++;
        }, 1000);
    }
}

let light1 = new TrafficLight();

light1.shift();


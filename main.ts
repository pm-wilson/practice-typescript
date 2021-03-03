//compile to js by typing 'tsc main.ts' in console

function log(message) {
    console.log(message);
}

var message = 'hello world';

log(message);


enum Color { Red = 0, Green = 1, Blue = 2}


let message;
message = 'abc';

let endsWithC = (<string>message).endsWith('c');
let otherWayEndsWithC = (message as string).endsWith('c');


class Point {
    constructor(public x?: number, public y?: number, private _z?: number) {
    }

    draw() {
        console.log('x: ' + this.x + ', y: ' + this.y);
    }

    getDistance() {
        //get distance function
    }

    get z() {
        return this._z;
    }

    set z(value) {
        if (value < 0) throw new Error('value can not be less than 0');

        this._z = value;
    }
}

let point = new Point(1, 2);
point.draw();

let point2 = new Point();

function changeToText(num: number) {
    if(num === 1) {
        return 'one'
    }
    if(num === 2) {
        return 'two'
    }
    return num;
}

console.log(changeToText(1))
console.log(changeToText(4))
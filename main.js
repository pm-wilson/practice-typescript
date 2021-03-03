//compile to js by typing 'tsc main.ts' in console
function log(message) {
    console.log(message);
}
var message = 'hello world';
log(message);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var message;
message = 'abc';
var endsWithC = message.endsWith('c');
var otherWayEndsWithC = message.endsWith('c');
var Point = /** @class */ (function () {
    function Point(x, y, _z) {
        this.x = x;
        this.y = y;
        this._z = _z;
    }
    Point.prototype.draw = function () {
        console.log('x: ' + this.x + ', y: ' + this.y);
    };
    Point.prototype.getDistance = function () {
        //get distance function
    };
    Object.defineProperty(Point.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value can not be less than 0');
            this._z = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
point.draw();
var point2 = new Point();
function changeToText(num) {
    if (num === 1) {
        return 'one';
    }
    if (num === 2) {
        return 'two';
    }
    return num;
}
console.log(changeToText(1));
console.log(changeToText(4));

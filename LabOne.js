function addition(value) {
    console.log("Value is: " + value);
}
var firstVal = 42;
var secondVal = 1;
var sumOfVals = (firstVal + secondVal).toLocaleString();
addition(sumOfVals);
//boolean
var flag = true;
console.log("The value assigned to flag is: " + flag);
//numbers
var decimal = 7;
console.log("The value assigned to decimal is: " + decimal);
var hex = 0xf00d;
console.log("The value assigned to hex is: " + hex);
var binary = 10;
console.log("The value assigned to binary is: " + binary);
var octal = 484;
console.log("The value assigned to octal is: " + octal);
//array
var list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
    console.log("Number " + (i + 1) + " is: " + list[i] + ".");
    //strings
    var color = "yellow";
    console.log("The colour is: " + color);
    var fullName = "Bob Bobbington";
    var age = 37;
    var sentence = "Hello, my name is " + fullName + ".\n\n    I'll be " + (age + 1) + " years old next month.";
    console.log(sentence);
    //tuple
    var x = void 0;
    x = ["hello", 10];
    console.log("Tuple example: " + x[0].substr(1));
    //enum
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 3] = "Blue";
    })(Color || (Color = {}));
    var colorName = Color[2];
    var c = Color.Green;
    console.log("Enum: Value of colorName is: " + colorName);
    console.log("Enum: Value of c is: " + c);
    console.log("Enum: Name of c is: " + Color[c]);
    //any
    var notSure = 4;
    notSure = "maybe a string instead";
    console.log("Value is a string: " + notSure + ".");
    notSure = false;
    console.log("Now value is a boolean: " + notSure + ".");
    //undefined
    var u = undefined;
    console.log(u);
    //null
    var n = null;
    console.log(n);
}

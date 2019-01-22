function addition(value: string) {
    console.log("Value is: " + value);
    }
    let firstVal: number = 42;
    let secondVal: number = 1;
    let sumOfVals: string = (firstVal + secondVal).toLocaleString();
    addition(sumOfVals);

    //boolean
    let flag:boolean =true;
    console.log("The value assigned to flag is: "+flag);

    //numbers
    let decimal: number = 7;
    console.log("The value assigned to decimal is: "+decimal);
    let hex: number = 0xf00d;
    console.log("The value assigned to hex is: "+hex);
    let binary: number = 0b1010;
    console.log("The value assigned to binary is: "+binary);
    let octal: number = 0o744;
    console.log("The value assigned to octal is: "+octal);

    //array
    let list: number[] = [1, 2, 3];
    for(let i = 0; i < list.length;i++){
    console.log("Number "+(i+1)+" is: "+list[i]+".");

    //strings
    let color: string = "yellow";
    console.log("The colour is: "+color);
    let fullName: string = `Bob Bobbington`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${ fullName }.

    I'll be ${ age + 1 } years old next month.`;
    console.log(sentence);

    //tuple
    let x: [string, number];
    x = ["hello", 10];
    console.log("Tuple example: "+x[0].substr(1));

    //enum
    enum Color {Red = 1, Green, Blue}
    let colorName: string = Color[2];
    let c: Color = Color.Green;
    console.log("Enum: Value of colorName is: "+colorName);
    console.log("Enum: Value of c is: "+c);
    console.log("Enum: Name of c is: " + Color[c]);

    //any
    let notSure: any = 4;
    notSure = "maybe a string instead";
    console.log("Value is a string: "+notSure+".");
    notSure = false;
    console.log("Now value is a boolean: "+notSure+".");
  
    //undefined
    let u: undefined = undefined;
    console.log(u);

    //null
    let n: null = null;
    console.log(n);
    }

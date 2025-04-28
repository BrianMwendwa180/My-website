// For loop
//for (initialization; condition; increment/decrement){
// code execution
//}

for (let a =1; a<=20; a+=2){
    //console.log(`Counter num: ${a}`);
}


// while loop
let count=2;
while(count <=10){
    console.log(`counting number: ${count}`);
    count++;

}

// Do while
let num=10;
do{
    console.log(`Number: ${num}`);
num-=2;

}while(num>0)

    //For ....of loop
    const fruits =["Apple", "Bananas", "Mangos"]
    for (const fruit of fruits){
        //console.log(fruit);

    }
    const greeting = "Hello";
    for (const char of greeting){
        //console.log(char)
    }

    //For...in loop

    const person ={
        firstname: "John",
        lastname: "Doe",
        age: 30,
        job: "Developer"
    };

    for (const property in person){
        console.log(`${property}: ${person[property]}`);
    }
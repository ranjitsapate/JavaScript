
//console.log(4+5)

// let username='ranjit';
// let userIntro='My Name is ranjit sapate';
// let age=25;

// const alertResult=alert("our message  goes here");

// const lettconfirm=confirm("would you like to proceed ");

//const promptresult=prompt("enter your name")


// 🙋‍♂️🙋‍♂️🙋‍♂️ METHODS IN JAVASCRIPT 🙋‍♂️🙋‍♂️🙋‍♂️

// const UpperResult='My Name is ranjit'.toLowerCase();
// const UpperResult1='My Name is ranjit'.toUpperCase();

// const message="My Name is Ranjit";
// const msg=message.includes('ganesh');
// const msg1=message.indexOf('R');
// const msg2=message.replace("Ranjit","Ganesh");
// const msg3=message.charAt(5);
// const msg4=message.split(" ");

// const faltumsg="       Hi,I am Anurag     ";
// const faltuResult=faltumsg.trim().toLowerCase();
// const faltuResult1=faltumsg.trimEnd();

// const lastFourDigit='4589';
// const lastResult=lastFourDigit.padStart(16,'*');
// const lastResult1=lastFourDigit.padEnd(16,'$');

// 🙋‍♂️🙋‍♂️🙋‍♂️ MATH IN JAVASCRIPT 🙋‍♂️🙋‍♂️🙋‍♂️

// Exponential Operator Example

// console.log(3**3);
// console.log(5**2);
//*********************************** */

// console.log(Math.PI);
// console.log(Math.sqrt(16));
// console.log(Math.pow(2,5)); //2^5
// console.log(Math.floor(2.99)); // 2.99==>2
// console.log(Math.floor(-2.5)); // 3
// console.log(Math.ceil(2.99)); //3
// console.log(Math.round(2.4)); //2 // roundfigure
// console.log( 8/0);
// console.log(typeof Infinity);
// console.log(typeof NaN);
// console.log(0/0);

// const width=prompt("Enter Width");
// const height=prompt("Enter height");
 //******************************************************** */
//🙋‍♂️🙋‍♂️🙋‍♂️Truthy and Falsy 🙋‍♂️🙋‍♂️🙋‍♂️

// 🙋‍♂️ Falsy Value 🙋‍♂️ ptherwise all are true 🙋‍♂️

// Boolean(0) // False
// Boolean(-0) // False
// Boolean("") // False
// Boolean(undefined); // False
// Boolean(null)    // False
// Boolean(NaN)  // Falsel

// const userAge=15;

// const isCollegeStudent = (userAge >= 5) && (userAge <=18);
// const isCollegeStudent1= (userAge >= 18) && (userAge <=24);

// const isStudent = isCollegeStudent || isCollegeStudent

// const isStudent1 = isCollegeStudent && isCollegeStudent

// const andResult='Hello' + 8+4;

// const orResult = 'Hello' || 8+4;

//***********🙋‍♂️🙋‍♂️🙋‍♂️ DECISION MAKING STATEMENT */
// const username=prompt('Please enter your name') || 'Ranjit';
// const userAge=parseInt(prompt('Please enter your Age')) || 22;

// console.log(`Name:${username}`);
// console.log(`Age:${userAge}`);

// if(userAge >= 18 && userAge <= 24){
//     console.log(`${username} is a College Student.`);
//     console.log("And he/she is Learning Computer Science");
// }

// if(userAge >= 25 && userAge <= 45){
//     console.log('User is working Professional');
//     console.log("And he /she read newspaper");
// }
// console.log('Program Ended');

//****************🙋‍♂️🙋‍♂️🙋‍♂️ SWITCH CASE************* */


// const dayNumber=2;

// if(dayNumber==0){
//     console.log("It is  Sunday Today")
// }else if(dayNumber==1){
//     console.log("It is Moday today")
// }else if(dayNumber==2){
//     console.log(" It is Tuesday Today")
// }

// 🙋‍♂️🙋‍♂️🙋‍♂️
// const dayNumber=20;

// switch (dayNumber){
//     case 0:
//         console.log("It is  Sunday Today")
//         break;
//     case 1:
//         console.log("It is  Monday Today")
//         break;

//     case 2:
//         console.log("It is  Tuesday Today")
//         break;
//         default :
//         console.log("Please Enter Valid Number");
// } 

// console.log("Program Ended");

//🙋‍♂️🙋‍♂️🙋‍♂️
// const username="Ranjit"
// const userAge=15

// switch(true){
//     case userAge >= 0 && userAge <=4 :
//     console.log(`${username} is kid`)
//     break;
//     case userAge >=5 && userAge <=17:
//         console.log(`${username} is school student`)
//         break;
//         case userAge >= 18 && userAge <=24 :
//             console.log(`${username} is College Student`)
//             break;
//             default :
//             console.log("Enter Valid Number")
// }
// console.log("Program ended");

//*************🙋‍♂️🙋‍♂️🙋‍♂️ TERNARY OPERATOR 🙋‍♂️🙋‍♂️🙋‍♂️****** */

//const username=5 > 7 ? 'Ranjit ': 'Ram';

// const gender='female'
// const userMessage=`${gender=='female' ? 'She' : 'He'} is college Student`;



//************🙋‍♂️🙋‍♂️🙋‍♂️ OBJECTS IN JAVASCRIPT 🙋‍♂️🙋‍♂️🙋‍♂️*********** */

// const username={
//     firstName:"ranjit",
//     lastName:'Sapate',
//     mobile:"9579369911",
//     address:{
//         city:"Pune",
//         pincode:"141058",
//         state:"Maharashtra",
//         moreDetails:{
//             population:"458688366",
//             area:"785 sq km"
//         }
//     }
// }

// console.log(username.lastName);
// console.log(username["firstName"]);
// console.log(username);
// console.log(username.age=25)
// console.log(username.address)
// console.log(username.address.city);
// console.log(username.address.pincode);
// console.log(username.address.moreDetails.area)
// console.log(delete username.mobile);

//*********✌️✌️✌️✌️✌️******************************🎻✌️✌️✌️✌️✌️ */

//*** 🙋‍♂️🙋‍♂️🙋‍♂️  ARRAYS || ARRAYS || ARRAYS || ARRAYS*************/

// const username = 'ranjit sapate';

// const fruitCollection = ['apple',"Banana",'Grapes'];
// console.log(fruitCollection);
// console.log(typeof fruitCollection);
// console.log(fruitCollection[2])
// console.log(fruitCollection[2]='Mango')
// console.log(fruitCollection);
// console.log(fruitCollection[10]='Papaya');
// console.log(fruitCollection.push('Sitafal'))
// console.log(fruitCollection.push('Jamun'))
// console.log(fruitCollection.pop())
// console.log(fruitCollection.length);
// console.log(fruitCollection);


//****** ✌️✌️✌️✌️✌️ARRAYS METHODS ✌️✌️✌️✌️✌️************* */

// const evenNumber=[0,2,4,6,8,10];

// const animals=['Daog','cat','Rat'];

// const addArrays=evenNumber.concat(animals);
// console.log( addArrays)
// console.log(animals.indexOf('cat'))
// console.log(animals.includes('cat'))
// console.log(animals.includes('Mat'))
// console.log(evenNumber.reverse())
// console.log(animals.sort())

//****** ✌️✌️✌️✌️✌️MULTI-DIMENTIONAlARRAYS METHODS ✌️✌️✌️✌️✌️************* */

// const animals=[['Adarsh'],
// ['Dinesh'],
// ['ganesh']
// ];

// console.log(animals);

//******* 🙋‍♂️🙋‍♂️🙋‍♂️ Copy Object And Arrays  ||| Deep Vs Shallow Cpoy 🙋‍♂️🙋‍♂️🙋‍♂️***********/

// // copy array
// const fruits=['apple' ,'grapes','Banana']

// const myfruits=fruits;

// myfruits.push('Dates')
// myfruits.push('Sitafal')

// console.log(fruits)
// console.log(myfruits)

//******* 🙋‍♂️🙋‍♂️🙋‍♂️ COMPOUND OPERATOR IN JS or Assignment Operator 🙋‍♂️🙋‍♂️🙋‍♂️***********/

// let num =5;

// num +=5;
// num +=5;
// num +=5;
// num +=5;
// console.log(num);

// num *=2;
// num *=2;
// num *=2;
// num *=2;
// console.log(num);

// let num5=6
// const num1=++num5
// console.log(num1);
// const num2=num5++
// console.log(num2)


//******* 🙋‍♂️🙋‍♂️🙋‍♂️ LOOPS || LOOPS  || LOOPS 🙋‍♂️🙋‍♂️🙋‍♂️***********/

//*** ✌️✌️✌️✌️✌️ while loop ******/


// console.log("Program Started");

// // // let num=0
// // // while(num<=10){
// // //     console.log(num);
// // //     num++;
// // // }

// const friends=['Akash','Rahul','ganesh','Rohit','Vaibhav']
// let i=0;
// while(i<friends.length){
//     console.log(`${i+1}.${friends[i]} ${'Coder'}`);
//     i++;
// }


// console.log("Program Ended");

//******* ✌️✌️✌️✌️✌️ For Loop ***** */

// console.log("program started");

// for(let i=0;i<=100;i++){
//     if(i%2==0){
//     console.log(i);
//     }
// }
//console.log("Program Endedd")

//******* ✌️✌️✌️✌️✌️ Do-While Loop ***** */

// console.log("Program SStarted")
// let i=0;

// do{
//     console.log(i)
//     i++;
// }while(i<5)

// console.log("Program Endedd")

//******* 🙋‍♂️🙋‍♂️🙋‍♂️ FUNCTIONS || FUNCTIONS || FUNCTIONS🙋‍♂️🙋‍♂️🙋‍♂️***********/

// Function Definition

// function introduceMe(userName){
//     console.log("Hi");
//     console.log("My Name is %{userName}");
//     console.log("I am Java Developer")
// }

// // Function Call
// // const returnValue=introduceMe()

// introduceMe('Anurag');
// console.log("************")
// introduceMe('Akash');
// console.log('************')


// function addTwoNumber(a,b){
//     return a+b;
// }/

// function addTwoNumber(a,b)
// {
//     consol.log(a+b);
// }               
// const result=addTwoNumber()
// console.log(result);

//  sayHi()
//     const username='Ranjit';
//     const userAge=25;

//     function sayHi(){
//     const a=0;
//     const b=20;
//     console.log(a,b);
//     }

//     console.log('Program Ended');



//******* 🙋‍♂️🙋‍♂️🙋‍♂️  HOSTING || HOSTING 🙋‍♂️🙋‍♂️🙋‍♂️ //******* 


// var username='Ranjit';

// console.log(a)

// // fi=unction Declaration
// hi()  // function call

// function hi(){
//     console.log('Hello');
// }

// sayHi() //// function call

// var sayHi=function(){
//     console.log('hiiii')
// }


// var username='Ranjit';

// function subtract(x,y){
//     const x=10;
//     const y=5;
//     console.log(x-y);
//     console.log(username)

//     function child(){
//         const childName='Golu';
//         console.log(childName);
//         console.log(z);

//         function grandChild(){
//             const grandchildName='Molu';
//             console.log(grandchildName);
//         }
//         grandChild()

//     }
//     child()

// }


//***✌️✌️✌️ Higher Order Function And Callback ✌️✌️✌️ */

// function a(b){
//     console.log(b)
//     //console.log(typeof b)
// }
// a('Hiii')
// a({username:'Ranjit',userAge:50})
// a([1,2,3,4,5])
// console.dir(a)
// console.log(typeof 12345)
// console.log(a.age=87)


//******* 🙋‍♂️🙋‍♂️🙋‍♂️ ForEach Loop And its method's🙋‍♂️🙋‍♂️🙋‍♂️ //******* 

// const fruits=['banana','apple','Mango','grapes','papaya']

// // for(const fruit of fruits){
// //     console.log(fruit)
// // }

// fruits.forEach((fruits)=>{
//     console.log(fruits)
// })

//******* 🙋‍♂️🙋‍♂️🙋‍♂️ Map ,Filter , Reduce in javascript🙋‍♂️🙋‍♂️🙋‍♂️ //******* 

// map

// const months=['January','February','March','April','May']

// const capitalMonths=months.map((month,index)=>{
//     console.log(index+1,month);
//     return month.toUpperCase()
// })

// filter

// const filterlMonths=months.filter((month,index)=>{
//    // console.log(month);
//     return month.length <= 5;
// })



// // reduce
// const nums=[1,1,2,1,1,1]

// nums.reduce((accumulator,current,i)=>{
//    // console.log(accumulator);
//     return accumulator + current
// },0)



/// Every Array Method

// const evenNumber=[0,2,4,5,8,9]
// const result=evenNumber.some((num)=>{
//     return num %2 ==1
// })


// Arguments Keyword

// const add3=function(){
//     let sum=0;
//     for(let i;i<arguments.length;i++){
//    sum=sum+arguments[i]
// }
// return sum;
// }

// Default Arguments

function multiply(a,b){
    return a*b;
}

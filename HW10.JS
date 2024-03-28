//  დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს, 
// თუ რიცხვები ტოლია დააბრუნებს 0 -ს

function num(m,n){
    if (m>n) return m
    else if (m==n) return 0
    else return n
}
console.log(num(100,100));

// დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი

function sum(a,b){
    return a + b
}
console.log(sum(2,4));

// დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს (ფუნქციას არ აქვს პარამეტრი)

function myName(){
    console.log("ნათია მაისურაძე")
}
myName();

// დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ 
//(ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)

function fullName(firstName, lastName){
let fullName = firstName + lastName
    return fullName
}
console.log(fullName("ნათია ", "მაისურაძე"));

// Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) 
// რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, 
// დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. 
// Პ.ს. Უნდა გამოიყენოთ თქვენთვის სასურველი ციკლი)

function multiply(n){
    let x=1;
    for (let i =1; i <=n; i++){
        x*=i;
    }
    return x;
}
console.log(multiply(4));
// Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - რომელსაც აქვს შემდეგი 
// properties: firstname, lastname, age, scores (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) 
// და მეთოდი რომელიც აბრუნებს სტუდენტის სრულ სახელს ( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ ) 


let student= {
    fName: "ნათია",
    lName: "მაისურაძე",
    age: 43,
    marks: [4,7,5,3,2],
    fullname(){
        console.log(this.fName, this.lName)
    }
}
//  დაბეჭდეთ  სტუდენტის სრული სახელი ( გამოიყენეთ student ობიექტის მეთოდი)
student.fullname()
//  Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულება ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს

function scores(marks){
    let sum =0;
    for (let i =0; i<marks.length; i++){
        sum+= marks[i];
    }
    return sum
}

console.log(scores(student.marks));
//  დაბეჭდეთ სტუდენტის სახელი და ასაკი

console.log(student.fName, student.age);


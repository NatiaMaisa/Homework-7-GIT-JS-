//გამოაცხადეთ ორი ცვლადი a,b მიანიჭეთ მნიშვნელობები 23 და 4
//დაბეჭდეთ (console.log) a და b რიცხვების ჯამი

let a =23;
let b =4;

console.log(a + b);

//დავეჭდეთ a და b რიცხვების ნამრავლი

console.log (a * b);

//გამოაცხადეთ ახალი ცვლადი c რომელიც იქნება boolean, მიანიჭეთ true და დაბეჭდეთ

let c =true;

console.log(c);

//გამოახცადეთ ახალი ობიექტის(object) ტიპის ცვლადი  person თქვენი მონაცემებით ( first name, last name, age, 
//address(რომელიც შეიცავს: city, country), phone no, email, friends (სახელების სია),  
//დაბეჭდეთ person ობიექტის სახელი და მეორე მეგობრის სახელი
 
let person = {
      "firstname": "Natia",
      "lastname": "Maisuradze",
      "age": 30,
      "address" : {
        "city" : "Tbilisi",
        "country" : "Georgia",
      },
      "phone": "599111222",
      "email": "natiam@gmail.com",
      "friends": ["Tika", "Lida", "Giorgi"],

}
console.log(person.firstname);

let arr = ["Tika", "Lida", "Giorgi"];
console.log(arr[1]);

console.log(person.firstname, person.friends[1])
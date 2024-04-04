
// დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (a,b) და დააბრუნებს შესაბამისს ტექსტს 
// თუ რიცხვები ტოლია : a  და b ტოლია
// თუ a მეტია b ze : a  მეტია b -ზე
// თუ a ნაკლებია  b ze : a  ნაკლებია  b -ზე


function num(a,b){
    if (a==b) {
        return "a და b ტოლია"}
    else if (a<b){
        return "a ნაკლებია b-ზე"}
    else {
        return "a მეტია b-ზე"
    }
}
console.log(num(5,3));

// დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ true თუ მათი ჯამი მეტია 100 ზე , 
//false , თუ არ არის მეტი 100 ზე

function bool(m,n){
    if (m + n > 100){
        return "true"}
    else {
        return "false"}
}

console.log(bool(75,55));

 function calculateNums(num1,num2){
   return num1 + num2 > 100;
 }

 console.log(calculateNums(55,69));
 console.log(calculateNums(33,37));

// დაწერეთ ფუნქცია, რომელიც დაითვლის და დააბრუნებს კალათბურთის თამაშისას აღებულ ქულას (ქულების ჯამს). 
//ფუნქციას აქვს სამი პარამეტრი
// პირველი პარამეტრი - 1 ქულიანების რაოდენობა
// მეორე პარამეტრი -  2 ქულიანების რაოდენობა
// მესამე - 3 ქულიანების რაოდენობა 

function score(points1, points2, points3){

return points1 + (points2 * 2) + (points3 * 3)
}

console.log (score(6,4,2));

// დაწერეთ ფუნქცია ორი პარამეტრით start და end , ფუნქციას გადაეცემა ორი რიცხვი, 
//უნდა შექმნათ  start დან end-ჩათვლით  რიცხვების მასივი(მაგალითად თუ start არის 3 და end არის 6 
//მასივის ელემენტები უნდა იყოს [3,4,5,6] ) ( arr.push()- მასივში ელემენტის დამატება)

function paramArr(start, end){
    let arr = [];
    for (let i = start; i <= end; i ++){
  arr.push(i)
    }
    return arr;
}
console.log(paramArr(3,6));

// ობიექტ person - ს აქვს შემდეგი properties: firstname, lastname, age, 
//დაწერეთ ფუნქცია რომელიც პერსონის ასაკის მიხედვით დაბეჭდავს 
// თუ 18  წელზე პატარაა - “პერსონის სახელი” არასრულწლოვანია
// თუ 18 და მეტია “პერსონის სახელი” - სრულწლოვანია 

let person = {
    firstname: "Natia",
    lastname: "Maisuradze",
    age: 15,
};

function pers(age){
    if (age < 18){
        console.log(person.firstname, "is not adult")
    }else{
        console.log(person.firstname, "is aduls")
    }
}

pers(person.age);

// გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ. 
//Დაბეჭდეთ ელემენტები სათითაოდ ( გამოიყენეთ for ციკლი)

let phones = ["Iphone", "Samsung", "Pixel", "Huawei", "Xiaomi"]
for (let i=0; i< phones.length; i++){
    console.log(phones[i])
}
// Გამოაცხადეთ ცვლადი num სასურველი მნიშვნელობით ( მაგ. 23), 
//დაბეჭდეთ რიცხვები 1 დან num ის ჩათვლით ( გამოიყენეთ while ციკლი).

let number=23, i =1;
while(i<=number){
    console.log(i)
    i++;

}
// Გამოიყენეთ სასურველი ციკლი და დაბეჭდეთ ლუწი რიცხვები 2-დან 13 - ის ჩათვლით , გამოიყენეთ სასურველი ციკლი ( for, while)

for (let i=2; i<=13; i++){
    if (i%2===0){
        console.log(i)
    }
}
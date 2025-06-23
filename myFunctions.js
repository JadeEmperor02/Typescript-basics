"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var logInUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
getUpper("jade");
signUpUser("jade", "jade123@gmail.com", false);
logInUser("jade", "jade@.dev");
// function getValue(myVal: number): boolean{
//   if(myVal > 5 ){
//     return true
//   }
//   return "200 OK"
// }
var getHello = function (s) { return ""; };
var heroes = ["thor", "spiderman", "ironman"];
var heroesId = [1, 2, 3];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
heroesId.forEach(function (hero) {
    console.log("hero id is ".concat(hero));
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(msg) {
    throw new Error(msg);
}

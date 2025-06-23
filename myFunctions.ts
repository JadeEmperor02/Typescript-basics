function addTwo(num: number): number {
  return num + 2;
  // return "hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let logInUser = (name: string, email: string, isPaid: boolean = false) => {};

let myValue = addTwo(5);
getUpper("jade");
signUpUser("jade", "jade123@gmail.com", false);
logInUser("jade", "jade@.dev");

// function getValue(myVal: number): boolean{
//   if(myVal > 5 ){
//     return true
//   }
//   return "200 OK"
// }

const getHello = (s: string): string => "";

const heroes = ["thor", "spiderman", "ironman"];
const heroesId = [1, 2, 3];

heroes.map((hero): string => {
  return `hero is ${hero}`;
});

heroesId.forEach((hero) => {
  console.log(`hero id is ${hero}`);
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
function handleError(msg: string): never {
  throw new Error(msg);
}

export {};

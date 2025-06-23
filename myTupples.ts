// const user: (string | number)[] = [1, "hc"];
let user: [string, number, boolean];

user = ["hx", 123, true];

let rgb: [number, number, number] = [255, 214, 234];

type User = [number, string];

const newUser: User = [112, ""];

newUser[1] = "";
// newUser.push(true)

export {};

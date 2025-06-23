// const User = {
//   name: "hitesh",
//   email: "empyren@lost.com",
//   isActive: false
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "jade", isPaid: false, email: "j@j.com" }

// createUser(newUser);

// function createCourse(): { name: string; price: number | string } {
//   return { name: "next.js", price: "free" };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User) {
//   return { name: "", email: "", isActive: true };
// }
// createUser({ name: "", email: "", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails: number;
};
let myUser: User = {
  _id: "12345",
  name: "h",
  email: "j@j.com",
  isActive: false,
  creditCardDetails: 12345
};
myUser.email = "j@gmail.com";
// myUser_id = "jjj";

type cardNumber = {
  cardNumber: string;
};
type cardDate = {
  cardDate: string;
};
type creditCardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
export {};

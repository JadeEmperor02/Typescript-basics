let score: number | string = 33;

score = "44";

score = 55;

type User = {
  name: string;
  id: number;
};

type Admin = {
  Username: string;
  id: number;
};

let hitler: User | Admin = { name: "hitesh", id: 520 };

hitler = { Username: "je", id: 520 };

// function getDbId(id: number | string) {
//   console.log(`Db id is: ${id}`);
// }
getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  // id.toLowerCase()
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (number | string | boolean)[] = ["1", "2", "3", 4, true];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment  = "crew"

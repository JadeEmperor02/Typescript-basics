interface UserJade {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrial : ()=> string
  startTrial(): string;
  getCoupon(couponname: string, value: 10): number;
}

interface UserJade {
  githubToken: string;
}

interface Admin extends UserJade {
  role: "admin" | "ta" | "learner";
}

const jade: Admin = {
  role: "admin",
  dbId: 0o1,
  email: "jj@gmail.com",
  userId: 0o1,
  githubToken: "string",
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "jade001", off: 10) => {
    return 10;
  }
};
jade.email = "je@j.com";
// jade.dbId = 33

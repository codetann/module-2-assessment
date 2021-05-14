const readline = require("readline");

// prettier-ignore
const text = [
    " __________                                               .___ _________                        __                 ",
    " \\______   \\_____    ______ ________  _  _____________  __| _/ \\_   ___ \\_______   ____ _____ _/  |_  ___________  ",
    "  |     ___/\\__  \\  /  ___//  ___/\\ \\/ \\/ /  _ \\_  __ \\/ __ |  /    \\  \\/\\_  __ \\_/ __ \\\__  \\ \\   __\\\/  _ \\_  __ \\",
    "  |    |     / __ \\_\\___ \\ \\___ \\  \\     (  <_> )  | \\/ /_/ |  \\     \\____|  | \\/\\  ___/ / __ \\|  | (  <_> )  | \\/ ",
    "  |____|    (____  /____  >____  >  \\/\\_/ \\____/|__|  \\____ |   \\______  /|__|    \\___  >____  /__|  \\____/|__|   ",
    `                 \\/     \\/     \\/                          \\/          \\/             \\/     \\/                    `
]

console.log(text.join("\r\n"));

const Password = {
  password: "",
  passwordLength: 10,
  passwordSpecial: "!@#$%^&*?+-".split(""),
  reader: readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  }),

  validate() {
    this.reader.question("Please Enter a Password: ", (answer) => {
      // Password Length Check
      if (answer.length < this.passwordLength) {
        return console.log("[FAILURE] - Length needs to be at least 10");
      }

      // Special Character Check
      for (let i = 0; i < this.passwordSpecial.length; i++) {
        if (answer.includes(this.passwordSpecial[i])) {
          this.password = answer;
          console.log("[SUCCESS] - Password Created");
          this.reader.close();
          return;
        }
      }
      console.log("[FAILURE] - Password needs at least 1 special character");
    });
  },
};

Password.validate();

const fs = require("fs");
fs.writeFileSync("notes.txt", "My name is Dhanu");
fs.appendFileSync("notes.txt", ", I am from Bangalore");

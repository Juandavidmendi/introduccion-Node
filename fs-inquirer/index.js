const path = require("path");
const inquirer = require('inquirer');

const datastore = require("./datastore");
const utils = require("./utils");

const filename = "data.json";
const filepath = `${path.resolve(".")}/${filename}`;
const items = datastore.load(filepath);
const options = [
  {
    type: "input",
    name: "item",
    message: "Que quieres agregar?"
  },
  {
    type: "confirm",
    name: "completed",
    message: "Esta completado?"
  },
  {
    type: "input",
    name: "date",
    message: "Pon la fecha MM/DD/YYYY"
  }
];

debugger; //solo funciona en modo depuracion

inquirer.prompt(options).then(answers => {
  // This code will be executed just after the user answer all questions
  const { item = "", completed = false, date = "" } = answers;
  if (item) {
    items.push({
      item,
      completed,
      date
    });

    datastore.save(filepath, items);
  }

  utils.printList(items);
});
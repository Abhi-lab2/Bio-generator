export const randomNames = ({ setNamechange }) => {
  let names = [
    "John",
    "Will",
    "Jerry",
    "Rayan",
    "Mike",
    "Harry",
    "Bob",
    "Popaye",
    "kayle",
  ];
  setNamechange(names[Math.floor(Math.random() * names.length)]);
};

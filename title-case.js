function titleCase(str) {
  let StringArray = str.toLowerCase().split(" ");
  let formattedString = "";
  for (let i = 0; i <= StringArray.length - 1; i++) {
    let formattedWord =
      StringArray[i][0].toUpperCase() + StringArray[i].slice(1);
    formattedString = formattedString + " " + formattedWord;
  }
  return formattedString.slice(1);
}
let formatted = titleCase("abcd uilk");
console.log(formatted);

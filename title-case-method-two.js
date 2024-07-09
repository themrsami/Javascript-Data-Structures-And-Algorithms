function titleCase(str) {
  let string = RemoveNonAlphabatic(str);
  let StringArray = string.toLowerCase().split(" ");
  for (let i = 0; i <= StringArray.length - 1; i++) {
    StringArray[i] = StringArray[i][0].toUpperCase() + StringArray[i].slice(1);
  }
  return StringArray.join(" ");
}

function RemoveNonAlphabatic(strr) {
  let OnlyAlphabatic = strr.replace(/[^a-zA-Z ]/g, "");
  return OnlyAlphabatic;
}

console.log(titleCase("hassle free#$ gogo -=-=-=lessgo"));

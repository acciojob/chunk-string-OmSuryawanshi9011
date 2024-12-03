function stringChop(str, size) {
  // If the string is null, return an empty array
  if (str === null) {
    return [];
  }

  // Initialize an empty array to hold the chunks
  let result = [];

  // Loop through the string and slice it into chunks of size `size`
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));


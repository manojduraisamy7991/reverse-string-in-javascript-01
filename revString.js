// Original string
const str = 'mano';

// Array to hold reversed characters
const rev = [];

// Split the string into an array of characters, iterate over each character
str.split('').forEach((char, i) => {
  // Push each character starting from the end into the rev array
  rev.push(str[str.length - i - 1]);
});

// Join the characters in the rev array into a string and print it
console.log(rev.join('')); // Output: onam

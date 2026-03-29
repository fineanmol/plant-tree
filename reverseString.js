// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Example usage
const text = "Keerthana";
console.log("Original:", text);
console.log("Reversed:", reverseString(text));

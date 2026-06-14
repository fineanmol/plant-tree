const quotes = [
  "Code is like humor. When you have to explain it, it's bad.",
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes.",
  "In order to be irreplaceable, one must always be different.",
  "Java is to JavaScript what car is to carpet.",
  "Knowledge is power.",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
  "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Truth can only be found in one place: the code.",
  "The best error message is the one that never shows up.",
  "Before software can be reusable, it first has to be usable.",
  "Make it work, make it right, make it fast.",
  "Simplicity is the soul of efficiency.",
  "It works on my machine.",
];

const trees = ["🌱", "🌿", "🌲", "🌳", "🌴", "🎋", "🎄", "🌾", "🍀", "🪴"];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
const randomTree = trees[Math.floor(Math.random() * trees.length)];
const now = new Date();

const readme = `${randomTree} Updated on ${now.toUTCString()}

> "${randomQuote}"
`;

console.log(readme);

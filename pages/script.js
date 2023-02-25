// Define the number of equations to generate
const numEquations = 10;

// Define the range of coefficients for the equations
const minCoeff = -10;
const maxCoeff = 10;

// Define the DOM element where the equations will be displayed
const equationContainer = document.getElementById("equation-container");

// Generate the equations and display them in the DOM
for (let i = 1; i <= numEquations; i++) {
  // Generate random coefficients for the equation
  const a = Math.floor(Math.random() * (maxCoeff - minCoeff + 1)) + minCoeff;
  const b = Math.floor(Math.random() * (maxCoeff - minCoeff + 1)) + minCoeff;
  const c = Math.floor(Math.random() * (maxCoeff - minCoeff + 1)) + minCoeff;
  
  // Construct the equation string using Mathjax format
  const equationString = `$$${a}x + ${b}y = ${c}$$`;
  
  // Create a new DOM element for the equation and set its content to the equation string
  const equationElement = document.createElement("div");
  equationElement.innerHTML = equationString;
  
  // Add the new equation element to the equation container in the DOM
  equationContainer.appendChild(equationElement);
}

// Use MathJax to render the equations in the DOM
MathJax.typesetPromise();

const limit = 50; // Heap memory usage limit in MB
let elements = []; // Array to hold generated DOM elements

// Function to generate DOM elements
const generateElements = () => {
  for (let i = 0; i < 10000; i++) {
    const element = document.createElement("div");
    element.textContent = `Element ${i + 1}`;
    document.body.appendChild(element);
    elements.push(element);
  }
  updateMemoryUsage();
};

// Function to remove DOM elements
const removeElements = () => {
  elements.forEach(element => document.body.removeChild(element));
  elements = [];
  updateMemoryUsage();
};

// Function to update memory usage display
const updateMemoryUsage = () => {
  if (window.performance && window.performance.memory) {
    const memoryUsedMB = window.performance.memory.usedJSHeapSize / (1024 * 1024);
    document.getElementById("memory").textContent = `Memory Usage: ${memoryUsedMB.toFixed(2)} MB`;
    
    if (memoryUsedMB > limit) {
      alert("Memory usage has exceeded 50 MB. Please optimize your actions to reduce memory consumption.");
    }
  } else {
    document.getElementById("memory").textContent = "Memory usage information is not available in this browser.";
  }
};

// Add event listeners to buttons
document.getElementById("generate").addEventListener("click", generateElements);
document.getElementById("remove").addEventListener("click", removeElements);

// Set interval to update memory usage every second
setInterval(updateMemoryUsage, 1000);

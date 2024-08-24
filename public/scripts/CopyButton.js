function setupCopyButtons() {
  document
    .querySelectorAll(".inline-code-snippet-container")
    .forEach((container) => {
      const button = container.querySelector(".copy-button");
      const codeElement = container.querySelector("code");

      button.addEventListener("click", () => {
        const textToCopy = codeElement.textContent;
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            button.textContent = "Copied!";
            
            // Remove existing background classes
            button.classList.remove("bg-gray-700", "hover:bg-gray-600");
            
            // Add green background classes
            button.classList.add("bg-green-600", "hover:bg-green-500");
            
            // Fallback: directly set the background color if classes don't work
            button.style.backgroundColor = "#16a34a"; // Tailwind's green-600
            button.style.transition = "background-color 150ms ease-in-out";
            setTimeout(() => {
              button.textContent = "Copy";
              // Revert classes
              button.classList.remove("bg-green-600", "hover:bg-green-500");
              button.classList.add("bg-gray-700", "hover:bg-gray-600");
              // Remove inline styles
              button.style.backgroundColor = "";
            }, 2000);
          })
          .catch((err) => console.error("Failed to copy text: ", err));
      });
    });
}

// Run the setup immediately
setupCopyButtons();

// Reinitialize on page load
document.addEventListener("astro:page-load", setupCopyButtons);
function setupScrollButtons() {
  document.querySelectorAll(".scroll-btn").forEach((button) => {
    const targetId = button.getAttribute("data-target-id");
    
    // Set animation play state to running (remove this if animations aren't needed)
    button.style.animationPlayState = 'running';
    
    button.addEventListener("click", () => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.error(`Element with ID ${targetId} not found`);
      }
    });
  });
}

// Function to start animations (optional, remove if not necessary)
function startButtonAnimations() {
  document.querySelectorAll('.scroll-btn').forEach((btn) => {
    btn.style.animationPlayState = 'running';
  });
}

// Initialize scroll buttons once on load
function initializeScrollButtons() {
  setupScrollButtons();
  startButtonAnimations(); // Remove this call if animations aren't needed
}

// Setup scroll buttons on page load
document.addEventListener('DOMContentLoaded', initializeScrollButtons);
document.addEventListener("astro:page-load", initializeScrollButtons);

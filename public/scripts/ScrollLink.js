function setupScrollLinks() {
  document.querySelectorAll(".scroll-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("data-target-id");
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const yOffset = -10; // Adjust this value to control the scroll position
          const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
        }
      }
    });
  });
}

// Run the setup immediately
setupScrollLinks();

// Reinitialize on page load
document.addEventListener("astro:page-load", setupScrollLinks);

// Toggle Sidebar Menu
function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.right = sidebar.style.right === "0px" ? "-250px" : "0px";

  // Toggle aria-expanded for accessibility
  const isExpanded = sidebar.style.right === "0px";
  document.querySelector('.menu-icon').setAttribute('aria-expanded', isExpanded);
}

// Close Sidebar When Clicking Outside
document.addEventListener('click', function (event) {
  const sidebar = document.getElementById("sidebar");
  const menuIcon = document.querySelector('.menu-icon');
  
  // Check if the click is outside the sidebar and menu icon
  if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
      sidebar.style.right = "-250px";
  }
});

// Smooth Scroll for Know More Button
document.querySelector('.know-more-btn').addEventListener('click', function () {
  document.getElementById('target-section').scrollIntoView({ behavior: 'smooth' });
});
// JavaScript for scroll-triggered appearance
document.addEventListener("DOMContentLoaded", function() {
  const targetSection = document.getElementById("brewpubs-section");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              targetSection.classList.add("visible");
              observer.unobserve(targetSection); // Stop observing once visible
          }
      });
  }, {
      threshold: 0.1 // Adjust as needed to trigger when 10% of the section is visible
  });

  observer.observe(targetSection);
});
// Toggle the sidebar open and close
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar.style.left === "0px") {
      sidebar.style.left = "-250px"; // Hide sidebar
  } else {
      sidebar.style.left = "0px"; // Show sidebar
  }
}

// Toggle dropdown content visibility
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
  } else {
      dropdown.style.display = "block";
  }
}




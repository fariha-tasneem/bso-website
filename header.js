
document.addEventListener("DOMContentLoaded", function() {
  const headerContainer = document.querySelector("header-container");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "header.html");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      headerContainer.innerHTML = xhr.responseText;

      // After inserting the header content, initialize the toggle menu functionality
      const navLinks = document.getElementById("navLinks");
      function showMenu() {
        navLinks.style.right = "0";
      }
      function hideMenu() {
        navLinks.style.right = "-200px";
      }

      // Add event listeners to the menu toggle icons
      const menuOpenIcon = document.querySelector(".fa-bars");
      const menuCloseIcon = document.querySelector(".fa-times");
      menuOpenIcon.addEventListener("click", showMenu);
      menuCloseIcon.addEventListener("click", hideMenu);
    }
    
  };
  xhr.send();
});

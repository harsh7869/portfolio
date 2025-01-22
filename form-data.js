document.querySelector('.form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
  
    const response = await fetch('https://portfolio-o97b.onrender.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message }),
    });
  
    const result = await response.json();
    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert(result.error || 'Failed to send message.');
    }
  });
  

  function toggleMenu() {
    const navItems = document.querySelector(".nav-items");
    navItems.classList.toggle("show");
  }

  
  // Close the menu when any nav item is clicked
  document.querySelectorAll(".nav-items a").forEach(item => {
    item.addEventListener("click", () => {
      const navItems = document.querySelector(".nav-items");
      navItems.classList.remove("show"); // Remove the 'show' class to hide the menu
    });
  });
  
      const icon = document.getElementById("themeIcon");
      icon.addEventListener("click", () => {
        document.body.classList.toggle("light");
        icon.classList.toggle("fa-moon");
        icon.classList.toggle("fa-sun");
      });
 
      // Theme toggle (desktop + mobile)
      const themeIconDesktop = document.getElementById("themeIcon");
      const themeIconMobile = document.getElementById("themeIconMobile");

      function toggleTheme() {
        document.body.classList.toggle("dark-theme");
        [themeIconDesktop, themeIconMobile].forEach((icon) => {
          if (icon) icon.classList.toggle("fa-sun");
          if (icon) icon.classList.toggle("fa-moon");
        });
      }

      themeIconDesktop?.addEventListener("click", toggleTheme);
      themeIconMobile?.addEventListener("click", toggleTheme);

      // Smooth scroll for all drawer links
      document.querySelectorAll(".mobile-nav .nav-link").forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
          // close offcanvas after click
          const offcanvas = bootstrap.Offcanvas.getInstance(
            document.getElementById("mobileNav")
          );
          offcanvas?.hide();
        });
      });

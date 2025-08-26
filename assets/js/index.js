 document.getElementById("viewProjectsBtn").addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  });
  document.addEventListener("DOMContentLoaded", () => {
        const scrollBtn = document.getElementById("scrollBtn");

        if (!scrollBtn) return; // safeguard if button is missing

        scrollBtn.addEventListener("click", () => {
            const atBottom = (window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 5);

            if (!atBottom) {
            // scroll to bottom
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            } else {
            // scroll to top
            window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });

        // Keep arrow in sync with scroll position
        window.addEventListener("scroll", () => {
            const atBottom = (window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 5);
            if (atBottom) {
            scrollBtn.innerHTML = "&#9650;"; // ↑ at bottom
            } else {
            scrollBtn.innerHTML = "&#9660;"; // ↓ elsewhere
            }
        });
        });

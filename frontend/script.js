console.log("Frontend connected!");

// Example: handle form submission (later for uploading artisan product info)
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("demoBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("This will later call the backend API!");
    });
  }
});

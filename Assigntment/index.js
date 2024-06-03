document.addEventListener("DOMContentLoaded", (event) => {
  const openFormBtn = document.getElementById("openFormBtn");
  const popupForm = document.getElementById("popupForm");
  const closeFormBtn = document.getElementById("closeFormBtn");

  openFormBtn.addEventListener("click", () => {
    popupForm.style.display = "block";
  });

  closeFormBtn.addEventListener("click", () => {
    popupForm.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == popupForm) {
      popupForm.style.display = "none";
    }
  });
});

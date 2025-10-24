document.addEventListener("DOMContentLoaded", function () {
  // Add button logic
  const addBtn = document.querySelector("#addBtn");
  const movieInput = document.querySelector("#movieInput");

  if (addBtn && movieInput) {
    addBtn.addEventListener("click", function () {
      const movieName = movieInput.value.trim();
      if (movieName) {
        alert(`Adding movie: ${movieName}`);
        movieInput.value = "";
      }
    });
  } else {
    console.warn("Add button or input field not found.");
  }

  // Update buttons logic
  const updateButtons = document.querySelectorAll(".updateBtn");
  updateButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      alert("Update button clicked");
    });
  });

  // Delete buttons logic
  const deleteButtons = document.querySelectorAll(".deleteBtn");
  deleteButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      alert("Delete button clicked");
    });
  });
});

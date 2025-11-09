const ratingForm = document.querySelector(".rating-form");
const ratings = document.querySelectorAll("label");
const submitButton = document.querySelector("button[type='submit']");
const thankYouSection = document.querySelector("#thank-you-card");
const ratingSection = document.querySelector("#form-card");
const selectedRatingDisplay = document.querySelector(".rating-answer");

let selectedRating = null;

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    ratings.forEach((rating) => rating.classList.remove("active"));
    rating.classList.add("active");
    selectedRating = rating.textContent;
    submitButton.disabled = false;
  });
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission

  selectedRatingDisplay.textContent = `You selected ${selectedRating} out of 5`;

  // Hide rating section and show thank you section
  ratingSection.style.display = "none";
  thankYouSection.style.display = "flex";
});

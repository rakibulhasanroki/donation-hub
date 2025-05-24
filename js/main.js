const blogButton = document.getElementById("blog-button");

if (blogButton) {
  blogButton.addEventListener("click", function () {
    window.location.replace("../blog.html");
  });
}

const homeButton = document.getElementById("home-button");

if (homeButton) {
  homeButton.addEventListener("click", function () {
    window.location.replace("../index.html");
  });
}

const historyButton = document.getElementById("history-button");
const donationButton = document.getElementById("donation-button");

if (historyButton) {
  historyButton.addEventListener("click", function () {
    historyButton.classList.add("bg-lime-300");
    donationButton.classList.remove("bg-lime-300");
    document.getElementById("donation-section").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");
  });
}

if (donationButton) {
  donationButton.addEventListener("click", function () {
    historyButton.classList.remove("bg-lime-300");
    donationButton.classList.add("bg-lime-300");
    document.getElementById("donation-section").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");
  });
}
// noakhali-donation
donateButton(
  "noakhali-donate-button",
  "noakhali-donation-amount",
  "noakhali-balance",
  "noakhali-text"
);

// feni-donation
donateButton(
  "feni-donate-button",
  "feni-donation-amount",
  "feni-balance",
  "feni-text"
);

// quota-donation
donateButton(
  "quota-donate-button",
  "quota-donation-amount",
  "quota-balance",
  "quota-text"
);

const closeModal = document.getElementById("close-modal");
closeModal.addEventListener("click", function () {
  document.getElementById("black-shed").classList.add("hidden");
  document.getElementById("modal").classList.add("hidden");
});

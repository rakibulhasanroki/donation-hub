function donateButton(id1, id2, id3, id4) {
  const donateButton = document.getElementById(id1);
  const donationInput = document.getElementById(id2);

  const balance = document.getElementsByClassName("balance");
  if (donateButton) {
    donateButton.addEventListener("click", function () {
      let isBalance = false;
      for (element of balance) {
        const newBalance =
          parseFloat(element.innerText) - parseFloat(donationInput.value);
        element.innerText = newBalance;
        isBalance = true;
      }
      if (isBalance) {
        let donationBalance = parseFloat(donationInput.value);
        const updateBalance =
          parseFloat(document.getElementById(id3).innerText) + donationBalance;
        document.getElementById(id3).innerText = updateBalance;
        document.getElementById("black-shed").classList.remove("hidden");
        document.getElementById("modal").classList.remove("hidden");

        // transaction history
        const history = document.getElementById("history-section");
        const donatedText = document.getElementById(id4);
        const date = new Date();
        const divElement = document.createElement("div");

        divElement.className = "border border-gray-200 rounded-xl p-4";
        divElement.innerHTML = `<p class="font-bold text-xl">${donationInput.value} Taka donated for ${donatedText.innerText}</p>
        <p class="text-xs text-gray-500 " >${date}</p> 
        `;
        history.appendChild(divElement);
      }
      donationInput.value = "";
    });
  }
}

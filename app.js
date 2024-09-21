let seatArr = [];
const names = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const nextBtn = document.getElementById("next-btn");
const seatCount = document.getElementById("seatCount");
const totalSeat = document.getElementById("totalSeat");
const seatLists = document.getElementById("seatLists");
const totalPrice = document.getElementById("totalPrice");
const couponField = document.getElementById("couponText");
const discountBtn = document.getElementById("discountBtn");
const totalDiscount = document.getElementById("totalDiscount");
let totalPrices = parseInt(totalPrice.innerText);
let totalSeats = parseInt(totalSeat.innerText);
const grandTotal = document.getElementById("grandPrice");
const discount = document.getElementById("discount");
let discounts = parseInt(discount.innerText);

function seatSelected(event) {
  if (seatArr.includes(event.innerText)) {
    return alert("One Person Per Seat");
  }
  seatArr.push(event.innerText);

  if (seatArr.length > 4) {
    return alert("Maximum 4");
  }
  event.classList.add("bg-main", "text-white");

  seatCount.innerText = seatArr.length;
  totalSeats--;
  totalSeat.innerText = totalSeats;
  seatLists.innerHTML += `<li class="flex justify-between text-xl text-gray-500">
                    <span>${event.innerText}</span> <span>Economy</span> <span>550</span>
                  </li>`;
  totalPrices += 550;
  totalPrice.innerText = totalPrices;
  if (seatArr.length > 3) {
    couponField.removeAttribute("disabled");
    discountBtn.removeAttribute("disabled");
    totalDiscount.classList.remove("hidden");
    grandTotal.innerText = totalPrices;
  }
  if (seatArr.length > 0) {
    names.removeAttribute("disabled");
    email.removeAttribute("disabled");
    number.removeAttribute("disabled");
  }
}

document.getElementById("discountBtn").addEventListener("click", function () {
  if (couponField.value == "") {
    return alert("Enter Coupon Code");
  } else if (couponField.value == "NEW15" && discounts == 0) {
    discounts = totalPrices * 0.15;
    discount.innerText = discounts;
    totalPrices -= discounts;
    grandTotal.innerText = totalPrices;
    return;
  } else if (couponField.value == "COUPLE20" && discounts == 0) {
    discounts = totalPrices * 0.2;
    discount.innerText = discounts;
    totalPrices -= discounts;
    grandTotal.innerText = totalPrices;
    return;
  }
});

document.getElementById("buy").addEventListener("click", function () {
  document.getElementById("buy-section").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("close-btn").addEventListener("click", function () {
  console.log("ok");
  location.reload();
});
document.getElementById("number").addEventListener("keyup", function () {
  if (number.value.length > 0 && names.value.length > 0) {
    nextBtn.removeAttribute("disabled");
  } 
});

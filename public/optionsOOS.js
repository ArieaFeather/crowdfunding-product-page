let countCheck = document.querySelectorAll(".pledge-count");
let pledgeReward = document.querySelectorAll(".pledge-box .btn");
let pledgeBoxOOS = document.querySelectorAll(".pledge-box");

countCheck[3].style.display = "none";

for (let i = 0; i < countCheck.length; i++) {
    if (countCheck[i].innerText == "0") {
        pledgeReward[i].innerText = "Out of Stock";
        pledgeReward[i].classList.add("out-of-stock");
        pledgeReward[i].removeAttribute("href");
        pledgeBoxOOS[i].style.opacity = 0.3;
    }
}

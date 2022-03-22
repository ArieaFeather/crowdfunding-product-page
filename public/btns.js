let pledgeBtn = document.querySelectorAll(".pledge-condition");
let overlay = document.querySelector(".overlay");
let overlayClose = document.querySelector(".overlay .close");
let sec4pledgebtn = document.getElementsByClassName(
    "#section-4 .pledge-box .checkmark"
);

// DIVIDER FOR SECTION 4 PLEDGEBOX
let pledgeDivider = document.querySelectorAll("#section-4 .pledge-box hr");
for (let i = 0; i < pledgeBtn.length; i++) {
    if (pledgeBtn[i].classList.contains("out-of-stock")) {
        null;
    } else {
        pledgeBtn[i].onclick = () => {
            overlay.classList.add("visible");
        };
    }
}

// ALLOWS POPUP FOR PLEDGES
document.querySelector("#section-1 .btn").onclick = () => {
    overlay.classList.add("visible");
};

overlayClose.onclick = () => {
    overlay.classList.remove("visible");
};

pledgeDivider[i].style.display = "none";
for (let i = 0; i < sec4pledgebtn.length; i++) {
    sec4pledgebtn[i].onclick = () => {
        if (pledgeDivider[i].style.display == "") {
            pledgeDivider[i].style.display = "block";
        } else {
            pledgeDivider[i].style.display = "";
        }
    };
}

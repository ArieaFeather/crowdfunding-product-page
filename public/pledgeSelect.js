let pledgeSelect = document.querySelectorAll(
    "#section-4 .pledge-box--check input"
);
let sec4pledgeBox = document.querySelectorAll("#section-4 .pledge-box");
let formSelect = document.querySelectorAll("#section-4 .pledge-box form");
let section4countCheck = document.querySelectorAll(
    "#section-4 .pledge-box--inner-header .pledge-count"
);

for (let i = 0; i < pledgeSelect.length; i++) {
    if (section4countCheck[i].innerText == 0) {
    } else {
        pledgeSelect[i].onclick = () => {
            formSelect[i].classList.toggle("visible");
            sec4pledgeBox[i].classList.toggle("selected");
        };
    }
}

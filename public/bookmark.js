let markCheck = document.querySelector(".bookmark");

markCheck.addEventListener("click", bookMarked);
function bookMarked() {
    switch (markCheck.innerText) {
        case "Bookmark":
            markCheck.innerText = "Bookmarked";
            break;
        case "Bookmarked":
            markCheck.innerText = "Bookmark";
            break;

        default:
    }
}

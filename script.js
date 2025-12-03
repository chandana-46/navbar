let searchBox = document.getElementById("searchBox");
let openBtn = document.getElementById("open-search");
let closeBtn = document.getElementById("close-search");

openBtn.onclick = () => {
    searchBox.style.display = "flex";
};

closeBtn.onclick = () => {
    searchBox.style.display = "none";
};

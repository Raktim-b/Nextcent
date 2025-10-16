let btn = document.querySelector(".menu-btn");
let dropList = document.querySelector(".list");
let nav = false;
function showlist() {
  if (nav == false) {
    dropList.style.display = "block";
    nav = true;
  } else {
    dropList.style.display = "none";
    nav = false;
  }
  console.log(nav);
}
btn.addEventListener("click", showlist);

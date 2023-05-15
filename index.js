let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

GitHubCalendar(".calendar", "JRaghu842", {
  responsive: true,
  global_stats: false,
  tooltips: true,
});

document.getElementById("resume-link-1").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1LBrMkX5j7wlU6zjqHgvBqyGtuct4h43h/view?usp=share_link"
  );
};

document.getElementById("resume-link-2").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1LBrMkX5j7wlU6zjqHgvBqyGtuct4h43h/view?usp=share_link"
  );
};

// https://drive.google.com/file/d/1LBrMkX5j7wlU6zjqHgvBqyGtuct4h43h/view?usp=share_link

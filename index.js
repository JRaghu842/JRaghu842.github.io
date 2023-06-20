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
    "https://drive.google.com/file/d/1yjCNibHCsvRRJlpC6MIR_ViLl1k693qC/view?usp=drive_link"
  );
};

// https://drive.google.com/file/d/1yjCNibHCsvRRJlpC6MIR_ViLl1k693qC/view?usp=drive_link

document.getElementById("resume-link-2").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1yjCNibHCsvRRJlpC6MIR_ViLl1k693qC/view?usp=drive_link"
  );
};

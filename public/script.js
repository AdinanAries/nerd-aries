function showHomePage() {
  $(".NavLink").removeClass("active");
  $("#HomeLink").addClass("active");
  document.getElementById("WebsitesPage").style.display = "none";
  document.getElementById("VlogsPage").style.display = "none";
  document.getElementById("TutoringPage").style.display = "none";
  document.getElementById("MentoringPage").style.display = "none";
  document.getElementById("PatreonsPage").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
}
function showWebSitesPage() {
  $(".NavLink").removeClass("active");
  $("#WebsitesLink").addClass("active");
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("VlogsPage").style.display = "none";
  document.getElementById("TutoringPage").style.display = "none";
  document.getElementById("MentoringPage").style.display = "none";
  document.getElementById("PatreonsPage").style.display = "none";
  document.getElementById("WebsitesPage").style.display = "block";
}
function showVlogsPage() {
  $(".NavLink").removeClass("active");
  $("#VlogsLink").addClass("active");
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("WebsitesPage").style.display = "none";
  document.getElementById("TutoringPage").style.display = "none";
  document.getElementById("MentoringPage").style.display = "none";
  document.getElementById("PatreonsPage").style.display = "none";
  document.getElementById("VlogsPage").style.display = "block";
}
function showTutoringPage() {
  $(".NavLink").removeClass("active");
  $("#TutoringLink").addClass("active");
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("WebsitesPage").style.display = "none";
  document.getElementById("VlogsPage").style.display = "none";
  document.getElementById("MentoringPage").style.display = "none";
  document.getElementById("PatreonsPage").style.display = "none";
  document.getElementById("TutoringPage").style.display = "block";
}
function showMentoringPage() {
  $(".NavLink").removeClass("active");
  $("#MentoringLink").addClass("active");
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("WebsitesPage").style.display = "none";
  document.getElementById("VlogsPage").style.display = "none";
  document.getElementById("TutoringPage").style.display = "none";
  document.getElementById("PatreonsPage").style.display = "none";
  document.getElementById("MentoringPage").style.display = "block";
}
function showPatreonsPage() {
  $(".NavLink").removeClass("active");
  $("#PatreonsLink").addClass("active");
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("WebsitesPage").style.display = "none";
  document.getElementById("VlogsPage").style.display = "none";
  document.getElementById("TutoringPage").style.display = "none";
  document.getElementById("MentoringPage").style.display = "none";
  document.getElementById("PatreonsPage").style.display = "block";
}

$(".HomePageLink").click(function (event) {
  showHomePage();
});

$(".PatreonsPageLink").click(function (event) {
  showPatreonsPage();
});

$(".WebsitesPageLink").click(function (event) {
  showWebSitesPage();
});

$(".VlogsPageLink").click(function (event) {
  showVlogsPage();
});

$(".TutoringPageLink").click(function (event) {
  showTutoringPage();
});

$(".MentoringPageLink").click(function (event) {
  showMentoringPage();
});

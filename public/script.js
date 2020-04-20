function showHomePage() {
  $("#GoBackBtn").css("display", "none");
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
  $("#GoBackBtn").css("display", "block");
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
  $("#GoBackBtn").css("display", "block");
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
  $("#GoBackBtn").css("display", "block");
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
  $("#GoBackBtn").css("display", "block");
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
  $("#GoBackBtn").css("display", "block");
  $(".NavLink").removeClass("active");
  $("#PatreonsLink").addClass("active");
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("WebsitesPage").style.display = "none";
  document.getElementById("VlogsPage").style.display = "none";
  document.getElementById("TutoringPage").style.display = "none";
  document.getElementById("MentoringPage").style.display = "none";
  document.getElementById("PatreonsPage").style.display = "block";
}

function showWebsitesPageContent() {
  $(".WebsitePageIntro").css("display", "none");
  $("#WebsitesPageContent").css("display", "block");
}

function showWebsitesPageIntro() {
  $(".WebsitePageIntro").css("display", "block");
  $("#WebsitesPageContent").css("display", "none");
}

function showTutoringPageContent() {
  $(".TutoringPageIntro").css("display", "none");
  $("#TutoringPageContent").css("display", "block");
}

function showtutoringPageIntro() {
  $(".TutoringPageIntro").css("display", "block");
  $("#TutoringPageContent").css("display", "none");
}

$("#GoBackBtn").click(function (event) {
  showHomePage();
});

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

$("#toWebsitesCostEstimateFormBtn").click(function (event) {
  showWebsitesPageContent();
});

$("#BacktoWebsitesIntroBtn").click(function (event) {
  showWebsitesPageIntro();
});

$("#toBookTutoringFormBtn").click(function (event) {
  showTutoringPageContent();
});

$("#BacktoTutoringIntroBtn").click(function (event) {
  showtutoringPageIntro();
});

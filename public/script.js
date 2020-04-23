function showHomePage() {
  $("#GoBackBtn").css("display", "none");
  $(".NavLink").removeClass("active");
  $("#HomeLink").addClass("active");
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("WebsitesPage").style.display = "none";
  document.getElementById("VlogsPage").style.display = "none";
  document.getElementById("TutoringPage").style.display = "none";
  document.getElementById("MentoringPage").style.display = "none";
  document.getElementById("PatreonsPage").style.display = "none";
  document.getElementById("signupPage").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
  $("html, body").animate({ scrollTop: 0 }, "fast");
}
function showWebSitesPage() {
  $("#GoBackBtn").css("display", "block");
  $(".NavLink").removeClass("active");
  $("#WebsitesLink").addClass("active");
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("VlogsPage").style.display = "none";
  document.getElementById("TutoringPage").style.display = "none";
  document.getElementById("MentoringPage").style.display = "none";
  document.getElementById("PatreonsPage").style.display = "none";
  document.getElementById("signupPage").style.display = "none";
  document.getElementById("WebsitesPage").style.display = "block";
  $("html, body").animate({ scrollTop: 0 }, "fast");
}
function showVlogsPage() {
  $("#GoBackBtn").css("display", "block");
  $(".NavLink").removeClass("active");
  $("#VlogsLink").addClass("active");
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("WebsitesPage").style.display = "none";
  document.getElementById("TutoringPage").style.display = "none";
  document.getElementById("MentoringPage").style.display = "none";
  document.getElementById("PatreonsPage").style.display = "none";
  document.getElementById("signupPage").style.display = "none";
  document.getElementById("VlogsPage").style.display = "block";
  $("html, body").animate({ scrollTop: 0 }, "fast");
}
function showTutoringPage() {
  $("#GoBackBtn").css("display", "block");
  $(".NavLink").removeClass("active");
  $("#TutoringLink").addClass("active");
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("WebsitesPage").style.display = "none";
  document.getElementById("VlogsPage").style.display = "none";
  document.getElementById("MentoringPage").style.display = "none";
  document.getElementById("PatreonsPage").style.display = "none";
  document.getElementById("signupPage").style.display = "none";
  document.getElementById("TutoringPage").style.display = "block";
  $("html, body").animate({ scrollTop: 0 }, "fast");
}
function showMentoringPage() {
  $("#GoBackBtn").css("display", "block");
  $(".NavLink").removeClass("active");
  $("#MentoringLink").addClass("active");
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("WebsitesPage").style.display = "none";
  document.getElementById("VlogsPage").style.display = "none";
  document.getElementById("TutoringPage").style.display = "none";
  document.getElementById("PatreonsPage").style.display = "none";
  document.getElementById("signupPage").style.display = "none";
  document.getElementById("MentoringPage").style.display = "block";
  $("html, body").animate({ scrollTop: 0 }, "fast");
}
function showPatreonsPage() {
  $("#GoBackBtn").css("display", "block");
  $(".NavLink").removeClass("active");
  $("#PatreonsLink").addClass("active");
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("WebsitesPage").style.display = "none";
  document.getElementById("VlogsPage").style.display = "none";
  document.getElementById("TutoringPage").style.display = "none";
  document.getElementById("MentoringPage").style.display = "none";
  document.getElementById("PatreonsPage").style.display = "block";
  document.getElementById("signupPage").style.display = "none";
  $("html, body").animate({ scrollTop: 0 }, "fast");
}
function showLoginPage() {
  $("#GoBackBtn").css("display", "block");
  $(".NavLink").removeClass("active");
  $("#HomeLink").addClass("active");
  document.getElementById("loginPage").style.display = "block";
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("WebsitesPage").style.display = "none";
  document.getElementById("VlogsPage").style.display = "none";
  document.getElementById("TutoringPage").style.display = "none";
  document.getElementById("PatreonsPage").style.display = "none";
  document.getElementById("MentoringPage").style.display = "none";
  document.getElementById("signupPage").style.display = "none";
  $("html, body").animate({ scrollTop: 0 }, "fast");
}
function showSignupPage() {
  $("#GoBackBtn").css("display", "block");
  $(".NavLink").removeClass("active");
  $("#HomeLink").addClass("active");
  document.getElementById("signupPage").style.display = "block";
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("WebsitesPage").style.display = "none";
  document.getElementById("VlogsPage").style.display = "none";
  document.getElementById("TutoringPage").style.display = "none";
  document.getElementById("PatreonsPage").style.display = "none";
  document.getElementById("MentoringPage").style.display = "none";
  $("html, body").animate({ scrollTop: 0 }, "fast");
}

function showWebsitesPageContent() {
  $(".WebsitePageIntro").css("display", "none");
  $("#WebsitesPageContent").css("display", "block");
  $("html, body").animate({ scrollTop: 0 }, "fast");
}

function showWebsitesPageIntro() {
  $(".WebsitePageIntro").css("display", "block");
  $("#WebsitesPageContent").css("display", "none");
  $("html, body").animate({ scrollTop: 0 }, "fast");
}

function showTutoringPageContent() {
  $(".TutoringPageIntro").css("display", "none");
  $("#TutoringPageContent").css("display", "block");
  $("html, body").animate({ scrollTop: 0 }, "fast");
}

function showtutoringPageIntro() {
  $(".TutoringPageIntro").css("display", "block");
  $("#TutoringPageContent").css("display", "none");
  $("html, body").animate({ scrollTop: 0 }, "fast");
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

$(".loginBtn").click(function (event) {
  showLoginPage();
});
$("#signupLink").click(function (event) {
  showSignupPage();
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 70) {
    let TopNavBarMenu = document.getElementById("TopNavBarMenu");
    TopNavBarMenu.style.position = "fixed";
    TopNavBarMenu.style.zIndex = 2;
    /*TopNavBarMenu.style.transition = "top 2s";*/
    TopNavBarMenu.style.left = "0";
    TopNavBarMenu.style.top = "0";
    TopNavBarMenu.style.width = "100vw";
    TopNavBarMenu.style.backgroundColor = "white";
  } else {
    let TopNavBarMenu = document.getElementById("TopNavBarMenu");
    /*TopNavBarMenu.style.transition = "top 2s";*/
    TopNavBarMenu.style.position = "initial";
    TopNavBarMenu.style.zIndex = "initial";
    TopNavBarMenu.style.left = "0";
    TopNavBarMenu.style.top = "0";
    TopNavBarMenu.style.width = "auto";
    TopNavBarMenu.style.background = "none";
  }
});

$(document).ready(function () {
  $(".ClientReviews").slick({
    autoplay: true,
    autoplaySpeed: 5000,
  });
});

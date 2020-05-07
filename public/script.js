//localStorage.setItem("isLoggedIn", "false");

let checkisPersonLoggedIn = () => {
  if (localStorage.getItem("UserInfo") === null) {
    document.getElementById("smallScreenloginBtn").style.display = "block";
    document.getElementById("smallScreenlogoutBtn").style.display = "none";
    document.getElementById("userPageProfilePhoto").style.display = "none";
    document.getElementById("addProfilePhotoBtn").style.display = "none";
    //document.getElementById("loginBtnAtProfilePage").style.display = "block";
    document.getElementById("userPageUserName").value = "";
    document.getElementById("userPageUserEmail").value = "";
    document.getElementById("userPageUserMobile").value = "";
  } else if (localStorage.getItem("isLoggedIn") === "true") {
    //document.getElementById("loginBtnAtProfilePage").style.display = "none";
    //alert(window.localStorage.getItem("UserInfo"));
    let user = JSON.parse(localStorage.getItem("UserInfo"));
    document.getElementById("smallScreenloginBtn").style.display = "none";
    document.getElementById("smallScreenlogoutBtn").style.display = "block";
    document.getElementById("introspan").innerHTML = `welcome back ${
      user.name.split(" ")[0]
    }! <br />How may I help you today?`;

    if (user.profile_pic == null) {
      document.getElementById("userPageProfilePhoto").style.display = "none";
      document.getElementById("addProfilePhotoBtn").style.display = "block";
      document.getElementById("addProfilePhotoBtnLabel").innerText =
        "Add Photo";
      document.getElementById("userPageProfileAvatar").style.display = "block";
    } else {
      document.getElementById("userPageProfilePhoto").style.display = "block";
      document.getElementById("userPageProfilePhoto").setAttribute("src", "");
      document.getElementById("addProfilePhotoBtn").style.display = "block";
      document.getElementById("addProfilePhotoBtnLabel").innerText =
        "Change Photo";
      document.getElementById("userPageProfileAvatar").style.display = "none";
    }
    document.getElementById("userPageUserName").value = user.name;
    document.getElementById("userPageUserEmail").value = user.email;
    document.getElementById("userPageUserMobile").value = user.mobile;
  } else {
    document.getElementById("smallScreenloginBtn").style.display = "block";
    document.getElementById("smallScreenlogoutBtn").style.display = "none";
    document.getElementById("userPageProfilePhoto").style.display = "none";
    document.getElementById("addProfilePhotoBtnLable").style.display = "none";
    //document.getElementById("loginBtnAtProfilePage").style.display = "block";
    document.getElementById("userPageUserName").value = "";
    document.getElementById("userPageUserEmail").value = "";
    document.getElementById("userPageUserMobile").value = "";
  }
};

checkisPersonLoggedIn();

function showHomePage() {
  $("#GoBackBtn").css("display", "none");
  $(".NavLink").removeClass("active");
  $("#HomeLink").addClass("active");
  $("#HomeLink2").addClass("active");
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("WebsitesPage").style.display = "none";
  document.getElementById("VlogsPage").style.display = "none";
  document.getElementById("TutoringPage").style.display = "none";
  document.getElementById("MentoringPage").style.display = "none";
  document.getElementById("PatreonsPage").style.display = "none";
  document.getElementById("signupPage").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
  document.querySelector("header").style.display = "flex";
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
  document.querySelector("header").style.display = "none";
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
  document.querySelector("header").style.display = "none";
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
  document.querySelector("header").style.display = "none";
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
  document.querySelector("header").style.display = "none";
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
  document.querySelector("header").style.display = "none";
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
  document.querySelector("header").style.display = "none";
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
  document.querySelector("header").style.display = "none";
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

function showUploadPhoto() {
  $("#choosePhotoLabel").css("display", "block");
  $("#choosePhotoInput").css("display", "block");
  $("#uploadPhotoBtn").css("display", "block");
}

var CollapseNotifications = () => {
  $("#notificationsContainer").slideUp("fast");
};
var ShowNotifications = () => {
  $("#notificationsContainer").slideDown("fast");
};

var CollapseUserInfoPage = () => {
  $("#UserInfoContainer").slideUp("fast");
};
var ShowUserInfoPage = () => {
  $("#UserInfoContainer").slideDown("fast");
};

$("#addProfilePhotoBtn").click((event) => {
  showUploadPhoto();
});
$("#UserInfoBtn").click((event) => {
  ShowUserInfoPage();
});

$("#CloseUserInfoBtn").click((event) => {
  CollapseUserInfoPage();
});

$("#NotificationsBtn").click((event) => {
  CollapseUserInfoPage();
  ShowNotifications();
});

$("#CloseNotificationsBtn").click((event) => {
  CollapseNotifications();
});

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
$("#smallScreenloginBtn").click(function (event) {
  CollapseUserInfoPage();
  showLoginPage();
});
$("#signupLink").click(function (event) {
  showSignupPage();
});
$("#connectLink").click(function (event) {
  showSignupPage();
});
$("#ScrollToTopIcon").click(function (event) {
  $("html, body").animate({ scrollTop: 0 }, "fast");
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 70) {
    $("#ScrollTopNavBarMenu").slideDown("fast");
    $(".arrow").fadeOut("fast");
    document.getElementById("ScrollTopNavBarMenu").style.display = "flex";
  } else {
    $("#ScrollTopNavBarMenu").slideUp("fast");
    document.getElementById("ScrollTopNavBarMenu").style.display = "none";
    $(".arrow").fadeIn("fast");
  }
});

$(document).ready(function () {
  $(".ClientReviews").slick({
    slide: ".eachReview",
    lazyLoad: "ondemand",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  });
});

$(".responsive").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

//function to logout of the system
function logoutMethod() {
  localStorage.removeItem("UserInfo");
  checkisPersonLoggedIn();
}

//Making ajax call here to backend
function login(callback) {
  let Email = document.getElementById("loginEmailFld").value;
  let Password = document.getElementById("loginPasswordFld").value;

  $.ajax({
    type: "POST",
    data: { email: Email, password: Password },
    url: "/login",
    success: function (data) {
      console.log(data);
      if (!data.id) {
        alert(data.Msg);
      } else {
        localStorage.setItem("UserInfo", JSON.stringify(data));
        localStorage.setItem("isLoggedIn", "true");
        callback();
      }
    },
  });
}

async function registerUser(callback) {
  let Name = document.getElementById("nameFld").value;
  let Email = document.getElementById("emailFld").value;
  let Mobile = document.getElementById("mobileFld").value;
  let Password = document.getElementById("passwordFld").value;

  $.ajax({
    type: "POST",
    data: {
      name: Name,
      email: Email,
      mobile: Mobile,
      password: Password,
    },
    url: "/signup",
    success: function (data) {
      console.log(data);
      localStorage.setItem("UserInfo", JSON.stringify(data));
      localStorage.setItem("isLoggedIn", "true");
      callback();
    },
  });
}

function RegisterWebsiteClient(callback) {
  let Name = document.getElementById("WbstNameFld").value;
  let Email = document.getElementById("WbstEmailFld").value;
  let Mobile = document.getElementById("WbstMobileFld").value;
  let Password = document.getElementById("WbstPasswordFld").value;

  $.ajax({
    type: "POST",
    data: {
      name: Name,
      email: Email,
      mobile: Mobile,
      password: Password,
    },
    url: "/RegisterWebsiteClient",
    success: function (data) {
      console.log(data);
      localStorage.setItem("UserInfo", JSON.stringify(data));
      localStorage.setItem("isLoggedIn", "true");
      callback();
    },
  });
}

function RegisterStudent(callback) {
  let Name = document.getElementById("TtrNameFld").value;
  let Email = document.getElementById("TtrEmailFld").value;
  let Mobile = document.getElementById("TtrMobileFld").value;
  let Password = document.getElementById("TtrPasswordFld").value;

  $.ajax({
    type: "POST",
    data: {
      name: Name,
      email: Email,
      mobile: Mobile,
      password: Password,
    },
    url: "/RegisterStudent",
    success: function (data) {
      console.log(data);
      localStorage.setItem("UserInfo", JSON.stringify(data));
      localStorage.setItem("isLoggedIn", "true");
      callback();
    },
  });
}

document.getElementById("TutoringSubmitBtn").addEventListener("click", () => {
  if (
    document.getElementById("TtrNameFld").value == "" &&
    document.getElementById("TtrEmailFld").value == "" &&
    document.getElementById("TtrMobileFld").value == "" &&
    document.getElementById("TtrPasswordFld").value == "" &&
    document.getElementById("TtrConfirmPasswordFld").value == ""
  )
    alert("please add your details");
  else if (document.getElementById("TtrNameFld").value == "") {
    alert("Please enter your full name");
    document.getElementById("TtrNameFld").focus();
  } else if (document.getElementById("TtrEmailFld").value == "") {
    alert("Please enter your email");
    document.getElementById("TtrEmailFld").focus();
  } else if (document.getElementById("TtrMobileFld").value == "") {
    alert("Please enter your mobile");
    document.getElementById("TtrMobileFld").focus();
  } else if (document.getElementById("TtrPasswordFld").value == "") {
    alert("Please enter your password");
    document.getElementById("TtrPasswordFld").focus();
  } else if (
    document.getElementById("TtrPasswordFld").value !==
    document.getElementById("TtrConfirmPasswordFld").value
  ) {
    alert("Passwords don't match");
    document.getElementById("TtrConfirmPasswordFld").value = "";
    document.getElementById("TtrConfirmPasswordFld").focus();
  } else {
    RegisterStudent(() => {
      checkisPersonLoggedIn();
      showHomePage();
    });
  }
});

document
  .getElementById("registerWbstClientConfirmBtn")
  .addEventListener("click", () => {
    if (
      document.getElementById("WbstNameFld").value == "" &&
      document.getElementById("WbstEmailFld").value == "" &&
      document.getElementById("WbstMobileFld").value == "" &&
      document.getElementById("WbstPasswordFld").value == "" &&
      document.getElementById("WbstConfirmPasswordFld").value == ""
    )
      alert("please add your details");
    else if (document.getElementById("WbstNameFld").value == "") {
      alert("Please enter your full name");
      document.getElementById("WbstNameFld").focus();
    } else if (document.getElementById("WbstEmailFld").value == "") {
      alert("Please enter your email");
      document.getElementById("WbstEmailFld").focus();
    } else if (document.getElementById("WbstMobileFld").value == "") {
      alert("Please enter your mobile");
      document.getElementById("WbstMobileFld").focus();
    } else if (document.getElementById("WbstPasswordFld").value == "") {
      alert("Please enter your password");
      document.getElementById("WbstPasswordFld").focus();
    } else if (
      document.getElementById("WbstPasswordFld").value !==
      document.getElementById("WbstConfirmPasswordFld").value
    ) {
      alert("Passwords don't match");
      document.getElementById("WbstConfirmPasswordFld").value = "";
      document.getElementById("WbstConfirmPasswordFld").focus();
    } else {
      RegisterWebsiteClient(() => {
        checkisPersonLoggedIn();
        showHomePage();
      });
    }
  });

document.getElementById("signupFormSubmitBtn").addEventListener("click", () => {
  if (
    document.getElementById("nameFld").value == "" &&
    document.getElementById("emailFld").value == "" &&
    document.getElementById("mobileFld").value == "" &&
    document.getElementById("passwordFld").value == "" &&
    document.getElementById("confirmPasswordFld").value == ""
  )
    alert("please add your details");
  else if (document.getElementById("nameFld").value == "") {
    alert("Please enter your full name");
    document.getElementById("nameFld").focus();
  } else if (document.getElementById("emailFld").value == "") {
    alert("Please enter your email");
    document.getElementById("emailFld").focus();
  } else if (document.getElementById("mobileFld").value == "") {
    alert("Please enter your mobile");
    document.getElementById("mobileFld").focus();
  } else if (document.getElementById("passwordFld").value == "") {
    alert("Please enter your password");
    document.getElementById("passwordFld").focus();
  } else if (
    document.getElementById("passwordFld").value !==
    document.getElementById("confirmPasswordFld").value
  ) {
    alert("Passwords don't match");
    document.getElementById("confirmPasswordFld").value = "";
    document.getElementById("confirmPasswordFld").focus();
  } else {
    registerUser(() => {
      checkisPersonLoggedIn();
      showHomePage();
    });
  }
});

document.getElementById("LoginSubmitBtn").addEventListener("click", () => {
  login(() => {
    checkisPersonLoggedIn();
    showHomePage();
  });
});

document
  .getElementById("smallScreenlogoutBtn")
  .addEventListener("click", () => {
    logoutMethod();
  });

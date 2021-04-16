window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

// $(window).scroll(function () {
//   var scrollPos = $(this).scrollTop();
//   $(".main-container").css({
//     "background-size": 100 + scrollPos + "%",
//   });
// });

// REWORK THE TOGGLEMENU ON MOBILE. You can add ::before to replace the spans to X to close it

var menuList = document.getElementById("menuList");
var closeButton = document.getElementById("close-button");

menuList.style.maxHeight = "0px";
closeButton.style.maxHeight = "0px";

function togglemenu() {
  if (
    menuList.style.maxHeight == "0px" &&
    closeButton.style.maxHeight == "0px"
  ) {
    menuList.style.maxHeight = "100vh";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

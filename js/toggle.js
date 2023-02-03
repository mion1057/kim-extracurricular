/* 토글 메뉴 */
$("#toggle").click(function () {
    $(".blind").toggleClass("active");
    $("#toggle").toggleClass("active");
    $("#appstore_icon, #google_icon").toggleClass("active");
});

window,addEventListener("resize", () => {
    if(innerWidth > 1130)  {
        document.querySelector(".blind").classList.remove("active");
        document.querySelector("#toggle").classList.remove("active");
        document.querySelector("#appstore_icon").classList.remove("active");
        document.querySelector("#google_icon").classList.remove("active");
    }
});
// 실행 조건 스크롤
$(window).on("scroll", function() {
    if (window.innerWidth > 1430) {
        if ($(window).scrollTop() == (5 * $(window).height()) ){
            $(".graph div").addClass("active");
        } else {
            $(".graph div").removeClass("active");
        }
    } else {
        if ($(window).scrollTop() == (6 * $(window).height()) ){
            $(".graph div").addClass("active");
        } else {
            $(".graph div").removeClass("active");
        }
    }
});

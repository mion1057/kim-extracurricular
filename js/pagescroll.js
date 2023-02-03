// 섹션 개수 반응형
var lastPage = $(".section").length;
$('.gnb_4').text("이용요금");
$('.gnb_5').text("매칭시스템");
$('.gnb_6').text("멤버십");
// case.1 페이지 로드 시
if (window.innerWidth > 1430) {
    lastPage = $(".section").length - 1;
    $('.gnb_4').text("요금&매칭");
    $('.gnb_5').text("멤버십");
    $('.gnb_6').text("카테고리");
};
// case.2 너비 조정 시
$(window).on("resize", () => {
    if (window.innerWidth <= 1430) {
        lastPage = $(".section").length;
        $('.gnb_4').text("이용요금");
        $('.gnb_5').text("매칭시스템");
        $('.gnb_6').text("멤버십");
    } else {
        lastPage = $(".section").length - 1;
        $('.gnb_4').text("요금&매칭");
        $('.gnb_5').text("멤버십");
        $('.gnb_6').text("카테고리");
    }
});

// 기본 이벤트 제거하기
window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

// 페이지 선언
var $html = $("html");
var page = 1;
$(".page_btn_"+page).addClass("active");

$html.animate({scrollTop:0},10);

// 스크롤 값 초기화
$(document).keydown(function(event){
    if ( event.keyCode == 116 || event.which == 116 ) {
        $(window).scrollTop(0);
    }
});

// 마우스 휠 이벤트
$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	var posTop = (page-1) * $(window).height();
    $(".page_btn div").removeClass("active");
    $(".page_btn_"+page).addClass("active");
 
	$html.animate({scrollTop : posTop},1000);
});

// 페이지 버튼 클릭 이벤트
$(".page_btn div, .sec_contents span, .blind p, .logo_page_1").on("click", function(e){
    $(".page_btn div").removeClass("active");
    page_class = e.target.className;
    page = page_class[page_class.length-1];
    $(".page_btn_"+page).addClass("active");
    posTop = (page-1) * $(window).height();

    $html.animate({scrollTop : posTop},1000);
});

// 페이지 버튼 색상 변경
var lastScrollTop = 0;
$(window).on("scroll", function(){
    var nowScrollTop = $(this).scrollTop();
    // 스크롤 Down
    if (nowScrollTop > lastScrollTop) {
        // pc 모드일 때
        if (window.innerWidth > 1430) {
            if( $(window).scrollTop() > (4.5 * $(window).height()) ){
                document.documentElement.style.setProperty('--bgcolor', '#5fb69d');
            } else if ( $(window).scrollTop() > (0.5 * $(window).height()) ){
                document.documentElement.style.setProperty('--bgcolor', 'white');
            } else if ( $(window).scrollTop() >= (0 * $(window).height()) ){
                document.documentElement.style.setProperty('--bgcolor', '#5fb69d');
            } 
        // 태블릿, 모바일 모드일 때
        } else if (window.innerWidth <= 1430) {
            if( $(window).scrollTop() > (5.5 * $(window).height()) ){
                document.documentElement.style.setProperty('--bgcolor', '#5fb69d');
            } else if ( $(window).scrollTop() > (3.5 * $(window).height()) ){
                document.documentElement.style.setProperty('--bgcolor', 'white');
            } else if ( $(window).scrollTop() > (2.5 * $(window).height()) ){
                document.documentElement.style.setProperty('--bgcolor', '#5fb69d');
            } else if ( $(window).scrollTop() > (0.5 * $(window).height()) ){
                document.documentElement.style.setProperty('--bgcolor', 'white');
            } else if ( $(window).scrollTop() >= (0 * $(window).height()) ){
                document.documentElement.style.setProperty('--bgcolor', '#5fb69d');
            } 
        }
    // 스크롤 Up
    } else {
        // pc 모드일 때
        if (window.innerWidth > 1430) {
            if( $(window).scrollTop() < (0.5 * $(window).height()) ){
                document.documentElement.style.setProperty('--bgcolor', '#5fb69d');
            } else if ( $(window).scrollTop() < (4.5 * $(window).height()) ){
                document.documentElement.style.setProperty('--bgcolor', 'white');
            } else if ( $(window).scrollTop() <= (5 * $(window).height()) ){
                document.documentElement.style.setProperty('--bgcolor', '#5fb69d');
            } 
        // 태블릿, 모바일 모드일 때
        } else if (window.innerWidth <= 1430) {
            if( $(window).scrollTop() < (0.5 * $(window).height()) ){
                document.documentElement.style.setProperty('--bgcolor', '#5fb69d');
            } else if ( $(window).scrollTop() < (2.5 * $(window).height()) ){
                document.documentElement.style.setProperty('--bgcolor', 'white');
            } else if ( $(window).scrollTop() < (3.5 * $(window).height()) ){
                document.documentElement.style.setProperty('--bgcolor', '#5fb69d');
            } else if ( $(window).scrollTop() < (5.5 * $(window).height()) ){
                document.documentElement.style.setProperty('--bgcolor', 'white');
            } else if ( $(window).scrollTop() <= (6 * $(window).height()) ){
                document.documentElement.style.setProperty('--bgcolor', '#5fb69d');
            } 
        }
    }
    lastScrollTop = nowScrollTop;
});
// 실행 조건 스크롤
$(window).on("scroll", function(){
    if( $(window).scrollTop() == (2 * $(window).height()) ){
        circle_graph();
    }
});

/* 프레임 변수 i,k,j 선언 */
function circle_graph(){
    var i=k=j=1;
    var func1 = setInterval(function(){
        if(i<10){
            color1(i);
            i += 0.5;
        } else if (i<20) {
            color1(i);
            i ++;
        } else if (i<30) {
            color1(i);
            i += 2;
        } else if (i<50) {
            color1(i);
            i += 4;
        } else if (i<77) {
            color1(i);
            i += 2;
        } else if (i<87) {
            color1(i);
            i ++;
        } else if (i<97) {
            color1(i);
            i += 0.5;
        } else {
            clearInterval(func1);
        }
    },10);
    var func2 = setInterval(function(){
        if(k<10){
            color2(k);
            k += 0.5;
        } else if(k<20) {
            color2(k);
            k ++;
        } else if(k<30) {
            color2(k);
            k += 2;
        } else if(k<40) {
            color2(k);
            k += 4;
        } else if(k<50) {
            color2(k);
            k += 2;
        } else if(k<60) {
            color2(k);
            k ++;
        } else if(k<71) {
            color2(k);
            k += 0.5;
        } else {
            clearInterval(func2);
        }
    },10);
    var func3 = setInterval(function(){
        if(j<10){
            color3(j);
            j += 0.5;
        } else if(j<25) {
            color3(j);
            j ++;
        } else if(j<31) {
            color3(j);
            j += 0.5;
        } else {
            clearInterval(func3);
        }
    },10);
};
/* 개별 그래프 애니메이션 함수 선언 */
function color1(i){
    $(".circle_1").css({
        "background":"conic-gradient(#5FB69D 0% "+i+"%, #ffffff "+i+"% 100%)"
    });
}
function color2(k){
    $(".circle_2").css({
        "background":"conic-gradient(#5FB69D 0% "+k+"%, #ffffff "+k+"% 100%)"
    });  
}
function color3(j){
    $(".circle_3").css({
        "background":"conic-gradient(#5FB69D 0% "+j+"%, #ffffff "+j+"% 100%)"
    });
}
$(".sec6 .card_wrap").click(function(){
    if ($(this).attr("class") == "card_wrap card_in") {
        $(".card_out").attr("class", "card_wrap card_in");
        $(this).attr("class", "card_wrap card_out");
        $('.card_in').height('');
        resize();
    } else if ($(this).attr("class") == "card_wrap card_out") {
        $(this).attr("class", "card_wrap card_in");
        $('.card_in').height('');
        resize();
    }
})

function resize() {
    let winWidth = $(window).width();
    let boxWidth = $('.card_frame').width();
    
    if (winWidth > 1500) {
        $('.card_wrap').height('').width('').css('top', boxWidth*0.15);
        $('.card_frame').css('height', boxWidth*0.532+'px')
        .css('line-height', boxWidth*0.532+'px');
        $('.card_in').width(boxWidth*0.75).height(boxWidth*0.403);
        $('.wallet_hidden').height(boxWidth*0.5);
        let walletHeight = $('.wallet').height();
        
        $('.card_cover1').css('right', walletHeight*0.41 + 60+'px');
        $('.card_cover2').css('right', walletHeight*0.41);
        $('.card_cover3').css('right', walletHeight*0.41 - 60+'px');
        $('.card_out').height(boxWidth*0.532).css('top', winWidth*0.019);
        
        $('#card_1').css('left', walletHeight*0.33 - 80+'px');
        $('#card_2').css('left', walletHeight*0.33 - 20+'px');
        $('#card_3').css('left', walletHeight*0.33 + 40+'px');
        $('#card_1').hover(() => {
            $('#card_1').css('left', walletHeight*0.33 - 60+'px');
        }, () => {
            $('#card_1').css('left', walletHeight*0.33 - 80+'px');
        });
        $('#card_2').hover(() => {
            $('#card_2').css('left', walletHeight*0.33);
        }, () => {
            $('#card_2').css('left', walletHeight*0.33 - 20+'px');
        });
        $('#card_3').hover(() => {
            $('#card_3').css('left', walletHeight*0.33 + 60+'px');
        }, () => {
            $('#card_3').css('left', walletHeight*0.33 + 40+'px');
        });
    } else if (winWidth > 1200) {
        $('.card_wrap').height('').width('').css('top', boxWidth*0.15);
        $('.card_frame').css('height', boxWidth*0.532+'px')
        .css('line-height', boxWidth*0.532+'px');
        $('.card_in').width(boxWidth*0.75).height(boxWidth*0.403);
        $('.wallet_hidden').height(boxWidth*0.5);
        let walletHeight = $('.wallet').height();
        
        $('.card_cover1').css('right', walletHeight*0.41 + 40+'px');
        $('.card_cover2').css('right', walletHeight*0.41 - 10+'px ');
        $('.card_cover3').css('right', walletHeight*0.41 - 60+'px');
        $('.card_out').height(boxWidth*0.532).css('top', winWidth*0.019);
        
        $('#card_1').css('left', walletHeight*0.33 - 40+'px');
        $('#card_2').css('left', walletHeight*0.33 + 10+'px');
        $('#card_3').css('left', walletHeight*0.33 + 60+'px');
        $('#card_1').hover(() => {
            $('#card_1').css('left', walletHeight*0.33 - 20+'px');
        }, () => {
            $('#card_1').css('left', walletHeight*0.33 - 40+'px');
        });
        $('#card_2').hover(() => {
            $('#card_2').css('left', walletHeight*0.33 + 30+'px');
        }, () => {
            $('#card_2').css('left', walletHeight*0.33 + 10+'px');
        });
        $('#card_3').hover(() => {
            $('#card_3').css('left', walletHeight*0.33 + 60+'px');
        }, () => {
            $('#card_3').css('left', walletHeight*0.33 + 60+'px');
        });
    } else if (winWidth >= 1050) {
        $('.card_wrap').height('').width('').css('top', boxWidth*0.15);
        $('.card_frame').css('height', boxWidth*0.532+'px')
        .css('line-height', boxWidth*0.532+'px');
        $('.card_in').width(boxWidth*0.75).height(boxWidth*0.403);
        $('.wallet_hidden').height(boxWidth*0.5);
        let walletHeight = $('.wallet').height();
        
        $('.card_cover1').css('right', walletHeight*0.41 + 50+'px');
        $('.card_cover2').css('right', walletHeight*0.41 + 10+'px ');
        $('.card_cover3').css('right', walletHeight*0.41 - 30+'px');
        $('.card_out').height(boxWidth*0.532).css('top', winWidth*0.019);
        
        $('#card_1').css('left', walletHeight*0.33 - 30+'px');
        $('#card_2').css('left', walletHeight*0.33 + 10+'px');
        $('#card_3').css('left', walletHeight*0.33 + 50+'px');
        $('#card_1').hover(() => {
            $('#card_1').css('left', walletHeight*0.33 - 10+'px');
        }, () => {
            $('#card_1').css('left', walletHeight*0.33 - 30+'px');
        });
        $('#card_2').hover(() => {
            $('#card_2').css('left', walletHeight*0.33 + 30+'px');
        }, () => {
            $('#card_2').css('left', walletHeight*0.33 + 10+'px');
        });
        $('#card_3').hover(() => {
            $('#card_3').css('left', walletHeight*0.33 + 70+'px');
        }, () => {
            $('#card_3').css('left', walletHeight*0.33 + 50+'px');
        });
    } else {
        $('.card_wrap').css('top', '').css('left', '').css('width', '').css('height', '');
    }
}

window.addEventListener('load', () => {
    resize();
})
$(window).resize(() => {
    resize();
});
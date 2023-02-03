function setCalender() {
    calenderYear.innerHTML = `${nowYear}`;
    calenderMonth.innerHTML = `${month[nowMonth]}`;
    
    document.querySelectorAll(".calender_header .pre")[0].classList.remove("hidden");
    if(nowYear == now.getFullYear() && nowMonth == now.getMonth()) {
        document.querySelectorAll(".calender_header .pre")[0].classList.add("hidden");
    }
    
    document.querySelectorAll(".calender_header .next")[0].classList.remove("hidden");
    if(now.getMonth() == 0 && nowMonth == 11 || nowYear > now.getFullYear() && nowMonth == now.getMonth() - 1) { 
        document.querySelectorAll(".calender_header .next")[0].classList.add("hidden");
    }

    firstDate = new Date (nowYear, nowMonth, 1);
    firstDay = firstDate.getDay();
    dateCount = 1;
    calenderMain.innerHTML = "";

    for(let row = 0; row < 7; row++) {
        calenderMain.innerHTML += `<div class="row"></div>`;
    }
    
    calenderRow = document.querySelectorAll(".calender_main .row"); 

    for(let column = 0; column < 7; column++) {
        calenderRow[0].innerHTML += `<div class="day">${day[column]}</div>`;
    }
    document.querySelectorAll(".row .day")[0].classList.add("sun");
    document.querySelectorAll(".row .day")[6].classList.add("sat");

    for(let row = 1; row < 7; row++) {
        for(let column = 0; column < 7; column++) {
            if (dateCount == 1 && column != firstDay || dateCount > lastDate[nowMonth]) {
                if(nowYear % 4 == 0 && nowMonth == 1 && dateCount == 29) {
                    calenderRow[row].innerHTML += `<div class="days">${dateCount++}</div>`;
                }
                else calenderRow[row].innerHTML += `<div>&nbsp;</div>`;
            }
            else {
                calenderRow[row].innerHTML += `<div class="days">${dateCount++}</div>`;
            }
        }
    }
    
    if(nowYear == now.getFullYear() && nowMonth == now.getMonth()) {
        document.querySelectorAll(".row .days")[now.getDate()-1].classList.add("today");
    }

    let calenderDate = document.querySelectorAll(".row .days");

    for(let date = 0; date < calenderDate.length; date++) {
        let dateDay = new Date(nowYear, nowMonth, date+1);
        if(dateDay.getDay() == 0 || dateDay.getDay() == 6) document.querySelectorAll(".row .days")[date].classList.add("not");
        if(!(nowYear > now.getFullYear() || (nowYear == now.getFullYear() && (nowMonth > now.getMonth() || (nowMonth == now.getMonth() && date+1 >= now.getDate()))))) {
            calenderDate[date].classList.add("not");
        }
    }

    for(let i = 0; i < calenderDate.length; i++) {
        calenderDate[i].addEventListener("click", () => {
            if(!calenderDate[i].classList.contains("not")) {
                setContent(calenderDate[i].innerText);
                for(let v = 0; v < dateInput.length; v++) {
                    if(!dateInput[v].classList.contains("input_value")) dateInput[v].classList.add("input_value");  
                }         
                inputValueIn();

                if(calenderDate[i].classList.contains("today")) {
                    let h = 0;
                    while(timeList[h].innerText.substring(0, 2) <= now.getHours()) {
                        if(!timeList[h].classList.contains("not")) timeList[h].classList.add("not");
                        h++;
                    }
                }
            }
        });
    }

    for(let v = 0; v < dateInput.length; v++) {
        if(dateInput[v].value) {
            let dateValue = dateInput[v].value;
            if(dateValue.indexOf("  |") != -1) dateValue = dateValue.substring(0, dateInput[v].value.indexOf("  |"));
            if(nowYear == dateValue.substring(0, 4) && nowMonth == dateValue.substring(5, 7)-1)
            calenderDate[dateValue.substring(8)-1].classList.add("select_date");
        }
    }
}

function setContent(selectDate) {
    let calenderDate = document.querySelectorAll(".row .days");
    
    if(selectDate != 0 ) {
        if(calenderDate[selectDate-1] != document.querySelector(".select_date")) {
            if(document.querySelector(".select_date")) document.querySelector(".select_date").classList.remove("select_date");
            calenderDate[selectDate-1].classList.add("select_date");
            if(document.querySelectorAll(".select_date")[1]) {
                document.querySelectorAll(".select_date")[1].classList.remove("select_date");
            }
            
            for(let v = 0; v < dateInput.length; v++) {
                dateInput[v].value = `${nowYear}-`;
                if(nowMonth < 10) dateInput[v].value += `0`;
                dateInput[v].value += `${nowMonth+1}-`;
                if(selectDate < 10) dateInput[v].value += `0`;
                dateInput[v].value += `${selectDate}`;
            }
        }
        
        let timeList = document.querySelectorAll(".time_list");
        for(let i = 0; i < timeList.length; i++) {
            timeList[i].classList.remove("not");
        }
    }
    else selectDate = now.getDate();
}

function preMonth() {
    nowMonth--;
    if(nowMonth < 0) {
        nowYear--;
        nowMonth = 11;
    }
    setCalender();
}

function nextMonth() {
    nowMonth++;
    if(nowMonth > 11) {
        nowYear++;
        nowMonth = 0;
    }
    setCalender();
}

function inputValueIn() {
    const input = document.querySelector('input.date').value;
    input ? document.documentElement.style.setProperty('--display', 'none') : document.documentElement.style.setProperty('--display', 'block');
}

function setLocation () {
    if(innerWidth <= 520) {
        dateWrap.style.width = "323px";
        dateWrap.style.height = "599px";
    }
    else if(innerWidth <= 768 && innerWidth > 520) {
        dateWrap.style.width = "511px";
        dateWrap.style.height = "336px";
    }
    else {
        dateWrap.style.width = "628px";
        dateWrap.style.height = "435px";
    }

    dateWrap.style.top = `${parseInt((innerHeight - parseInt(dateWrap.style.height)) / 2)}px`;
    dateWrap.style.left = `${parseInt((innerWidth - parseInt(dateWrap.style.width)) / 2)}px`;
}

let now = new Date();
let nowYear = now.getFullYear();
let nowMonth = now.getMonth();
let firstDate = new Date (nowYear, nowMonth, 1);
let firstDay = firstDate.getDay();
let lastDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let day = ["S", "M", "T", "W", "T", "F", "S"];
let dateCount = 1;
let tempValue = "";

let calenderContent = document.querySelector(".calender_wrap .calender_content");
let calenderYear = document.querySelector(".calender_wrap .calender_year");
let calenderMonth = document.querySelector(".calender_wrap .calender_month");
let calenderMain = document.querySelector(".calender_wrap .calender_main");
let calenderRow = document.querySelectorAll(".calender_main .row");

let calenderWrap = document.querySelectorAll(".calender_wrap");
let timeList = document.querySelectorAll(".time_list");
let dateClose = document.querySelector(".date_wrap_close > img");
let dateWrap = document.querySelector(".date_wrap");
let dateInput = document.querySelectorAll("input.date");
let inputs = document.querySelectorAll("input");

setCalender();
setContent(0); 
setLocation();

document.querySelector(".calender_wrap .pre").addEventListener("click", () => {
    preMonth();
});

document.querySelector(".calender_wrap .next").addEventListener("click", () => {
    nextMonth();
});

for(let i = 0; i < dateInput.length; i++) {
    dateInput[i].addEventListener("click", () => {
        if(dateWrap.classList.contains("none")) {
            dateWrap.classList.remove("none");
            setCalender();
        }
    });
}

document.querySelector(".date").addEventListener("focus", () => {
    document.querySelector(".date").blur();
});

dateClose.addEventListener("click", () => {
    dateWrap.classList.add("none");
    for(let v = 0; v < dateInput.length; v++) {
        tempValue? dateInput[v].value = tempValue : dateInput[v].value = "";
        if(tempValue) {
            dateInput[v].value = tempValue;
            nowYear = tempValue.substring(0, 4);
            nowMonth = tempValue.substring(5, 7) - 1;
            let h = 0;
            while(!document.querySelector(".time_select_wrap .select_date")) {
                if(timeList[h].innerText == tempValue.substring(15)) {
                    timeList[h].classList.add("select_date");
                }
                h++;
            }
        }
        else {
            dateInput[v].value = "";
            nowYear = now.getFullYear();
            nowMonth = now.getMonth();
            setContent(0);
            for(let i = 0; i < timeList.length; i++) {
                if(!timeList[i].classList.contains("not")) timeList[i].classList.add("not");
            }
            inputValueIn();
            if(dateInput[v].classList.contains("input_value")) dateInput[v].classList.remove("input_value");
        }
    }
});

for(let i = 0; i < timeList.length; i++) {
    timeList[i].addEventListener("click", () => {
        let selectTime = document.querySelector(".time_select_wrap .select_date");
    
        if(!timeList[i].classList.contains("not")) {
            if(selectTime) selectTime.classList.remove("select_date");
            timeList[i].classList.add("select_date");

            selectTime = document.querySelector(".time_select_wrap .select_date");
            for(let v = 0; v < dateInput.length; v++) {
                if(dateInput[v].value) {
                    if(selectTime) {
                        if(dateInput[v].value.indexOf("  |") != -1) dateInput[v].value = dateInput[v].value.substring(0, dateInput[v].value.indexOf("  |"));
                        dateInput[v].value += `  |  ${selectTime.innerText}`;
                        tempValue = dateInput[v].value;
                        dateWrap.classList.add("none");
                        nowYear = tempValue.substring(0, 4);
                        nowMonth = tempValue.substring(5, 7) - 1;
                    }
                    else {
                        dateInput[v].value = dateInput[v].value.substring(0, dateInput[v].value.indexOf("  |"));
                    }
                }
            }
        }
    });
};



function sec2Location() {
    let sec2 = document.querySelector(".sec2 .notify_wrap");
    let sec2Input = document.querySelectorAll(".sec2_input");
    
    sec2.style.top = `${parseInt((innerHeight - sec2.clientHeight) / 2) + 50}px`;
    sec2.style.left = `${parseInt((innerWidth - sec2.clientWidth) / 2)}px`;

    for(let i = 0; i < sec2Input.length; i++) {
        sec2Input[i].style.marginBottom = `${innerHeight / 30}px`;
    }

    document.querySelector(".sec2_checkbox").style.marginTop = `${innerHeight / 50}px`;
}

function mouse() {
    mouseOutside = document.querySelector(".mouse_outside");
    mouseInside = document.querySelector(".mouse_inside");

    mouseOutside.style.left = `${parseInt((innerWidth - mouseOutside.offsetWidth) / 2)}px`;
    mouseInside.style.left = `${parseInt((innerWidth - mouseInside.offsetWidth) / 2)}px`;


    mouseInside.style.top = `${parseInt((innerHeight - mouseOutside.clientHeight)) + wheel}px`;
    wheel < -5 ? wheel++ : wheel = -10;
}

let mouseOutside = document.querySelector(".mouse_outside");
let mouseInside = document.querySelector(".mouse_inside");
let wheel = -10;
setInterval(mouse, 90);

window.addEventListener("resize", () => {
    setLocation();
    sec2Location();
    if(innerWidth > 1130) {
        if(mouseOutside.classList.contains("none")) mouseOutside.classList.remove("none");
        if(mouseInside.classList.contains("none")) mouseInside.classList.remove("none");
    }
    else {
        if(!mouseOutside.classList.contains("none")) mouseOutside.classList.add("none");
        if(!mouseInside.classList.contains("none")) mouseInside.classList.add("none");
    }
});

sec2Location();

for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", () => {
        if(inputs[i].value && !inputs[i].classList.contains("input_value")) inputs[i].classList.add("input_value");
        else if(!inputs[i].value && inputs[i].classList.contains("input_value")) inputs[i].classList.remove("input_value");
    });
}
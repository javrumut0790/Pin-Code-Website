
let n = 0
answer= ""
document.getElementById('answertext').innerText=answer

function countUp(){
    n+=1;
    document.getElementById('counter').innerHTML=n;
    if(n==0){
        document.getElementById('image').src=""
    }
    if(n==1){
        document.getElementById('image').src="https://media1.giphy.com/media/3kzrzzQXUfI6bmUNf3/giphy.gif?cid=ecf05e47esj0ku9dr241r9htbni0uw2j4jz5nsmkuza8hibo&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    }
    if(n==2){
        document.getElementById('image').src="https://c.tenor.com/HCiezNnJVHsAAAAd/tenor.gif";
    }
    if(n==3){
        document.getElementById('image').src="https://c.tenor.com/_9qq2At1SZMAAAAC/tenor.gif";
    }
    if(n==4){
        document.getElementById('image').src="https://c.tenor.com/Ketn1Z2R0fUAAAAd/tenor.gif";
    }
    if(n==5){
        document.getElementById('image').style.height="33%";
        document.getElementById('image').style.width="33%";
        document.getElementById('image').src="https://c.tenor.com/QQoEUp8rtCIAAAAd/tenor.gif";
    }
    if(n==6){
        document.getElementById('image').style.height="23%";
        document.getElementById('image').style.width="23%";
        document.getElementById('image').src="https://c.tenor.com/yQdFcA20c18AAAAd/tenor.gif";
    }
    if(n==7){
        document.getElementById('image').style.height="33%";
        document.getElementById('image').style.width="33%";
        document.getElementById('image').src="https://c.tenor.com/GdsM6Fir5NgAAAAd/tenor.gif";
    }
    if(n==8){
        document.getElementById('image').src="https://c.tenor.com/zrsqsgcV-wQAAAAC/tenor.gif";
    }
    if(n==9){
        document.getElementById('image').src="https://c.tenor.com/nxp4mUldBGgAAAAC/tenor.gif";
    }
    if(n==10){
        document.getElementById('image').style.height="33%";
        document.getElementById('image').style.width="33%";
        document.getElementById('image').src="https://c.tenor.com/i9tVYDAYUvgAAAAd/tenor.gif";
    }
    if(n==11){
        document.getElementById('image').style.height="23%";
        document.getElementById('image').style.width="23%";
        document.getElementById('image').src="https://c.tenor.com/Ey6LnAr3xzsAAAAC/tenor.gif";
    }
    if(n==12){
        document.getElementById('image').style.height="33%";
        document.getElementById('image').style.width="33%";
        document.getElementById('image').src="https://c.tenor.com/eSejT1G_Ct0AAAAd/tenor.gif";
    }
    if(n==13){
        document.getElementById('image').src="https://c.tenor.com/2s6gYzSqa3sAAAAC/tenor.gif";
    }
}
function countDown(){
    n-=1;
    document.getElementById('counter').innerHTML=n
    if(n==0){
        document.getElementById('image').src=""
    }
    if(n==1){
        document.getElementById('image').src="https://media1.giphy.com/media/3kzrzzQXUfI6bmUNf3/giphy.gif?cid=ecf05e47esj0ku9dr241r9htbni0uw2j4jz5nsmkuza8hibo&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    }
    if(n==2){
        document.getElementById('image').src="https://c.tenor.com/HCiezNnJVHsAAAAd/tenor.gif";
    }
    if(n==3){
        document.getElementById('image').src="https://c.tenor.com/_9qq2At1SZMAAAAC/tenor.gif";
    }
    if(n==4){
        document.getElementById('image').src="https://c.tenor.com/Ketn1Z2R0fUAAAAd/tenor.gif";
    }
    if(n==5){
        document.getElementById('image').style.height="33%";
        document.getElementById('image').style.width="33%";
        document.getElementById('image').src="https://c.tenor.com/QQoEUp8rtCIAAAAd/tenor.gif";
    }
    if(n==6){
        document.getElementById('image').style.height="21%";
        document.getElementById('image').style.width="21%";
        document.getElementById('image').src="https://c.tenor.com/yQdFcA20c18AAAAd/tenor.gif";
    }
    if(n==7){
        document.getElementById('image').style.height="33%";
        document.getElementById('image').style.width="33%";
        document.getElementById('image').src="https://c.tenor.com/GdsM6Fir5NgAAAAd/tenor.gif";
    }
    if(n==8){
        document.getElementById('image').src="https://c.tenor.com/zrsqsgcV-wQAAAAC/tenor.gif";
    }
    if(n==9){
        document.getElementById('image').src="https://c.tenor.com/nxp4mUldBGgAAAAC/tenor.gif";
    }
    if(n==10){
        document.getElementById('image').style.height="33%";
        document.getElementById('image').style.width="33%";
        document.getElementById('image').src="https://c.tenor.com/i9tVYDAYUvgAAAAd/tenor.gif";
    }
    if(n==11){
        document.getElementById('image').style.height="23%";
        document.getElementById('image').style.width="23%";
        document.getElementById('image').src="https://c.tenor.com/Ey6LnAr3xzsAAAAC/tenor.gif";
    }
    if(n==12){
        document.getElementById('image').style.height="33%";
        document.getElementById('image').style.width="33%";
        document.getElementById('image').src="https://c.tenor.com/eSejT1G_Ct0AAAAd/tenor.gif";
    }
    if(n==13){
        document.getElementById('image').src="https://c.tenor.com/2s6gYzSqa3sAAAAC/tenor.gif";
    }
}
function reset(){
    n=0
    document.getElementById('counter').innerHTML=n;
    document.getElementById('image').src="";
}
function nonegatives(){
    if(n<0){
        n=0;
        document.getElementById('counter').innerHTML=n;
    }
}
function maximum(){
    if(n>13){
        n=13;
        document.getElementById('counter').innerHTML=n;
    }
}
function button1(){
    answer = answer + "1"
    document.getElementById('answertext').innerHTML=answer;
}
function button2(){
    answer = answer + "2"
    document.getElementById('answertext').innerHTML=answer;
}
function button3(){
    answer = answer + "3"
    document.getElementById('answertext').innerHTML=answer;
}
function button4(){
    answer = answer + "4"
    document.getElementById('answertext').innerHTML=answer;
}
function button5(){
    answer = answer + "5"
    document.getElementById('answertext').innerHTML=answer;
}
function button6(){
    answer = answer + "6"
    document.getElementById('answertext').innerHTML=answer;
}
function button7(){
    answer = answer + "7"
    document.getElementById('answertext').innerHTML=answer;
}
function button8(){
    answer = answer + "8"
    document.getElementById('answertext').innerHTML=answer;
}
function button9(){
    answer = answer + "9"
    document.getElementById('answertext').innerHTML=answer;
}
function button0(){
    answer = answer + "0"
    document.getElementById('answertext').innerHTML=answer;
}
function buttonrevert(){
    answer = ""
    document.getElementById('answertext').innerHTML=answer;
}

function showgifs() {
    document.getElementById('unlocked').className="hidden"
    document.getElementById('nextbutton').className="displayed"
    document.getElementById('backbutton').className="displayed"
    document.getElementById('resetbutton').className="displayed"
    document.getElementById('counter').className="displayed"
    document.getElementById('mainTitle').className="displayed"
}
function buttonconfirm(){
    if (answer == "1234"){
        document.getElementById('button1').className="button hidden";
        document.getElementById('button2').className="button hidden";
        document.getElementById('button3').className="button hidden";
        document.getElementById('button4').className="button hidden";
        document.getElementById('button5').className="button hidden";
        document.getElementById('button6').className="button hidden";
        document.getElementById('button7').className="button hidden";
        document.getElementById('button8').className="button hidden";
        document.getElementById('button9').className="button hidden";
        document.getElementById('button0').className="button hidden";
        document.getElementById('revert').className="button hidden";
        document.getElementById('confirm').className="button hidden";
        document.getElementById('enterpass').className="hidden";
        document.getElementById('answertext').className="hidden";

        document.getElementById('unlocked').className="displayed";
        window.setTimeout(showgifs, 2000);

    }
}


let turn=1;
let count=0;
let player=0;
let place=0;
let status=[0,0,0,0,0,0,0,0,0];
let wname=0;
let tie=0;
function cell(p){
place=p;
var a=document.getElementsByClassName("cells");
if(a[p].innerHTML==""&&wname==0){
count++;
if(turn==1){
player=1;
place=p;
markx(player,place);
}else{
player=2;
marky(player,place);
}
if(wname==0&&count==9)
{tie=1;
document.getElementById("commentry").innerHTML="Match Tie";
}
console.log(status);
function markx(ply,pos){
a[pos].innerHTML='x';
status[pos]=ply;
turn++;
document.getElementById("commentry").innerHTML="Player O turn";
if(count>2){
win(ply);}
}
function marky(ply,pos){
a[pos].innerHTML='o';
status[pos]=ply;
turn--;
document.getElementById("commentry").innerHTML="Player X turn";
if(count>2){
win(ply);}
}

function win(winner){
if(status[0]==winner&&status[1]==winner&&status[2]==winner){
document.getElementById("strike").style.display="block";
a[0].style.color="red";
a[1].style.color="red";
a[2].style.color="red";
victory();
}
if(status[3]==winner&&status[4]==winner&&status[5]==winner){
document.getElementById("striketwo").style.display="inline";
a[3].style.color="red";
a[4].style.color="red";
a[5].style.color="red";
victory();
}
if(status[6]==winner&&status[7]==winner&&status[8]==winner){
document.getElementById("strikethree").style.display="inline";
a[6].style.color="red";
a[7].style.color="red";
a[8].style.color="red";
victory();
}
if(status[0]==winner&&status[3]==winner&&status[6]==winner){
document.getElementById("strikefour").style.display="inline";
a[0].style.color="red";
a[3].style.color="red";
a[6].style.color="red";
victory();
}
if(status[1]==winner&&status[4]==winner&&status[7]==winner){
document.getElementById("strikefive").style.display="inline";
a[1].style.color="red";
a[4].style.color="red";
a[7].style.color="red";
victory();
}
if(status[2]==winner&&status[5]==winner&&status[8]==winner){
document.getElementById("strikesix").style.display="inline";
a[2].style.color="red";
a[5].style.color="red";
a[8].style.color="red";
victory();
}
if(status[0]==winner&&status[4]==winner&&status[8]==winner){
document.getElementById("strikeseven").style.display="inline";
a[0].style.color="red";
a[4].style.color="red";
a[8].style.color="red";
victory();
}
if(status[2]==winner&&status[4]==winner&&status[6]==winner){
document.getElementById("strikeeight").style.display="inline";
a[2].style.color="red";
a[4].style.color="red";
a[6].style.color="red";
victory();
}
function victory(){
wname=1;
if(winner==1){
console.log(winner);
document.getElementById("commentry").innerHTML= "Player X win the match";
}
if(winner==2){
document.getElementById("commentry").innerHTML= "Player O win the match";
}
}

}
}else{
if(wname==0&&tie==0){
document.getElementById("commentry").innerHTML="Place Occupaid,chose different cell";
}}
}

function one(){
    document.getElementById('input').value +=1;
}
function two(){
    document.getElementById('input').value +=2;
}
function three(){
    document.getElementById('input').value +=3;
}
function four(){
    document.getElementById('input').value +=4;
}
function five(){
    document.getElementById('input').value +=5;
}
function six(){
    document.getElementById('input').value +=6;
}
function seven(){
    document.getElementById('input').value +=7;
}

function eight(){
    document.getElementById('input').value +=8;
}
function nine(){
    document.getElementById('input').value +=9;
}
function zero(){
    document.getElementById('input').value +=0;
}
function refresh(){
    document.getElementById('input').value =("");
}
function enter(){
    var a = document.getElementById('input').value;
    if(a.length!=4){
        alert("ENTER THE PERFECT CODE");
        return false;
    }
    a= parseInt(a);
    if(a==1234){
    document.getElementById('insta-btn').style.display = "block";   
    }
    else if(a==6969){
        document.getElementById('dekho-btn').style.display = "block";   
        }
}

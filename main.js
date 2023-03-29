
function Reset(){
    document.getElementById("a").value=null;
    document.getElementById("b").value=null;
    document.getElementById("kq").value=null;
    document.getElementById("log").innerText="";
}
// hàm kiểm tra số hay chữ
function check(a, b, c){
    // c là số
    if(isNaN(c)==false){
        document.getElementById("kq").value =c;
        document.getElementById("log").innerText="";
    }
    else{
        if(isNaN(a)==true && isNaN(b)==true){
            document.getElementById("log").innerText="Please enter the value as number or expression!";
            document.getElementById("a").value=null;
            document.getElementById("b").value=null;
            document.getElementById("kq").value=null;
        }
        else
        if(isNaN(a)==true){
            document.getElementById("log").innerText="Please enter num 1 as number or expression!";
            document.getElementById("a").value=null;
            document.getElementById("kq").value=null;
        }
        else{
            document.getElementById("log").innerText="Please enter num 2 as number or expression!";
            document.getElementById("b").value=null;
            document.getElementById("kq").value=null;
        }
    }
}
// PLUS
function Sum(){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;

    try {
        var result1 = eval(a); 
        var result2 = eval(b);
    } catch (error) {
        var result1 = NaN;
        var result2 = NaN;
    }

    var s = result1 + result2;
    check(a, b, s); 
}

//devide
function Devide(){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;

    try {
        var result1 = eval(a); 
        var result2 = eval(b);
    } catch (error) {
        var result1 = NaN;
        var result2 = NaN;
    }
 
    if(result2==0){
        document.getElementById("log").innerText="Please enter num 2 other than 0!";
        document.getElementById("b").value=null;
        document.getElementById("kq").value=null;
    }
    else{
        var d=result1/result2;
        check(a,b,d);
    }
}
function Multi(){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;

    try {
        var result1 = eval(a); 
        var result2 = eval(b);
    } catch (error) {
        var result1 = NaN;
        var result2 = NaN;
    }

    var s = result1 * result2;
    check(a, b, s);
}
function Minus(){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;

    try {
        var result1 = eval(a); 
        var result2 = eval(b);
    } catch (error) {
        var result1 = NaN;
        var result2 = NaN;
    }

    var s = result1 - result2;
    check(a, b, s);
}
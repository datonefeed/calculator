
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
    var result1, result2;

    // kiểm tra giá trị của a
    if (a === "a"||a === "b") { // nếu a là kí tự a thì gán giá trị bằng NaN
        result1 = NaN;
    } else {
        try {
            result1 = eval(a); // giải biểu thức trong a thành kết quả. Ví dụ: a = "2+3" thì result1 = 5
        } catch (error) {
            result1 = NaN;
        }
    }

    // kiểm tra giá trị của b
    if (b === "b"||b==="a") { // nếu b là kí tự b thì gán giá trị bằng NaN
        result2 = NaN;
    } else {
        try {
            result2 = eval(b);
        } catch (error) {
            result2 = NaN;
        }
    }

    var s = result1 + result2;
    check(a, b, s); // kiểm tra giá trị nhập vào a, b, s trong hàm check
}
//     try {
//         var result1 = eval(a); 
//         var result2 = eval(b);
//         }
//     catch (error) {
        
//         var result1 = NaN;
//         var result2 = NaN;
//     }

//     var s = result1 + result2;
//     check(a, b, s); 
// }

//devide
function Devide(){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;

    var result1, result2;

    // kiểm tra giá trị của a
    if (a === "a"||a === "b") { // nếu a là kí tự a thì gán giá trị bằng NaN
        result1 = NaN;
    } else {
        try {
            result1 = eval(a); // giải biểu thức trong a thành kết quả. Ví dụ: a = "2+3" thì result1 = 5
        } catch (error) {
            result1 = NaN;
        }
    }

    // kiểm tra giá trị của b
    if (b === "b"||b==="a") { // nếu b là kí tự b thì gán giá trị bằng NaN
        result2 = NaN;
    } else {
        try {
            result2 = eval(b);
        } catch (error) {
            result2 = NaN;
        }
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

    var result1, result2;

    // kiểm tra giá trị của a
    if (a === "a"||a === "b") { // nếu a là kí tự a thì gán giá trị bằng NaN
        result1 = NaN;
    } else {
        try {
            result1 = eval(a); // giải biểu thức trong a thành kết quả. Ví dụ: a = "2+3" thì result1 = 5
        } catch (error) {
            result1 = NaN;
        }
    }

    // kiểm tra giá trị của b
    if (b === "b"||b==="a") { // nếu b là kí tự b thì gán giá trị bằng NaN
        result2 = NaN;
    } else {
        try {
            result2 = eval(b);
        } catch (error) {
            result2 = NaN;
        }
    }

    var s = result1 * result2;
    check(a, b, s);
}
function Minus(){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;

    var result1, result2;

    // kiểm tra giá trị của a
    if (a === "a"||a === "b") { // nếu a là kí tự a thì gán giá trị bằng NaN
        result1 = NaN;
    } else {
        try {
            result1 = eval(a); // giải biểu thức trong a thành kết quả. Ví dụ: a = "2+3" thì result1 = 5
        } catch (error) {
            result1 = NaN;
        }
    }

    // kiểm tra giá trị của b
    if (b === "b"||b==="a") { // nếu b là kí tự b thì gán giá trị bằng NaN
        result2 = NaN;
    } else {
        try {
            result2 = eval(b);
        } catch (error) {
            result2 = NaN;
        }
    }

    var s = result1 - result2;
    check(a, b, s);
}
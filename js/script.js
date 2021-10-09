function sum(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}
function mul(a,b){
    return a * b;
}
function div(a,b){
    return a / b;
}
var kq = document.getElementById("information")
function HandleSolveClick(){
    const num1 =document.getElementById("num-input").value;
    const num2 =document.getElementById("num-input2").value;
    if(num1 == "" || num2 == "" || isNaN(num1)|| isNaN(num2)){
        kq.innerHTML = " Nhập số bị lỗi hoặc chưa nhập số  "
        return;
    }
    const a = parseFloat(num1)
    const b = parseFloat(num2)
    let bool = false;
    let n = 0;
    let c = document.getElementsByName("operator") ;
    for (let i = 0; i < c.length; i++) {
        if(c[i].checked){
            bool = true
            switch (c[i].value) {
                case 'add':
                    n = sum(a,b)       
                    break;
                case 'sub':
                    n = sub(a,b)       
                    break;
                case 'mul':
                    n = mul(a,b)       
                    break;    
                case 'divi':
                    n = div(a,b)       
                    break;                    
                default:
                    break;
            }
        }
    }
    if(bool == false){
        kq.innerHTML = "chưa chọn toán tử "
        return;
    }
    document.getElementById("result").value = n
    kq.innerHTML = "Tính toán thành công"
}

function checknumber(a){
    if(isNaN(a.value)|| a.value == ""){
        kq.innerHTML = " Nhập số bị lỗi  "
    }else{
        kq.innerHTML = ""
    }
}
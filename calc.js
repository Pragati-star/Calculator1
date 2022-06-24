 function calc(opt) {
    var a=document.getElementById('First').value;
    var b=document.getElementById('Second').value;
    var output=document.getElementsByClassName('output')[0];

    if(a.trim().length>0 && b.trim().length>0) {
        a=a.replace(/ /g,'');
        b=b.replace(/ /g,'');
        if(isNaN(a) || isNaN(b )) {
            out='Please Enter valid Number'
        }
        else {
            if(opt=='Add') {
                out=Number(a)+Number(b);
                out=`Sum of two numbers is ${out}`
            } 
            else {
                if(opt=='sub') {
                    out=Number(a)-Number(b);
                    out=`Subtraction of two numbers is ${out}`
                }
                else {
                    if(opt=='times') {
                        out=Number(a)*Number(b);
                        out=`Multiplication of two numbers is ${out}`
                    }
                    else {
                        if(opt=='div') {
                            out=Number(a)/Number(b);
                            out=`Division of two numbers is ${out}`
                    }
                    else {
                            out=Number(a)%Number(b);
                            out=`Modulus of two numbers is ${out}`
                        }
                    }
                }
            }
        }
    }
    else {
        out='Please Enter value'
    }
    output.innerText=out
}

function clear() {
    var c="output";
    document.getElementById('First').value="";
    document.getElementById('Second').value="";
    document.getElementsByClassName('output')[0].innerText=`${C}`;
}
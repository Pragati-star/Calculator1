 function calc(opt) {
    var a=document.getElementById('first').value;
    var b=document.getElementById('second').value;
    var output=document.getElementsByClassName('output')[0];

    if(a.trim().length>0 && b.trim().length>0) {
        a=a.replace(/ /g.'');
        b=b.replace(/ /g.'');
        if(isNaN(a) || isNaN(b )) {
            out='Please Enter valid Number'
        }
        else {
            if(opt=='Add') {
                out=Number(a)+Number(b);
                out='Sum of two numbers is ${out}'
            } else {
                if(opt=='Sub') {
                    out=Number(a)-Number(b);
                    out='Subtraction of two numbers is ${out}'
                }
                else {
                    if(opt=='times') {
                        out=Number(a)*Number(b);
                        out='Multiplication of two numbers is ${out}'
                    }
                }
            }
        }
    }
 }
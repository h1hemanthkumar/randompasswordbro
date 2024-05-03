function randomgenerate()
{   const small=document.getElementById("alpha");
    const capital=document.getElementById("alpha2");
    const number=document.getElementById("Number");
    const special=document.getElementById("Specialchar");
    const output=document.getElementById("output");
    let usable="";

    if(small.checked)
       usasble+="abcdefghijklmnopqrstuvwxyz";
    if(capital.checked)
        usable+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(number.checked)
        usable+="0123456789";
    if(special.checked)
        usable+="%$^&*()!@#";

    

}
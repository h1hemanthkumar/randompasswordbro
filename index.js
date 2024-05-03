function randomgenerate()
{   const small=document.getElementById("alpha");
    const capital=document.getElementById("alpha2");
    const numbers=document.getElementById("Number");
    const special=document.getElementById("Specialchar");
    const output=document.getElementById("output");
    const input=document.getElementById("input");
    let usable="";
    let password="";

    if(small.checked)
       usable+="abcdefghijklmnopqrstuvwxyz";
    if(capital.checked)
        usable+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numbers.checked)
        usable+="0123456789";
    if(special.checked)
        usable+="%$^&*()!@#";
    if(!capital.checked&&!number.checked&&!special.checked&&!small.checked)
        window.alert("select the requsites");
    
    for(let i=0;i<input.value;i++)
    {    password+=usable[Math.floor(Math.random()*usable.length)];
    }

    output.value=password;
}
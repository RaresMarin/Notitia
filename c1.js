let p = document.getElementById("Ap");
let d = document.getElementsByTagName("p");
let f = document.getElementsByTagName("h1");
let h = document.getElementsByTagName("h2");

p.addEventListener("change", ()=>{
    if(p.checked){
        document.getElementById("Fa").style.color = "aliceblue";
        document.getElementById("Fa").style.backgroundColor = "black";
        document.getElementById("Fad").style.color = "aliceblue";
        document.getElementById("Fad").style.backgroundColor = "black";
        document.getElementById("Fad").style.borderRight ="5px solid aliceblue";
        document.getElementById("Fady").style.backgroundColor = "black";
        document.getElementById("Da").style.backgroundColor = "aliceblue";
        document.getElementById("Fady").style.color = "aliceblue";
        for(let i=0;i<d.length;i++){
            d[i].style.color = "aliceblue";
        }
                for(let i=0;i<f.length;i++){
            f[i].style.color = "aliceblue";
        }
                for(let i=0;i<h.length;i++){
            h[i].style.color = "aliceblue";
        }
    }
    else{
        document.getElementById("Fa").style.color = "black";
        document.getElementById("Fa").style.backgroundColor = "aliceblue";
        document.getElementById("Fad").style.borderRight ="5px solid black";
        document.getElementById("Fad").style.color = "black";
        document.getElementById("Da").style.backgroundColor = "black";
        document.getElementById("Fad").style.backgroundColor = "aliceblue";
        document.getElementById("Fady").style.backgroundColor = "aliceblue";
        document.getElementById("Fady").style.color = "black";
                for(let i=0;i<d.length;i++){
            d[i].style.color = "black";
        }
        for(let i=0;i<f.length;i++){
            f[i].style.color = "black";
        }
        for(let i=0;i<h.length;i++){
            h[i].style.color = "black";
        }
    }     
})
function da(){
     document.getElementById("Fa").style.display = "none";
     document.getElementById("Fad").style.display = "none";
     document.getElementById("Da").style.display = "none";
     document.getElementById("Fady").style.backgroundColor = "transparent";
     document.getElementById("nu").style.display = "none";
     document.getElementById("nu1").style.display = "none";
     document.getElementById("nu2").style.display = "none";
     document.getElementById("so").style.display = "block";
     document.getElementById("reve").style.display = "block";
     document.getElementById("so").style.padding = "70px";
     document.getElementById("so").style.backgroundRepeat = "no-repeat";
     document.getElementById("so").style.margin = "auto";
}
function day(){
     document.getElementById("Fa").style.display = "block";
     document.getElementById("Fad").style.display = "block";
     document.getElementById("Da").style.display = "block";
     document.getElementById("Fady").style.backgroundColor = "aliceblue";
     document.getElementById("nu").style.display = "block";
     document.getElementById("nu1").style.display = "block";
     document.getElementById("nu2").style.display = "block";
     document.getElementById("so").style.display = "none";
     document.getElementById("reve").style.display = "none";
}
let i=0;
let c=0;
document.querySelectorAll(".DF").forEach(el => {
  el.addEventListener("change", e => {
    if(e.target.checked)
    {
    i++;
    c+=25; 
    }
    else{
        i--;
        c-=25;
    }
    document.getElementById("Resultat").innerHTML=`${i}/4(${c}%)`;
    if(i==0)
        document.getElementById("reve").innerHTML="Super! Nu ai dependență de telefon și gestionezi foarte bine timpul petrecut pe el.";
    if(i==1)
        document.getElementById("reve").innerHTML="Petreci puțin timp pe telefon. E bine să fii atent la limitele tale, dar nu e o problemă majoră.";
 if(i==2)
        document.getElementById("reve").innerHTML="Timpul petrecut pe telefon este moderat. Poate ar fi util să îți stabilești mici limite pentru a evita dependența.";
 if(i==3)
        document.getElementById("reve").innerHTML="Observăm că petreci mult timp pe telefon. Ar fi recomandat să încerci să îți gestionezi mai bine utilizarea și să iei pauze regulate.";
 if(i==4)
        document.getElementById("reve").innerHTML="Ești dependent de tehnologie. Este important să iei măsuri pentru a reduce timpul petrecut pe el și să cauți metode de echilibrare a activităților zilnice.";
 
});
});

setInterval(()=>{
    document.getElementById("da").style.display = "none";
},4500)    
setInterval(()=>{
    document.getElementById("H").style.display = "grid";
    document.getElementById("Ci").style.display = "none";
},4500)    
function c(n){
    document.getElementById("Gal").style.display = "none";
    let texte = ["Să ajung la Universitatea Babeș Bolyai din Cluj-Napoca și să studiez Informatică." , "Să am o prietenă care să mă susțină în tot ceea ce fac și să fim alături unul de celălalt." ,"Să călătoresc în Franța și să locuiesc acolo o periodă." ,"Să am un job bine plătit în domeniu și să îi pot ajuta pe părinții mei." ]
    document.getElementById("po").innerHTML = texte[n];
    document.querySelectorAll(".s").forEach((el)=>{
        el.style.display = "none";
    });
    if(n==0)
        document.getElementById("v").style.display= "block";
        document.getElementById("v").style.margin= "auto";
    if(n==1)
        document.getElementById("d").style.display= "block";
        document.getElementById("d").style.margin= "auto";
    if(n==2)
        document.getElementById("l").style.display= "block";
        document.getElementById("l").style.margin= "auto";
    if(n==3)
        document.getElementById("f").style.display= "block";
        document.getElementById("f").style.margin= "auto";
}
let index = 0;
function sa(n){
    index += n;
    Arata(index);
}
Arata(index);
function Arata(n){
    let imaginii = document.getElementsByClassName("Da");
    if(n>imaginii.length-1) index = 0;
    if(n<0) index = imaginii.length-1;
    for(let i=0;i<imaginii.length;i++)
        imaginii[i].style.display = "none";

    imaginii[index].style.display = "block";
    console.log(index);
}
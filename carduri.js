function fun(){
    document.body.style.backgroundImage = "url('Fundal8.png')";
    document.getElementById("c").style.display = "none";
    document.getElementById("V").style.display = "none";
    document.getElementById("B").style.display = "grid";
    document.getElementById("B").style.justifyContent = "center";
    document.getElementById("B").style.alignItems = "center";
    document.getElementById("D").innerHTML = "Adaugă o notiță!";
    document.querySelectorAll(".s").forEach((s)=>{
        s.style.display = "none";
    })
}
function adaugare(){
    document.body.style.backgroundImage = "url('B.png')";
    document.getElementById("D").innerHTML = "Panou cu notițe";
    document.getElementById("c").style.display = "flex";
    document.getElementById("V").style.display = "block";
    document.getElementById("B").style.display = "none";
    document.querySelectorAll(".s").forEach((s)=>{
        s.style.display = "block";
    })
    let div = document.createElement("div");
    let div1 = document.createElement("div");
    div1.style.borderRadius ="50%";
    div1.style.backgroundColor ="yellow";
    div1.style.height="2vw";
    div1.style.display ="block"
    div1.style.margin = "auto"
    div1.style.width ="2vw";
    div.classList.add("s");
    div.style.width = "200px";
    div.style.height = "200px";
    div.appendChild(div1);
    let ap = document.getElementById("Pt");
    let text = document.getElementById("note").value;
    let autor = document.getElementById("note1").value;
    let culoare = document.getElementById("note2").value;
    div.style.backgroundColor = culoare;
    let p = document.createElement("p");
    p.innerHTML = text;
    div.appendChild(p);
    let a = document.createElement("address");
    a.innerHTML = autor;
    div.appendChild(a);
    ap.appendChild(div);
    document.getElementById("note").value = "";
    document.getElementById("note1").value = "";
    document.getElementById("note2").value = "";

}
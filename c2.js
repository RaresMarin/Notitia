let ok=true;
for (let element of document.getElementsByClassName("h2")) {
    element.addEventListener("click", (e) => {
        if(ok==true)
        e.target.style.textDecoration = "line-through";
    else
        e.target.style.textDecoration = "none";
    ok=!ok;
    });
}
    let bici = document.getElementsByClassName("h2");
function fun(){
    let div = document.createElement("h2");
    let div1 = document.getElementById("Lica");
    let div2 = document.getElementById("D"); 
    if(bici.length<8)
    {
    {
        if(div2.value!="")
    {
    div.innerHTML = div2.value;
    div.classList.add("h2");  
    div1.appendChild(div);
    } 
    else
        alert("Trebuie să scrii ceva ca să meargă!");
    }
}
let ok=true;
for (let element of document.getElementsByClassName("h2")) {

    element.addEventListener("click", (e) => {
        if(ok==true)
        e.target.style.textDecoration = "line-through";
    else
        e.target.style.textDecoration = "none";
    ok=!ok;
    });
}
}
function sterge(){ {
    let elements = document.getElementsByClassName("h2");
    let arr = Array.from(elements);

    for (let el of arr) {
        el.remove();
    }
    }}
function f() {
    let elements = document.getElementsByClassName("h2");
    let arr = Array.from(elements);
    let random = Math.floor(Math.random() * arr.length);
    let circ = document.getElementById("circ");

    circ.innerHTML = arr[random].innerHTML;
}
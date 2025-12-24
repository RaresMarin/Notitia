let imaginii = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg", "6.jpg","7.jpg","8.jpg","9.jpg","10.jpg", "11.jpg","12.jpg","13.jpg","14.jpg","15.jpg", "16.jpg","17.jpg","18.jpg","19.jpg","20.jpg", "21.jpg","22.jpg","23.jpg","24.jpg","25.jpg", "26.jpg","27.jpg","28.jpg","29.jpg","30.jpg","31.jpg" , "32.jpg" , "33.jpg" , "34.jpg" , "35.jpg" , "36.jpg"];
if(document.getElementById("p1")!= undefined || document.getElementById("p1")!= null)
document.getElementById("p1").style.display = "none";
let culori = ["#99dfec" , "#e2cbf6" , "#77c5ae" , "#f7a17b" , "#ebd469" , "#804c3a" , "#0d0d0c" , "#6b0b13" , "#e597dd" , "#370632" , "#06370b" , "#36a3ce" , "#243662" , "#1d1c1d" ,"#184952","#804C3A","#993B2C", "#a180ad" , "#99dfec" ];
let culori1 = ["#003da4" , "#9939edff" , "#c8fcdeff" , "#f55916ff" , "#fff4c1ff" , "#ea4008ff" , "#f5f4f6ff" , "#f5091dff" , "#e009caff" , "#c229b3ff" , "#17dd2bff" , "#7bd3f6ff" , "#0f50f2ff" , "#f6f187ff" ,"#789994","#f63e22ff","orange", "#b61ceeff","#003da4"];
let index = 0;
let i = 0;
let j = 0;
function inainte(n){
    index += n;
    Apare(index);
}
function inapoi(n){
    index += n;
    Apare1(index);
}
function Apare(n){
            if(j>culori.length-1) j = 0;
    j++;
    if(n>=imaginii.length) index = 0;
    if(i>culori.length-1) i = 0;
    if(index==0 || index==imaginii.length - 1)
    {
        document.getElementById("p").src = imaginii[index];
        document.getElementById("p").classList.add("animatie");
        document.getElementById("p1").style.display = "none";
    }
    else if(imaginii[index+1]!= undefined)
    {
        document.getElementById("p").src = imaginii[index];
        document.getElementById("p1").style.display = "inline";
        document.getElementById("p1").src = imaginii[index+1];
        index++;
    }
    i++;
    document.body.style.background = culori[i];
    document.getElementById("inainte").style.background = culori1[i];
    document.getElementById("inapoi").style.background = culori1[i];
    document.getElementById("yay").style.background = culori1[i];
    document.getElementById("inainte").style.color = culori[i];
    document.getElementById("inapoi").style.color = culori[i];
    document.getElementById("yay").style.color = culori[i];
    document.getElementById("1").href = imaginii[index];
const links = Array.from(document.getElementsByTagName("a"));
links.forEach((element) => {
    element.style.backgroundColor = culori1[j];
    element.style.color = culori[j];
});
console.log(j);
}
function Apare1(n){
    j--;
    i--;
    if(n<0) index = imaginii.length-1; 
    if(i<0) i = culori.length-1;
        if(j<0) j = culori.length-1;
    if(index==0 || index==imaginii.length - 1)
    {
        document.getElementById("p").src = imaginii[index];
        document.getElementById("p1").style.display = "none";
    }
    else if(imaginii[index+1]!= undefined)
    {
        document.getElementById("p").src = imaginii[index-1];
        document.getElementById("p1").style.display = "inline";
        document.getElementById("p1").src = imaginii[index];
        index--;
    }
    document.body.style.background = culori[i];
    document.getElementById("inainte").style.background = culori1[i];
    document.getElementById("inapoi").style.background = culori1[i];
    document.getElementById("yay").style.background = culori1[i];
    document.getElementById("inainte").style.color = culori[i];
    document.getElementById("inapoi").style.color = culori[i];
    document.getElementById("yay").style.color = culori[i];
    document.getElementById("1").href = imaginii[index];
const links = Array.from(document.getElementsByTagName("a"));
links.forEach((element) => {
    element.style.backgroundColor = culori1[j];
    element.style.color = culori[j];
});
}
let quizEmotii;
let scorEmotii;
let ok=true;
index=0;
function verificare(n){
    document.getElementById("intrebare").innerText = quizEmotii[index].intrebare;
    document.getElementById("buton1").innerText = quizEmotii[index].raspunsuri[0].text;
    document.getElementById("buton2").innerText = quizEmotii[index].raspunsuri[1].text;
    document.getElementById("buton3").innerText = quizEmotii[index].raspunsuri[2].text;
    document.getElementById("buton4").innerText = quizEmotii[index].raspunsuri[3].text;
    
    index++;
    if(index >= quizEmotii.length){
        stop();
    }
    if(n==1){
        let emotieSelectata = quizEmotii[index - 1].raspunsuri[0].emotie;
        scorEmotii[emotieSelectata]++;
    }
    if(n==2){
        let emotieSelectata = quizEmotii[index - 1].raspunsuri[1].emotie;
        scorEmotii[emotieSelectata]++;
    }
    if(n==3){
        let emotieSelectata = quizEmotii[index - 1].raspunsuri[2].emotie;
        scorEmotii[emotieSelectata]++;
    }
    if(n==4){
        let emotieSelectata = quizEmotii[index - 1].raspunsuri[3].emotie;
        scorEmotii[emotieSelectata]++;
    }
}
function stop(){
  if(ok==true){
    document.getElementById("intrebare").innerText = "Rezultatele tale:";
    document.getElementById("buton1").style.display = "none";
    document.getElementById("buton2").style.display = "none";
    document.getElementById("buton3").style.display = "none";
    document.getElementById("buton4").style.display = "none";
    let rezultatFinal = "Emoțiile tale predominante sunt:\n";
    let rez = "";
    let maxim = -1;
    for (let emotie in scorEmotii) {
        if (scorEmotii[emotie] > 0) {
            rezultatFinal += `${emotie}: ${scorEmotii[emotie]}\n`;
        }
        if (scorEmotii[emotie] > maxim) {
            maxim = scorEmotii[emotie];
        }
    }
    if(scorEmotii["fericire"] == maxim)
        rez += "Ești o persoană optimistă și plină de viață!";
    else if(scorEmotii["tristete"] == maxim)
        rez += "Ești o persoană sensibilă și melancolică.";
    else if(scorEmotii["anxietate"] == maxim)
        rez += "Ești o persoană precaută și atentă la detalii.";
    else if(scorEmotii["furie"] == maxim)
        rez += "Ești o persoană nervoasă și hotărâtă.";
    else if(scorEmotii["liniste"] == maxim)
        rez += "Ești o persoană echilibrată și calmă.";
    else if(scorEmotii["energie"] == maxim)
        rez += "Ești o persoană entuziasmată și dinamică.";
    document.getElementById("intrebare").style.textAlign = "center";
    document.getElementById("intrebare").innerText += "\n" + "\n" +  rezultatFinal + "\n" + rez;
}
else{
    document.getElementById("intrebare").innerText = "Rezultatele tale:";
    document.getElementById("buton1").style.display = "none";
    document.getElementById("buton2").style.display = "none";
    document.getElementById("buton3").style.display = "none";
    document.getElementById("buton4").style.display = "none";
    let rezultatFinal = "Cariera ta potrivită ar putea fi una din următoarele:\n";
    let rez = "";
    let maxim = -1;
    for (let emotie in scorEmotii) {
        if (scorEmotii[emotie] > 0) {
            rezultatFinal += `${emotie}: ${scorEmotii[emotie]}\n`;
        }
        if (scorEmotii[emotie] > maxim) {
            maxim = scorEmotii[emotie];
        }
    }
    if(scorEmotii["programator"] == maxim)
        rez += "Ar trebui să urmezi o carieră în programare sau dezvoltare software.";
    else if(scorEmotii["medic"] == maxim)
        rez += "Ar trebui să urmezi o carieră în medicină sau domenii conexe.";
    else if(scorEmotii["manager"] == maxim)
        rez += "Ar trebui să urmezi o carieră în management sau administrare.";
    else if(scorEmotii["psiholog"] == maxim)
        rez += "Ar trebui să urmezi o carieră în psihologie sau consiliere.";
    else if(scorEmotii["profesor"] == maxim)
        rez += "Ar trebui să urmezi o carieră în educație sau predare.";
    else if(scorEmotii["designer"] == maxim)
        rez += "Ar trebui să urmezi o carieră în design sau arte vizuale.";
    document.getElementById("intrebare").style.textAlign = "center";
    document.getElementById("intrebare").innerText += "\n" + "\n" +  rezultatFinal + "\n" + rez;
}
}
function reset(){
  if(ok==true){

    index = 0;
    scorEmotii = {
        fericire: 0,
        tristete: 0,
        anxietate:  0,
        furie: 0,
        liniste: 0,
        energie: 0
    };
    document.getElementById("buton1").style.display = "inline";
    document.getElementById("buton2").style.display = "inline";
    document.getElementById("buton3").style.display = "inline";
    document.getElementById("buton4").style.display = "inline";
    verificare();
  }
  else
  {
    index = 0;
    scorEmotii = {
        programator: 0,
        medic: 0,
        manager: 0,
        psiholog: 0,
        profesor: 0,
        designer: 0
    };
    document.getElementById("buton1").style.display = "inline";
    document.getElementById("buton2").style.display = "inline";
    document.getElementById("buton3").style.display = "inline";
    document.getElementById("buton4").style.display = "inline";
    verificare();
  }
}
function schimba(){
  ok = !ok;
  s();
}
function s(){
   index = 0; 
    if(ok==true){
 quizEmotii = [
  {
    intrebare: "Cum te simți de obicei dimineața?",
    raspunsuri: [
      { text: "Plin de energie", emotie: "fericire" },
      { text: "Îngrijorat", emotie: "anxietate" },
      { text: "Obosit", emotie: "tristete" },
      { text: "Calm", emotie: "liniste" }
    ]
  },
  {
    intrebare: "Ce reacție ai când apare o problemă neașteptată?",
    raspunsuri: [
      { text: "Intru în panică", emotie: "anxietate" },
      { text: "Mă enervez", emotie: "furie" },
      { text: "Caut o soluție", emotie: "liniste" },
      { text: "Mă retrag", emotie: "tristete" }
    ]
  },
  {
    intrebare: "Cum îți petreci timpul liber?",
    raspunsuri: [
      { text: "Cu alți oameni", emotie: "fericire" },
      { text: "Singur, gândindu-mă", emotie: "tristete" },
      { text: "Făcând ceva activ", emotie: "energie" },
      { text: "Relaxându-mă", emotie: "liniste" }
    ]
  },
  {
    intrebare: "Cum reacționezi la critici?",
    raspunsuri: [
      { text: "Mă simt rănit", emotie: "tristete" },
      { text: "Mă apăr", emotie: "furie" },
      { text: "Le analizez", emotie: "liniste" },
      { text: "Mă îngrijorez", emotie: "anxietate" }
    ]
  },
  {
    intrebare: "Ce emoție apare cel mai des înainte de o decizie importantă?",
    raspunsuri: [
      { text: "Entuziasm", emotie: "fericire" },
      { text: "Teamă", emotie: "anxietate" },
      { text: "Confuzie", emotie: "tristete" },
      { text: "Echilibru", emotie: "liniste" }
    ]
  },
    {
    intrebare: "Ce emoție apare cel mai des înainte de o decizie importantă?",
    raspunsuri: [
      { text: "Entuziasm", emotie: "fericire" },
      { text: "Teamă", emotie: "anxietate" },
      { text: "Confuzie", emotie: "tristete" },
      { text: "Echilibru", emotie: "liniste" }
    ]
  },
  {
  intrebare: "Ce emoție apare când ceva nu merge conform planului?",
  raspunsuri: [
    { text: "Frustrare", emotie: "furie" },
    { text: "Îngrijorare", emotie: "anxietate" },
    { text: "Acceptare", emotie: "liniste" },
    { text: "Dezamăgire", emotie: "tristete" }
  ]
},
{
  intrebare: "Cum reacționezi când primești o veste bună?",
  raspunsuri: [
    { text: "Bucurie intensă", emotie: "fericire" },
    { text: "Calm interior", emotie: "liniste" },
    { text: "Entuziasm exploziv", emotie: "energie" },
    { text: "Neîncredere", emotie: "anxietate" }
  ]
},
{
  intrebare: "Ce simți cel mai des la finalul unei zile obositoare?",
  raspunsuri: [
    { text: "Epuizare", emotie: "tristete" },
    { text: "Ușurare", emotie: "liniste" },
    { text: "Iritare", emotie: "furie" },
    { text: "Satisfacție", emotie: "fericire" }
  ]
},
{
  intrebare: "Cum te simți când ai multe lucruri de făcut într-un timp scurt?",
  raspunsuri: [
    { text: "Agitat", emotie: "anxietate" },
    { text: "Plin de adrenalină", emotie: "energie" },
    { text: "Copleșit", emotie: "tristete" },
    { text: "Concentrat și calm", emotie: "liniste" }
  ]
},
{
  intrebare: "Ce emoție apare când cineva te contrazice?",
  raspunsuri: [
    { text: "Furie", emotie: "furie" },
    { text: "Nesiguranță", emotie: "anxietate" },
    { text: "Indiferență calmă", emotie: "liniste" },
    { text: "Tristețe", emotie: "tristete" }
  ]
},
{
  intrebare: "Cum te simți când realizezi că ai făcut o alegere bună?",
  raspunsuri: [
    { text: "Mândrie și bucurie", emotie: "fericire" },
    { text: "Energie pozitivă", emotie: "energie" },
    { text: "Liniște interioară", emotie: "liniste" },
    { text: "Ușoară tensiune", emotie: "anxietate" }
  ]
},
{
  intrebare: "Cum te simți când te confrunți cu o situație necunoscută?",
  raspunsuri: [
    { text: "Îngrijorat și tensionat", emotie: "anxietate" },
    { text: "Curios și deschis", emotie: "energie" },
    { text: "Calm și observator", emotie: "liniste" },
    { text: "Copleșit și trist", emotie: "tristete" }
  ]
},
{
  intrebare: "Ce simți când cineva îți înțelege cu adevărat punctul de vedere?",
  raspunsuri: [
    { text: "Fericire profundă", emotie: "fericire" },
    { text: "Ușurare și liniște", emotie: "liniste" },
    { text: "Motivație să continui", emotie: "energie" },
    { text: "Neliniște subtilă", emotie: "anxietate" }
  ]
},
{
  intrebare: "Cum reacționezi când ai de ales între două opțiuni similare?",
  raspunsuri: [
    { text: "Confuz și nesigur", emotie: "anxietate" },
    { text: "Gândire clară și echilibrată", emotie: "liniste" },
    { text: "Entuziasm pentru posibilități", emotie: "energie" },
    { text: "Frustrare ușoară", emotie: "furie" }
  ]
},
{
  intrebare: "Ce simți atunci când reflectezi asupra greșelilor din trecut?",
  raspunsuri: [
    { text: "Regret și tristețe", emotie: "tristete" },
    { text: "Acceptare calmă", emotie: "liniste" },
    { text: "Determinare să faci mai bine", emotie: "energie" },
    { text: "Furie pe tine însuți", emotie: "furie" }
  ]
},
{
  intrebare: "Ce simți când cineva îți oferă un compliment neașteptat?",
  raspunsuri: [
    { text: "Bucurie și încântare", emotie: "fericire" },
    { text: "Ușurare și calm", emotie: "liniste" },
    { text: "Rușine", emotie: "anxietate" },
    { text: "Energie pozitivă și motivație", emotie: "energie" }
  ]
},
{
  intrebare: "Ce simți când reușești să rezolvi o problemă dificilă?",
  raspunsuri: [
    { text: "Satisfacție și fericire", emotie: "fericire" },
    { text: "Calm și mulțumire interioară", emotie: "liniste" },
    { text: "Entuziasm și energie", emotie: "energie" },
    { text: "Ușoară tensiune rămasă", emotie: "anxietate" }
  ]
},
{
  intrebare: "Cum reacționezi atunci când cineva te ignoră fără motiv?",
  raspunsuri: [
    { text: "Furios și frustrat", emotie: "furie" },
    { text: "Trist și dezamăgit", emotie: "tristete" },
    { text: "Încerc să rămân calm", emotie: "liniste" },
    { text: "Nesigur și anxios", emotie: "anxietate" }
  ]
}
];
 scorEmotii = {
  fericire: 0,
  tristete: 0,
  anxietate: 0,
  furie: 0,
  liniste: 0,
  energie: 0
};
}else
{
   quizEmotii = [
  {
    intrebare: "Ce activitate ți se potrivește cel mai mult?",
    raspunsuri: [
      { text: "Scriu cod și rezolv probleme", emotie: "programator" },
      { text: "Creez lucruri vizuale", emotie: "designer" },
      { text: "Ajut oamenii să se înțeleagă", emotie: "psiholog" },
      { text: "Coordonez echipe", emotie: "manager" }
    ]
  },
  {
    intrebare: "Unde te-ai simți cel mai confortabil?",
    raspunsuri: [
      { text: "Spital sau clinică", emotie: "medic" },
      { text: "La catedră, explicând", emotie: "profesor" },
      { text: "Birou, calculator", emotie: "programator" },
      { text: "Studio creativ", emotie: "designer" }
    ]
  },
  {
    intrebare: "Cum reacționezi într-o situație dificilă?",
    raspunsuri: [
      { text: "Ascult și sprijin emoțional", emotie: "psiholog" },
      { text: "Iau decizii rapide", emotie: "manager" },
      { text: "Analizez logic problema", emotie: "programator" },
      { text: "Găsesc soluții creative", emotie: "designer" }
    ]
  },
  {
    intrebare: "Ce te motivează cel mai mult?",
    raspunsuri: [
      { text: "Să vindec sau să ajut direct", emotie: "medic" },
      { text: "Să explic și să educ", emotie: "profesor" },
      { text: "Succesul și responsabilitatea", emotie: "manager" },
      { text: "Empatia și relațiile umane", emotie: "psiholog" }
    ]
  },
  {
    intrebare: "Ce rol ai într-un grup?",
    raspunsuri: [
      { text: "Tehnic – rezolv problemele", emotie: "programator" },
      { text: "Vin cu idei și design", emotie: "designer" },
      { text: "Am grijă de oameni", emotie: "medic" },
      { text: "Îndrum și explic", emotie: "profesor" }
    ]
  },
  {
    intrebare: "Ce îți aduce cea mai mare satisfacție?",
    raspunsuri: [
      { text: "Un elev care a înțeles", emotie: "profesor" },
      { text: "Un pacient ajutat", emotie: "medic" },
      { text: "O echipă bine organizată", emotie: "manager" },
      { text: "O persoană care se simte înțeleasă", emotie: "psiholog" }
    ]
  }
  ,
  {
  intrebare: "Ce tip de sarcină îți place cel mai mult?",
  raspunsuri: [
    { text: "Să scriu sau să repar cod", emotie: "programator" },
    { text: "Să creez ceva estetic", emotie: "designer" },
    { text: "Să organizez și să planific", emotie: "manager" },
    { text: "Să explic clar un concept", emotie: "profesor" }
  ]
},
{
  intrebare: "Cum preferi să ajuți oamenii?",
  raspunsuri: [
    { text: "Prin sprijin emoțional", emotie: "psiholog" },
    { text: "Prin tratament și îngrijire", emotie: "medic" },
    { text: "Prin coordonare și decizii", emotie: "manager" },
    { text: "Prin soluții tehnice", emotie: "programator" }
  ]
},
{
  intrebare: "Ce mediu de lucru te atrage?",
  raspunsuri: [
    { text: "Sală de clasă", emotie: "profesor" },
    { text: "Cabinet medical", emotie: "medic" },
    { text: "Agenție creativă", emotie: "designer" },
    { text: "Birou de management", emotie: "manager" }
  ]
},
{
  intrebare: "Ce calitate te definește cel mai bine?",
  raspunsuri: [
    { text: "Gândirea logică", emotie: "programator" },
    { text: "Creativitatea", emotie: "designer" },
    { text: "Empatia", emotie: "psiholog" },
    { text: "Responsabilitatea", emotie: "manager" }
  ]
},
{
  intrebare: "Ce îți place să faci în timpul liber?",
  raspunsuri: [
    { text: "Să învăț lucruri noi și să explic altora", emotie: "profesor" },
    { text: "Să citesc despre sănătate și corp", emotie: "medic" },
    { text: "Să rezolv puzzle-uri logice", emotie: "programator" },
    { text: "Să creez artă sau design", emotie: "designer" }
  ]
},
{
  intrebare: "Cum reacționezi când cineva are o problemă?",
  raspunsuri: [
    { text: "Îl ascult cu atenție", emotie: "psiholog" },
    { text: "Încerc să găsesc cauza și soluția", emotie: "medic" },
    { text: "Organizez pașii de rezolvare", emotie: "manager" },
    { text: "Explic clar ce trebuie făcut", emotie: "profesor" }
  ]
}
];
 scorEmotii = {
  programator: 0,
  medic: 0,
  manager: 0,
  psiholog: 0,
  profesor: 0,
  designer: 0
};
}
}
schimba();
verificare();
//Gets a random subtitle with my student number (little joke)
function getSubtitle() {
    tag = "UP"
    sNum = "902282"

    var text = [["{num=>","}"], ["/*","*/"], ["sub n{","}"], ["λy.", ""],
        ["//", ""], ["<num>","</num>"], ["{'num':","}"], ["string n=",";"], ["$num=",";"],
        ["", ""], ["/^","$/"], ["var n=",";"], ["(0x6D1):",""], ["epoch:","(11/1/70)"]];

    var num = Math.floor(Math.random() * text.length);
    var aTag = document.getElementsByClassName("subtitle")[0];
    var span = document.createElement("span")
    var a = document.createElement("a")
    a.setAttribute("href", "/index.html");
    a.setAttribute("class", "bright"); //Adds the CSS for the title

    if(text[num][0].includes("epoch")){
      a.innerHTML = sNum;
    }
    else{
      a.innerHTML = tag+sNum;
    }

    span.innerHTML = text[num][0];
    aTag.appendChild(span);
    aTag.appendChild(a);
    span = document.createElement("span")
    span.innerHTML = text[num][1];
    aTag.appendChild(span);
}

window.onscroll = function(){ scrollFunction()};

function scrollFunction(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    document.getElementById("btnTop").style.display = "block";
  }
  else{
    document.getElementById("btnTop").style.display = "none";
  }
}

function goToTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function loadEvents() {
    getSubtitle();
}

loadEvents();

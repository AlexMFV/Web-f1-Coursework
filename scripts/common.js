//Gets a random subtitle with my student number (little joke)
function getSubtitle() {
    tag = "UP"
    sNum = "902282"

    var text = [["{num=>","}"], ["/*","*/"], ["sub n{","}"], ["λy.", ""],
        ["//", ""], ["<num>","</num>"], ["{'num':","}"], ["string n=",";"], ["$num=",";"],
        ["", ""], ["/^","$/"], ["var n=",";"], ["(0x6D1):",""], ["epoch:","(11/1/70)"]];

    var num = Math.floor(Math.random() * text.length);
    var aTag = document.getElementById("subtitle");
    var span = document.createElement("span")
    var h4 = document.createElement("h4")

    if(text[num][0].includes("epoch")){
      h4.innerHTML = sNum;
    }
    else{
      h4.innerHTML = tag+sNum;
    }

    span.innerHTML = text[num][0];
    aTag.appendChild(span);
    aTag.appendChild(h4);
    span = document.createElement("span")
    span.innerHTML = text[num][1];
    aTag.appendChild(span);
}

function loadEvents() {
    getSubtitle();
}

loadEvents();

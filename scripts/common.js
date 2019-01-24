//Gets a random subtitle with my student number (little joke)
function getSubtitle() {
    var text = ["{num=>UPxyz}", "/*UPxyz*/", "UP:x.y.z", "sub n{UPxyz}", "λy.UPxyz",
        "//UPxyz", "<num>UPxyz</num>", "{'num':\"UPxyz\"}", "string n=\"UPxyz\";", "$num=UPxyz;",
        "UPxyz", "/^UPxyz$/", "var n=\"UPxyz\";", "(0x6D1):\"UPxyz\"", "epoch:xyz(11/1/70)"];

    var num = Math.floor(Math.random() * text.length);
    var teste = document.getElementById("subtitle");

    if (text[num] == "UP:x.y.z") {
        var newText = text[num].replace('x.y.z', '90.22.82');
    }
    else {
        var newText = text[num].replace('xyz', '902282');
    }
    teste.innerHTML = newText;
}

function loadEvents() {
    getSubtitle();    
}

loadEvents();
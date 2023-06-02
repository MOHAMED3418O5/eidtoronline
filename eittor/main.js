function run() {
    let HTMLCODE = document.querySelector(".editor #HTML-CODE").value;
    let CSSCODE = "<style>" + document.querySelector(".editor #CSS-CODE").value + "</style>";
    let JSCODE = document.querySelector(".editor #JS-CODE").value;
    let output = document.querySelector(".editor1 #output");
    output.contentDocument.body.innerHTML = HTMLCODE + CSSCODE;
    output.contentWindow.eval(JSCODE);
    }
    
    document.querySelector(".editor #HTML-CODE").addEventListener("keyup", run);
    document.querySelector(".editor #CSS-CODE").addEventListener("keyup", run);
    document.querySelector(".editor #JS-CODE").addEventListener("keyup", run);
var myvar;

function timeOut() {
    myvar = setTimeout(preloader, 3000);
}

function preloader() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page-content").style.display = "block";
}


/*function redierctSinhala() {
    var checkbox = document.getElementById("language-switch");
    if (checkbox.checked == true) {
        location.replace("SIVALI JUNIOR SCIENCE CLUB WEBSITE [SJSCW].html")
    }
}*/
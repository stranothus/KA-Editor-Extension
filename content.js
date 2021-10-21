var editorSize;

function noEditor() {
    var editorInput1 = document.getElementsByClassName("_1p1u4fb");
    var editorInput2 = document.getElementsByClassName("_1dt2jo0k");

    var slideBar = document.getElementsByClassName("_1n2j5e6");

    var codeOutput = document.getElementsByClassName("_fz3zdn");


    if(slideBar.length !== 0) {
        slideBar[0].style.display = "none";
    }

    editorSize = editorInput1[0].getBoundingClientRect().width;

    editorInput1[0].style.minWidth = 0;
    editorInput1[0].style.width = 0;

    editorInput2[0].style.minWidth = 0;
    editorInput2[0].style.width = 0;

    codeOutput[0].style.width = "100%";
};

function editor() {
    var editorInput1 = document.getElementsByClassName("_1p1u4fb");
    var editorInput2 = document.getElementsByClassName("_1dt2jo0k");

    var slideBar = document.getElementsByClassName("_1n2j5e6");

    var codeOutput = document.getElementsByClassName("_fz3zdn");


    if(slideBar.length !== 0) {
        slideBar[0].style.display = "block";
    }

    editorInput1[0].style.minWidth = editorSize + "px";
    editorInput1[0].style.width = editorSize + "px";

    editorInput2[0].style.minWidth = "100%";
    editorInput2[0].style.width = "100%";

    codeOutput[0].style.width = "50%";
}


var toggle = document.createElement("button");

toggle.setAttribute("type", "button");
toggle.setAttribute("role", "button");
toggle.setAttribute("tabindex", "0");
toggle.classList.add("editor-toggle");
toggle.classList.add("_qaciyjd");

toggle.innerHTML = `<span class = "_1alfwn7n">Editor On</span>`;

toggle.dataset.status = "on";

toggle.addEventListener("click", function() {
    if(toggle.dataset.status === "on") {
        toggle.dataset.status = "off";
        toggle.innerHTML = `<span class = "_1alfwn7n">Editor Off</span>`;
        noEditor();
    } else {
        toggle.dataset.status = "on";
        toggle.innerHTML = `<span class = "_1alfwn7n">Editor On</span>`;
        editor();
    }
});


var timer = window.setInterval(() => {
    var cont = document.getElementsByClassName("_7z5jsor");

    if(cont.length !== 0) {
        window.clearInterval(timer);
        cont[0].appendChild(toggle);
    }
}, 1000 / 60);


document.body.appendChild(toggle);

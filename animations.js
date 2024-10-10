const divs = document.querySelectorAll(".animate")
var i = 0.1;
function callAll() {
    i = 0.1;
    for (var div of divs) {
        appendClass(div)
    }
}


function appendClass(child) {

    if (child.getAttribute("ignore") === "true") {
        return;
    }
    if (child.children.length == 0 || child.nodeName === "A") {
        child.classList.add("animated_content")
        child.style = "--speed: "+i+"s; animation-name: top_to_bottom;"
        i+=0.15;
    }else {
        for (var c of child.children) {
            appendClass(c)
        }
    }
    
    return;
}
callAll();

i = 0;
var slider_bold = document.getElementById("bold")
slider_bold.onclick = function() {


 if (slider_bold.value === "true"){
    document.getElementById("text_bold").style.fontWeight="normal";
    slider_bold.value = false;
    document.getElementById("field").style.fontWeight="normal";
}
else if (slider_bold.value === "false"){
    document.getElementById("text_bold").style.fontWeight="bold";
    slider_bold.value = true;
    document.getElementById("field").style.fontWeight="bold";
}
}

var slider_italic = document.getElementById("italic")
slider_italic.onclick = function() {


 if (slider_italic.value === "true"){
    document.getElementById("text_italic").style.fontStyle="normal";
    slider_italic.value = false;
    document.getElementById("field").style.fontStyle="normal";
}
else if (slider_italic.value === "false"){
    document.getElementById("text_italic").style.fontStyle="italic";
    slider_italic.value = true;
    document.getElementById("field").style.fontStyle="italic";
}
}

var font = document.getElementById("font_select")
font.onchange = function(){
    document.getElementById("font").style.fontFamily=font.value;
    document.getElementById("field").style.fontFamily=font.value;
}

var size = document.getElementById("font_size")
size.onchange = function(){
    document.getElementById("size").style.fontSize=size.value + "px";
    document.getElementById("field").style.fontSize=size.value + "px";
}
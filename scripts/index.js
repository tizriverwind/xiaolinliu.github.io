let visible = false
function homenumRevelio(){
    const showcase = document.getElementById("magicalbutton");
        showcase.style.display = "block";

    if (visible) {
        showcase.style.display = "none";
        visible = false;
    } else {
        showcase.style.display = "block";
        visible = true;
    }
}
var folderIc = document.querySelector("#folder-ic");
var menuBar = document.querySelector("#menu-bar");

folderIc.onclick = () => {
    if(menuBar.style.maxHeight){
        menuBar.style.maxHeight = null;
        folderIc.className = "fas fa-folder fa-2x";
    } else {
        menuBar.style.maxHeight = "1000px";
        folderIc.className = "fas fa-folder-open fa-2x";
    }
}

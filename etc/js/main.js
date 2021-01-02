var folderIc = document.querySelector("#folder-ic");
var menuBar = document.querySelector("#menu-bar");
var btnCheck = document.querySelector("#btn-check");
var trueIcon = document.querySelectorAll(".fa-check-circle");

folderIc.onclick = () => {
    if(menuBar.style.maxHeight){
        menuBar.style.maxHeight = null;
        folderIc.className = "fas fa-folder fa-2x";
    } else {
        menuBar.style.maxHeight = "1000px";
        folderIc.className = "fas fa-folder-open fa-2x";
    }
}

btnCheck.onclick = () => {
    for(var i = 0; i < trueIcon.length; i++){
        trueIcon[i].style.color = "#00FF00";
    }
    setTimeout(() => {
        for(var j = 0; j < trueIcon.length; j++){
            trueIcon[j].style.color = "#B7193D";
        }
    }, 3000);
}

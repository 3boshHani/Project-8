//                 No Button Action
let noBtn = document.getElementById("no");
// The cycle function for no button
let step = 0;
function theCycle() {
    switch (step) {
        case 0:
            noBtn.style.cssText = "position:absolute;right:100px;top:300px;";
            break;
        case 1:
            noBtn.style.cssText = "position:absolute;top:10px;left:350px;";
            break;
        case 2:
            noBtn.style.cssText = "position:absolute;top:450px;left:300px;";
            break;
        case 3:
            noBtn.style.cssText = "position:absolute;left:15px;top:150px;";
            break;
        case 4:
            noBtn.style.cssText = "position:relative";
            break;
        default:
            break;
    }
    step = (step + 1) % 5; // to rest the cycle and make it a loop
}
// Actviting the event
noBtn.onclick = theCycle;
// Yes Button Action
let yesBtn = document.getElementById("yes");
let closeBtn = document.getElementById("close")
// Function to open the popup
function open() {
    let pop = document.getElementById("popup");
    pop.style.display = "block";
}
// To close the popup
function close() {
    let pop = document.getElementById("popup");
    pop.style.display = "none";
}
yesBtn.onclick = open;
closeBtn.onclick = close;
// to close throgh the window
window.onclick = (e) => {
    let pop = document.getElementById("popup");
    e.target == pop ? pop.style.display = "none" : "";
}



































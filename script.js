function turnOn(index) {
    for (let i = 1; i <= 6; i++) {
        document.getElementById("light" + i).classList.remove("on");
        document.getElementById("btn" + i).disabled = true;
    }
    document.getElementById("light" + index).classList.add("on");
}
function reset() {
    for (let i = 1; i <= 6; i++) {
        document.getElementById("light" + i).classList.remove("on");
        document.getElementById("btn" + i).disabled = false;
    }
}

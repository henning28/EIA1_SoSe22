document.getElementById("firstword").addEventListener("click", function () {
    changewordstyle("firstwords");
});
document.getElementById("secondword").addEventListener("click", function () {
    changewordstyle("secondwords");
});
document.getElementById("thirdword").addEventListener("click", function () {
    changewordstyle("thirdwords");
});
function changewordstyle(idname) {
    document.getElementById(idname).style.opacity = "50%";
}
//# sourceMappingURL=script.js.map
document.getElementById("firstword").addEventListener("click", function(): void {
    changewordstyle("firstwords"); });
document.getElementById("secondword").addEventListener("click", function(): void {
    changewordstyle("secondwords"); });
document.getElementById("thirdword").addEventListener("click", function(): void {
    changewordstyle("thirdwords"); });

function changewordstyle(idname: string): void {
    document.getElementById(idname).style.opacity = "50%";
}
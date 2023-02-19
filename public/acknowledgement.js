let report = document.getElementById("nick");
let nickVal = sessionStorage.getItem("nickname");
let msg = report.textContent;
msg = msg.replace("nickVal", nickVal);
report.textContent = msg;

function goBack() {
   window.location.href = "tiktokpets.html";
}
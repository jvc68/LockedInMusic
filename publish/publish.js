const pfpIN = document.getElementById("inputPFP");
const pfp = document.getElementById("pfp");
pfpIN.addEventListener("change", function () {
    const file = pfpIN.files[0];
    let fr = new FileReader();
    fr.onload = function (a) {
        pfp.src = a.target.result;
    }
    fr.readAsDataURL(file);

});

const artIN = document.getElementById("post");
const art = document.getElementById("AArt");
artIN.addEventListener("change", function () {
    console.log("HELP");
    const file = artIN.files[0];
    let fr = new FileReader();
    fr.onload = function (a) {
        art.src = a.target.result;
    }
    fr.readAsDataURL(file);

});

const unIN = document.getElementById("userNameIN");
const un = document.getElementById("username");
const capIn = document.getElementById("caption");
const cap = document.getElementById("opCap");
function update() {
    temp = "#";
    temp = temp.concat(unIN.value);
    un.innerHTML = temp;
    temp = "#";
    temp = temp.concat(unIN.value);
    temp = temp.concat(": ");
    temp = temp.concat(capIn.value);
    cap.innerHTML = temp;
}
var textFile = null;
let loadArray = [];

function makeTextFile(text) {
    var data = new Blob([text], { type: 'text/plain' });
    if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
    }
    textFile = window.URL.createObjectURL(data);

    return textFile;
};

const mm = document.getElementById("input");
const link = document.getElementById("button");
mm.addEventListener("change", function () {
    const fileList = mm.files;
    let temp = "";
    let fr = new FileReader();
    fr.readAsText(fileList[0]);
    fr.onload = function (a) {
        temp = fr.result;
        loadArray = temp.split(",");
        link.href = makeTextFile(loadArray);
    }

});
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

const saveBut = document.getElementById("save");

const inputElement = document.getElementById("input");
inputElement.addEventListener("change", function () {
    const fileList = inputElement.files;
    let temp = "";
    let fr = new FileReader();
    fr.readAsText(fileList[0]);
    fr.onload = function (a) {
        temp = fr.result;
        loadArray = temp.split(",");
        load();
    }


});

const saveFile = document.getElementById("saveBox");
saveBut.addEventListener('click', function () {
    temp = "Saved!";
    saveFile.innerHTML = temp;
    var link = document.getElementById('button');
    link.href = makeTextFile(array);
});
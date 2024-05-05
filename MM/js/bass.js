const bass1 = document.getElementById("bass1");
var bass1c = false;
const bass2 = document.getElementById("bass2");
var bass2c = false;
const bass3 = document.getElementById("bass3");
var bass3c = false;
const bass4 = document.getElementById("bass4");
var bass4c = false;
const bass5 = document.getElementById("bass5");
var bass5c = false;
const bass6 = document.getElementById("bass6");
var bass6c = false;
const bass7 = document.getElementById("bass7");
var bass7c = false;
const bass8 = document.getElementById("bass8");
var bass8c = false;
const bass9 = document.getElementById("bass9");
var bass9c = false;
const bass10 = document.getElementById("bass10");
var bass10c = false;
const bass11 = document.getElementById("bass11");
var bass11c = false;
const bass12 = document.getElementById("bass12");
var bass12c = false;
const bass13 = document.getElementById("bass13");
var bass13c = false;
const bass14 = document.getElementById("bass14");
var bass14c = false;
const bass15 = document.getElementById("bass15");
var bass15c = false;
const bass16 = document.getElementById("bass16");
var bass16c = false;

var basspos = 0;

var measure = 16 * 300;
var tempo = 300;



function whereWeAre() {
    basspos++;
    if (window.matchMedia("(max-width: 900px)").matches && basspos == 9) {
        basspos = 1;
    } else if (basspos == 17) {
        basspos = 1;

    }
}

var bassCount = setInterval(whereWeAre, tempo);


function playSound() {
    if (bass1c && basspos == 1) {
        if (document.getElementById("sound8").duration > 0 && !document.getElementById("sound8").paused) {

            document.getElementById("sound8BU").play();

        } else {
            document.getElementById("sound8").play();
        }
    }
    if (bass2c && basspos == 2) {
        if (document.getElementById("sound8").duration > 0 && !document.getElementById("sound8").paused) {

            document.getElementById("sound8BU").play();

        } else {
            document.getElementById("sound8").play();
        }
    }
    if (bass3c && basspos == 3) {
        if (document.getElementById("sound8").duration > 0 && !document.getElementById("sound8").paused) {

            document.getElementById("sound8BU").play();

        } else {
            document.getElementById("sound8").play();
        }
    }
    if (bass4c && basspos == 4) {
        if (document.getElementById("sound8").duration > 0 && !document.getElementById("sound8").paused) {

            document.getElementById("sound8BU").play();

        } else {
            document.getElementById("sound8").play();
        }
    }
    if (bass5c && basspos == 5) {
        if (document.getElementById("sound8").duration > 0 && !document.getElementById("sound8").paused) {

            document.getElementById("sound8BU").play();

        } else {
            document.getElementById("sound8").play();
        }
    }
    if (bass6c && basspos == 6) {
        if (document.getElementById("sound8").duration > 0 && !document.getElementById("sound8").paused) {

            document.getElementById("sound8BU").play();

        } else {
            document.getElementById("sound8").play();
        }
    }
    if (bass7c && basspos == 7) {
        if (document.getElementById("sound8").duration > 0 && !document.getElementById("sound8").paused) {

            document.getElementById("sound8BU").play();

        } else {
            document.getElementById("sound8").play();
        }
    }
    if (bass8c && basspos == 8) {
        if (document.getElementById("sound8").duration > 0 && !document.getElementById("sound8").paused) {

            document.getElementById("sound8BU").play();

        } else {
            document.getElementById("sound8").play();
        }
    }
    if (bass9c && basspos == 9) {
        if (document.getElementById("sound8").duration > 0 && !document.getElementById("sound8").paused) {

            document.getElementById("sound8BU").play();

        } else {
            document.getElementById("sound8").play();
        }
    }
    if (bass10c && basspos == 10) {
        if (document.getElementById("sound8").duration > 0 && !document.getElementById("sound8").paused) {

            document.getElementById("sound8BU").play();

        } else {
            document.getElementById("sound8").play();
        }
    }
    if (bass11c && basspos == 11) {
        if (document.getElementById("sound8").duration > 0 && !document.getElementById("sound8").paused) {

            document.getElementById("sound8BU").play();

        } else {
            document.getElementById("sound8").play();
        }
    }
    if (bass12c && basspos == 12) {
        if (document.getElementById("sound8").duration > 0 && !document.getElementById("sound8").paused) {

            document.getElementById("sound8BU").play();

        } else {
            document.getElementById("sound8").play();
        }
    }
    if (bass13c && basspos == 13) {
        if (document.getElementById("sound8").duration > 0 && !document.getElementById("sound8").paused) {

            document.getElementById("sound8BU").play();

        } else {
            document.getElementById("sound8").play();
        }
    }
    if (bass14c && basspos == 14) {
        if (document.getElementById("sound8").duration > 0 && !document.getElementById("sound8").paused) {

            document.getElementById("sound8BU").play();

        } else {
            document.getElementById("sound8").play();
        }
    }
    if (bass15c && basspos == 15) {
        if (document.getElementById("sound8").duration > 0 && !document.getElementById("sound8").paused) {

            document.getElementById("sound8BU").play();

        } else {
            document.getElementById("sound8").play();
        }
    }
    if (bass16c && basspos == 16) {
        if (document.getElementById("sound8").duration > 0 && !document.getElementById("sound8").paused) {

            document.getElementById("sound8BU").play();

        } else {
            document.getElementById("sound8").play();
        }
    }
}

var bassmNoise = setInterval(playSound, tempo);
let bass = 7;

document.addEventListener('click', function (a) {
    if (bass1.contains(a.target) && bass1c == false) {
        bass1c = true;
        bass1.style.backgroundColor = "blue";
        bass1.style.opacity = "100%";
    }
    else if (bass1.contains(a.target) && bass1c == true) {
        bass1c = false
        bass1.style.opacity = "60%";
    }
    let pos = 0;
    let total = (size * bass) + pos
    if (bass1c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (b) {
    if (bass2.contains(b.target) && bass2c == false) {
        bass2c = true;
        bass2.style.backgroundColor = "blue";
        bass2.style.opacity = "100%";
    }
    else if (bass2.contains(b.target) && bass2c == true) {
        bass2c = false
        bass2.style.backgroundColor = "lightblue";
        bass2.style.opacity = "50%";
    }
    let pos = 1;
    let total = (size * bass) + pos
    if (bass2c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});

document.addEventListener('click', function (c) {
    if (bass3.contains(c.target) && bass3c == false) {
        bass3c = true;
        bass3.style.backgroundColor = "blue";
        bass3.style.opacity = "100%";
    }
    else if (bass3.contains(c.target) && bass3c == true) {
        bass3c = false
        bass3.style.backgroundColor = "lightblue";
        bass3.style.opacity = "50%";
    }
    let pos = 2;
    let total = (size * bass) + pos
    if (bass3c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (d) {
    if (bass4.contains(d.target) && bass4c == false) {
        bass4c = true;
        bass4.style.backgroundColor = "blue";
        bass4.style.opacity = "100%";
    }
    else if (bass4.contains(d.target) && bass4c == true) {
        bass4c = false
        bass4.style.backgroundColor = "lightblue";
        bass4.style.opacity = "50%";
    }
    let pos = 3;
    let total = (size * bass) + pos
    if (bass4c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }

});
document.addEventListener('click', function (e) {
    if (bass5.contains(e.target) && bass5c == false) {
        bass5c = true;
        bass5.style.backgroundColor = "blue";
        bass5.style.opacity = "100%";
    }
    else if (bass5.contains(e.target) && bass5c == true) {
        bass5c = false
        bass5.style.opacity = "60%";
    }
    let pos = 4;
    let total = (size * bass) + pos
    if (bass5c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (f) {
    if (bass6.contains(f.target) && bass6c == false) {
        bass6c = true;
        bass6.style.backgroundColor = "blue";
        bass6.style.opacity = "100%";
    }
    else if (bass6.contains(f.target) && bass6c == true) {
        bass6c = false
        bass6.style.backgroundColor = "lightblue";
        bass6.style.opacity = "50%";
    }
    let pos = 5;
    let total = (size * bass) + pos
    if (bass6c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});

document.addEventListener('click', function (g) {
    if (bass7.contains(g.target) && bass7c == false) {
        bass7c = true;
        bass7.style.backgroundColor = "blue";
        bass7.style.opacity = "100%";
    }
    else if (bass7.contains(g.target) && bass7c == true) {
        bass7c = false
        bass7.style.backgroundColor = "lightblue";
        bass7.style.opacity = "50%";
    }
    let pos = 6;
    let total = (size * bass) + pos
    if (bass7c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (h) {
    if (bass8.contains(h.target) && bass8c == false) {
        bass8c = true;
        bass8.style.backgroundColor = "blue";
        bass8.style.opacity = "100%";
    }
    else if (bass8.contains(h.target) && bass8c == true) {
        bass8c = false
        bass8.style.backgroundColor = "lightblue";
        bass8.style.opacity = "50%";
    }
    let pos = 7;
    let total = (size * bass) + pos
    if (bass8c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (i) {
    if (bass9.contains(i.target) && bass9c == false) {
        bass9c = true;
        bass9.style.backgroundColor = "blue";
        bass9.style.opacity = "100%";
    }
    else if (bass9.contains(i.target) && bass9c == true) {
        bass9c = false
        bass9.style.opacity = "60%";
    }
    let pos = 8;
    let total = (size * bass) + pos
    if (bass9c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }

});
document.addEventListener('click', function (j) {
    if (bass10.contains(j.target) && bass10c == false) {
        bass10c = true;
        bass10.style.backgroundColor = "blue";
        bass10.style.opacity = "100%";
    }
    else if (bass10.contains(j.target) && bass10c == true) {
        bass10c = false
        bass10.style.backgroundColor = "lightblue";
        bass10.style.opacity = "50%";
    }
    let pos = 9;
    let total = (size * bass) + pos
    if (bass10c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (k) {
    if (bass11.contains(k.target) && bass11c == false) {
        bass11c = true;
        bass11.style.backgroundColor = "blue";
        bass11.style.opacity = "100%";
    }
    else if (bass11.contains(k.target) && bass11c == true) {
        bass11c = false
        bass11.style.backgroundColor = "lightblue";
        bass11.style.opacity = "50%";
    }
    let pos = 10;
    let total = (size * bass) + pos
    if (bass11c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (l) {
    if (bass12.contains(l.target) && bass12c == false) {
        bass12c = true;
        bass12.style.backgroundColor = "blue";
        bass12.style.opacity = "100%";
    }
    else if (bass12.contains(l.target) && bass12c == true) {
        bass12c = false
        bass12.style.backgroundColor = "lightblue";
        bass12.style.opacity = "50%";
    }
    let pos = 11;
    let total = (size * bass) + pos
    if (bass12c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (m) {
    if (bass13.contains(m.target) && bass13c == false) {
        bass13c = true;
        bass13.style.backgroundColor = "blue";
        bass13.style.opacity = "100%";
    }
    else if (bass13.contains(m.target) && bass13c == true) {
        bass13c = false
        bass13.style.opacity = "60%";
    }
    let pos = 12;
    let total = (size * bass) + pos
    if (bass13c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (n) {
    if (bass14.contains(n.target) && bass14c == false) {
        bass14c = true;
        bass14.style.backgroundColor = "blue";
        bass14.style.opacity = "100%";
    }
    else if (bass14.contains(n.target) && bass14c == true) {
        bass14c = false
        bass14.style.backgroundColor = "lightblue";
        bass14.style.opacity = "50%";
    }
    let pos = 13;
    let total = (size * bass) + pos
    if (bass14c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (o) {
    if (bass15.contains(o.target) && bass15c == false) {
        bass15c = true;
        bass15.style.backgroundColor = "blue";
        bass15.style.opacity = "100%";
    }
    else if (bass15.contains(o.target) && bass15c == true) {
        bass15c = false
        bass15.style.backgroundColor = "lightblue";
        bass15.style.opacity = "50%";
    }
    let pos = 14;
    let total = (size * bass) + pos
    if (bass15c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (p) {
    if (bass16.contains(p.target) && bass16c == false) {
        bass16c = true;
        bass16.style.backgroundColor = "blue";
        bass16.style.opacity = "100%";
    }
    else if (bass16.contains(p.target) && bass16c == true) {
        bass16c = false
        bass16.style.backgroundColor = "lightblue";
        bass16.style.opacity = "50%";
    }
    let pos = 15;
    let total = (size * bass) + pos
    if (bass16c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});

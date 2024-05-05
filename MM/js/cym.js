const cym1 = document.getElementById("cym1");
var cym1c = false;
const cym2 = document.getElementById("cym2");
var cym2c = false;
const cym3 = document.getElementById("cym3");
var cym3c = false;
const cym4 = document.getElementById("cym4");
var cym4c = false;
const cym5 = document.getElementById("cym5");
var cym5c = false;
const cym6 = document.getElementById("cym6");
var cym6c = false;
const cym7 = document.getElementById("cym7");
var cym7c = false;
const cym8 = document.getElementById("cym8");
var cym8c = false;
const cym9 = document.getElementById("cym9");
var cym9c = false;
const cym10 = document.getElementById("cym10");
var cym10c = false;
const cym11 = document.getElementById("cym11");
var cym11c = false;
const cym12 = document.getElementById("cym12");
var cym12c = false;
const cym13 = document.getElementById("cym13");
var cym13c = false;
const cym14 = document.getElementById("cym14");
var cym14c = false;
const cym15 = document.getElementById("cym15");
var cym15c = false;
const cym16 = document.getElementById("cym16");
var cym16c = false;

var cympos = 0;

var measure = 16 * 300;
var tempo = 300;



function whereWeAre() {
    cympos++;
    if (window.matchMedia("(max-width: 900px)").matches && cympos == 9) {
        cympos = 1;
    } else if (cympos == 17) {
        cympos = 1;

    }
}

var cymCount = setInterval(whereWeAre, tempo);


function playSound() {
    if (cym1c && cympos == 1) {
        if (document.getElementById("sound4").duration > 0 && !document.getElementById("sound4").paused) {

            document.getElementById("sound4BU").play();

        } else {
            document.getElementById("sound4").play();
        }
    }
    if (cym2c && cympos == 2) {
        if (document.getElementById("sound4").duration > 0 && !document.getElementById("sound4").paused) {

            document.getElementById("sound4BU").play();

        } else {
            document.getElementById("sound4").play();
        }
    }
    if (cym3c && cympos == 3) {
        if (document.getElementById("sound4").duration > 0 && !document.getElementById("sound4").paused) {

            document.getElementById("sound4BU").play();

        } else {
            document.getElementById("sound4").play();
        }
    }
    if (cym4c && cympos == 4) {
        if (document.getElementById("sound4").duration > 0 && !document.getElementById("sound4").paused) {

            document.getElementById("sound4BU").play();

        } else {
            document.getElementById("sound4").play();
        }
    }
    if (cym5c && cympos == 5) {
        if (document.getElementById("sound4").duration > 0 && !document.getElementById("sound4").paused) {

            document.getElementById("sound4BU").play();

        } else {
            document.getElementById("sound4").play();
        }
    }
    if (cym6c && cympos == 6) {
        if (document.getElementById("sound4").duration > 0 && !document.getElementById("sound4").paused) {

            document.getElementById("sound4BU").play();

        } else {
            document.getElementById("sound4").play();
        }
    }
    if (cym7c && cympos == 7) {
        if (document.getElementById("sound4").duration > 0 && !document.getElementById("sound4").paused) {

            document.getElementById("sound4BU").play();

        } else {
            document.getElementById("sound4").play();
        }
    }
    if (cym8c && cympos == 8) {
        if (document.getElementById("sound4").duration > 0 && !document.getElementById("sound4").paused) {

            document.getElementById("sound4BU").play();

        } else {
            document.getElementById("sound4").play();
        }
    }
    if (cym9c && cympos == 9) {
        if (document.getElementById("sound4").duration > 0 && !document.getElementById("sound4").paused) {

            document.getElementById("sound4BU").play();

        } else {
            document.getElementById("sound4").play();
        }
    }
    if (cym10c && cympos == 10) {
        if (document.getElementById("sound4").duration > 0 && !document.getElementById("sound4").paused) {

            document.getElementById("sound4BU").play();

        } else {
            document.getElementById("sound4").play();
        }
    }
    if (cym11c && cympos == 11) {
        if (document.getElementById("sound4").duration > 0 && !document.getElementById("sound4").paused) {

            document.getElementById("sound4BU").play();

        } else {
            document.getElementById("sound4").play();
        }
    }
    if (cym12c && cympos == 12) {
        if (document.getElementById("sound4").duration > 0 && !document.getElementById("sound4").paused) {

            document.getElementById("sound4BU").play();

        } else {
            document.getElementById("sound4").play();
        }
    }
    if (cym13c && cympos == 13) {
        if (document.getElementById("sound4").duration > 0 && !document.getElementById("sound4").paused) {

            document.getElementById("sound4BU").play();

        } else {
            document.getElementById("sound4").play();
        }
    }
    if (cym14c && cympos == 14) {
        if (document.getElementById("sound4").duration > 0 && !document.getElementById("sound4").paused) {

            document.getElementById("sound4BU").play();

        } else {
            document.getElementById("sound4").play();
        }
    }
    if (cym15c && cympos == 15) {
        if (document.getElementById("sound4").duration > 0 && !document.getElementById("sound4").paused) {

            document.getElementById("sound4BU").play();

        } else {
            document.getElementById("sound4").play();
        }
    }
    if (cym16c && cympos == 16) {
        if (document.getElementById("sound4").duration > 0 && !document.getElementById("sound4").paused) {

            document.getElementById("sound4BU").play();

        } else {
            document.getElementById("sound4").play();
        }
    }
}

var cymmNoise = setInterval(playSound, tempo);

document.addEventListener('click', function (a) {
    if (cym1.contains(a.target) && cym1c == false) {
        cym1c = true;
        cym1.style.backgroundColor = "blue";
        cym1.style.opacity = "100%";
    }
    else if (cym1.contains(a.target) && cym1c == true) {
        cym1c = false
        cym1.style.opacity = "60%";
    }
    if (cym1c) {
        array[48] = "1";
    } else {
        array[48] = "0"
    }
});
document.addEventListener('click', function (b) {
    if (cym2.contains(b.target) && cym2c == false) {
        cym2c = true;
        cym2.style.backgroundColor = "blue";
        cym2.style.opacity = "100%";
    }
    else if (cym2.contains(b.target) && cym2c == true) {
        cym2c = false
        cym2.style.backgroundColor = "lightblue";
        cym2.style.opacity = "50%";
    }
    if (cym2c) {
        array[49] = "1";
    } else {
        array[49] = "0"
    }
});

document.addEventListener('click', function (c) {
    if (cym3.contains(c.target) && cym3c == false) {
        cym3c = true;
        cym3.style.backgroundColor = "blue";
        cym3.style.opacity = "100%";
    }
    else if (cym3.contains(c.target) && cym3c == true) {
        cym3c = false
        cym3.style.backgroundColor = "lightblue";
        cym3.style.opacity = "50%";
    }
    if (cym3c) {
        array[50] = "1";
    } else {
        array[50] = "0"
    }
});
document.addEventListener('click', function (d) {
    if (cym4.contains(d.target) && cym4c == false) {
        cym4c = true;
        cym4.style.backgroundColor = "blue";
        cym4.style.opacity = "100%";
    }
    else if (cym4.contains(d.target) && cym4c == true) {
        cym4c = false
        cym4.style.backgroundColor = "lightblue";
        cym4.style.opacity = "50%";
    }
    if (cym4c) {
        array[51] = "1";
    } else {
        array[51] = "0"
    }

});
document.addEventListener('click', function (e) {
    if (cym5.contains(e.target) && cym5c == false) {
        cym5c = true;
        cym5.style.backgroundColor = "blue";
        cym5.style.opacity = "100%";
    }
    else if (cym5.contains(e.target) && cym5c == true) {
        cym5c = false
        cym5.style.opacity = "60%";
    }
    if (cym5c) {
        array[52] = "1";
    } else {
        array[52] = "0"
    }
});
document.addEventListener('click', function (f) {
    if (cym6.contains(f.target) && cym6c == false) {
        cym6c = true;
        cym6.style.backgroundColor = "blue";
        cym6.style.opacity = "100%";
    }
    else if (cym6.contains(f.target) && cym6c == true) {
        cym6c = false
        cym6.style.backgroundColor = "lightblue";
        cym6.style.opacity = "50%";
    }
    if (cym6c) {
        array[53] = "1";
    } else {
        array[53] = "0"
    }
});

document.addEventListener('click', function (g) {
    if (cym7.contains(g.target) && cym7c == false) {
        cym7c = true;
        cym7.style.backgroundColor = "blue";
        cym7.style.opacity = "100%";
    }
    else if (cym7.contains(g.target) && cym7c == true) {
        cym7c = false
        cym7.style.backgroundColor = "lightblue";
        cym7.style.opacity = "50%";
    }
    if (cym7c) {
        array[54] = "1";
    } else {
        array[54] = "0"
    }
});
document.addEventListener('click', function (h) {
    if (cym8.contains(h.target) && cym8c == false) {
        cym8c = true;
        cym8.style.backgroundColor = "blue";
        cym8.style.opacity = "100%";
    }
    else if (cym8.contains(h.target) && cym8c == true) {
        cym8c = false
        cym8.style.backgroundColor = "lightblue";
        cym8.style.opacity = "50%";
    }
    if (cym8c) {
        array[55] = "1";
    } else {
        array[55] = "0"
    }
});
document.addEventListener('click', function (i) {
    if (cym9.contains(i.target) && cym9c == false) {
        cym9c = true;
        cym9.style.backgroundColor = "blue";
        cym9.style.opacity = "100%";
    }
    else if (cym9.contains(i.target) && cym9c == true) {
        cym9c = false
        cym9.style.opacity = "60%";
    }
    if (cym9c) {
        array[56] = "1";
    } else {
        array[56] = "0"
    }
});
document.addEventListener('click', function (j) {
    if (cym10.contains(j.target) && cym10c == false) {
        cym10c = true;
        cym10.style.backgroundColor = "blue";
        cym10.style.opacity = "100%";
    }
    else if (cym10.contains(j.target) && cym10c == true) {
        cym10c = false
        cym10.style.backgroundColor = "lightblue";
        cym10.style.opacity = "50%";
    }
    if (cym10c) {
        array[57] = "1";
    } else {
        array[57] = "0"
    }
});
document.addEventListener('click', function (k) {
    if (cym11.contains(k.target) && cym11c == false) {
        cym11c = true;
        cym11.style.backgroundColor = "blue";
        cym11.style.opacity = "100%";
    }
    else if (cym11.contains(k.target) && cym11c == true) {
        cym11c = false
        cym11.style.backgroundColor = "lightblue";
        cym11.style.opacity = "50%";
    }
    if (cym11c) {
        array[58] = "1";
    } else {
        array[58] = "0"
    }
});
document.addEventListener('click', function (l) {
    if (cym12.contains(l.target) && cym12c == false) {
        cym12c = true;
        cym12.style.backgroundColor = "blue";
        cym12.style.opacity = "100%";
    }
    else if (cym12.contains(l.target) && cym12c == true) {
        cym12c = false
        cym12.style.backgroundColor = "lightblue";
        cym12.style.opacity = "50%";
    }
    if (cym12c) {
        array[59] = "1";
    } else {
        array[59] = "0"
    }
});
document.addEventListener('click', function (m) {
    if (cym13.contains(m.target) && cym13c == false) {
        cym13c = true;
        cym13.style.backgroundColor = "blue";
        cym13.style.opacity = "100%";
    }
    else if (cym13.contains(m.target) && cym13c == true) {
        cym13c = false
        cym13.style.opacity = "60%";
    }
    if (cym13c) {
        array[60] = "1";
    } else {
        array[60] = "0"
    }
});
document.addEventListener('click', function (n) {
    if (cym14.contains(n.target) && cym14c == false) {
        cym14c = true;
        cym14.style.backgroundColor = "blue";
        cym14.style.opacity = "100%";
    }
    else if (cym14.contains(n.target) && cym14c == true) {
        cym14c = false
        cym14.style.backgroundColor = "lightblue";
        cym14.style.opacity = "50%";
    }
    if (cym14c) {
        array[61] = "1";
    } else {
        array[61] = "0"
    }
});
document.addEventListener('click', function (o) {
    if (cym15.contains(o.target) && cym15c == false) {
        cym15c = true;
        cym15.style.backgroundColor = "blue";
        cym15.style.opacity = "100%";
    }
    else if (cym15.contains(o.target) && cym15c == true) {
        cym15c = false
        cym15.style.backgroundColor = "lightblue";
        cym15.style.opacity = "50%";
    }
    if (cym15c) {
        array[62] = "1";
    } else {
        array[62] = "0"
    }
});
document.addEventListener('click', function (p) {
    if (cym16.contains(p.target) && cym16c == false) {
        cym16c = true;
        cym16.style.backgroundColor = "blue";
        cym16.style.opacity = "100%";
    }
    else if (cym16.contains(p.target) && cym16c == true) {
        cym16c = false
        cym16.style.backgroundColor = "lightblue";
        cym16.style.opacity = "50%";
    }
    if (cym16c) {
        array[63] = "1";
    } else {
        array[63] = "0"
    }
});

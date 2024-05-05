const bLUm1 = document.getElementById("bLUm1");
var bLUm1c = false;
const bLUm2 = document.getElementById("bLUm2");
var bLUm2c = false;
const bLUm3 = document.getElementById("bLUm3");
var bLUm3c = false;
const bLUm4 = document.getElementById("bLUm4");
var bLUm4c = false;
const bLUm5 = document.getElementById("bLUm5");
var bLUm5c = false;
const bLUm6 = document.getElementById("bLUm6");
var bLUm6c = false;
const bLUm7 = document.getElementById("bLUm7");
var bLUm7c = false;
const bLUm8 = document.getElementById("bLUm8");
var bLUm8c = false;
const bLUm9 = document.getElementById("bLUm9");
var bLUm9c = false;
const bLUm10 = document.getElementById("bLUm10");
var bLUm10c = false;
const bLUm11 = document.getElementById("bLUm11");
var bLUm11c = false;
const bLUm12 = document.getElementById("bLUm12");
var bLUm12c = false;
const bLUm13 = document.getElementById("bLUm13");
var bLUm13c = false;
const bLUm14 = document.getElementById("bLUm14");
var bLUm14c = false;
const bLUm15 = document.getElementById("bLUm15");
var bLUm15c = false;
const bLUm16 = document.getElementById("bLUm16");
var bLUm16c = false;

var bLUmpos = 0;

var measure = 16 * 300;
var tempo = 300;


function whereWeAre() {
    bLUmpos++;
    if (window.matchMedia("(max-width: 900px)").matches && bLUmpos == 9) {
        bLUmpos = 1;
    } else if (bLUmpos == 17) {
        bLUmpos = 1;

    }
}

var bLUmCount = setInterval(whereWeAre, tempo);


function playSound() {
    if (bLUm1c && bLUmpos == 1) {
        if (document.getElementById("sound3").duration > 0 && !document.getElementById("sound3").paused) {

            document.getElementById("sound3BU").play();

        } else {
            document.getElementById("sound3").play();
        }
    }
    if (bLUm2c && bLUmpos == 2) {
        if (document.getElementById("sound3").duration > 0 && !document.getElementById("sound3").paused) {

            document.getElementById("sound3BU").play();

        } else {
            document.getElementById("sound3").play();
        }
    }
    if (bLUm3c && bLUmpos == 3) {
        if (document.getElementById("sound3").duration > 0 && !document.getElementById("sound3").paused) {

            document.getElementById("sound3BU").play();

        } else {
            document.getElementById("sound3").play();
        }
    }
    if (bLUm4c && bLUmpos == 4) {
        if (document.getElementById("sound3").duration > 0 && !document.getElementById("sound3").paused) {

            document.getElementById("sound3BU").play();

        } else {
            document.getElementById("sound3").play();
        }
    }
    if (bLUm5c && bLUmpos == 5) {
        if (document.getElementById("sound3").duration > 0 && !document.getElementById("sound3").paused) {

            document.getElementById("sound3BU").play();

        } else {
            document.getElementById("sound3").play();
        }
    }
    if (bLUm6c && bLUmpos == 6) {
        if (document.getElementById("sound3").duration > 0 && !document.getElementById("sound3").paused) {

            document.getElementById("sound3BU").play();

        } else {
            document.getElementById("sound3").play();
        }
    }
    if (bLUm7c && bLUmpos == 7) {
        if (document.getElementById("sound3").duration > 0 && !document.getElementById("sound3").paused) {

            document.getElementById("sound3BU").play();

        } else {
            document.getElementById("sound3").play();
        }
    }
    if (bLUm8c && bLUmpos == 8) {
        if (document.getElementById("sound3").duration > 0 && !document.getElementById("sound3").paused) {

            document.getElementById("sound3BU").play();

        } else {
            document.getElementById("sound3").play();
        }
    }
    if (bLUm9c && bLUmpos == 9) {
        if (document.getElementById("sound3").duration > 0 && !document.getElementById("sound3").paused) {

            document.getElementById("sound3BU").play();

        } else {
            document.getElementById("sound3").play();
        }
    }
    if (bLUm10c && bLUmpos == 10) {
        if (document.getElementById("sound3").duration > 0 && !document.getElementById("sound3").paused) {

            document.getElementById("sound3BU").play();

        } else {
            document.getElementById("sound3").play();
        }
    }
    if (bLUm11c && bLUmpos == 11) {
        if (document.getElementById("sound3").duration > 0 && !document.getElementById("sound3").paused) {

            document.getElementById("sound3BU").play();

        } else {
            document.getElementById("sound3").play();
        }
    }
    if (bLUm12c && bLUmpos == 12) {
        if (document.getElementById("sound3").duration > 0 && !document.getElementById("sound3").paused) {

            document.getElementById("sound3BU").play();

        } else {
            document.getElementById("sound3").play();
        }
    }
    if (bLUm13c && bLUmpos == 13) {
        if (document.getElementById("sound3").duration > 0 && !document.getElementById("sound3").paused) {

            document.getElementById("sound3BU").play();

        } else {
            document.getElementById("sound3").play();
        }
    }
    if (bLUm14c && bLUmpos == 14) {
        if (document.getElementById("sound3").duration > 0 && !document.getElementById("sound3").paused) {

            document.getElementById("sound3BU").play();

        } else {
            document.getElementById("sound3").play();
        }
    }
    if (bLUm15c && bLUmpos == 15) {
        if (document.getElementById("sound3").duration > 0 && !document.getElementById("sound3").paused) {

            document.getElementById("sound3BU").play();

        } else {
            document.getElementById("sound3").play();
        }
    }
    if (bLUm16c && bLUmpos == 16) {
        if (document.getElementById("sound3").duration > 0 && !document.getElementById("sound3").paused) {

            document.getElementById("sound3BU").play();

        } else {
            document.getElementById("sound3").play();
        }
    }
}

var bLUmmNoise = setInterval(playSound, tempo);

document.addEventListener('click', function (a) {
    if (bLUm1.contains(a.target) && bLUm1c == false) {
        bLUm1c = true;
        bLUm1.style.backgroundColor = "blue";
        bLUm1.style.opacity = "100%";
    }
    else if (bLUm1.contains(a.target) && bLUm1c == true) {
        bLUm1c = false
        bLUm1.style.opacity = "60%";
    }
    if (bLUm1c) {
        array[32] = "1";
    } else {
        array[32] = "0"
    }
});
document.addEventListener('click', function (b) {
    if (bLUm2.contains(b.target) && bLUm2c == false) {
        bLUm2c = true;
        bLUm2.style.backgroundColor = "blue";
        bLUm2.style.opacity = "100%";
    }
    else if (bLUm2.contains(b.target) && bLUm2c == true) {
        bLUm2c = false
        bLUm2.style.backgroundColor = "lightblue";
        bLUm2.style.opacity = "50%";
    }
    if (bLUm2c) {
        array[33] = "1";
    } else {
        array[33] = "0"
    }
});

document.addEventListener('click', function (c) {
    if (bLUm3.contains(c.target) && bLUm3c == false) {
        bLUm3c = true;
        bLUm3.style.backgroundColor = "blue";
        bLUm3.style.opacity = "100%";
    }
    else if (bLUm3.contains(c.target) && bLUm3c == true) {
        bLUm3c = false
        bLUm3.style.backgroundColor = "lightblue";
        bLUm3.style.opacity = "50%";
    }
    if (bLUm3c) {
        array[34] = "1";
    } else {
        array[34] = "0"
    }
});
document.addEventListener('click', function (d) {
    if (bLUm4.contains(d.target) && bLUm4c == false) {
        bLUm4c = true;
        bLUm4.style.backgroundColor = "blue";
        bLUm4.style.opacity = "100%";
    }
    else if (bLUm4.contains(d.target) && bLUm4c == true) {
        bLUm4c = false
        bLUm4.style.backgroundColor = "lightblue";
        bLUm4.style.opacity = "50%";
    }
    if (bLUm4c) {
        array[35] = "1";
    } else {
        array[35] = "0"
    }

});
document.addEventListener('click', function (e) {
    if (bLUm5.contains(e.target) && bLUm5c == false) {
        bLUm5c = true;
        bLUm5.style.backgroundColor = "blue";
        bLUm5.style.opacity = "100%";
    }
    else if (bLUm5.contains(e.target) && bLUm5c == true) {
        bLUm5c = false
        bLUm5.style.opacity = "60%";
    }
    if (bLUm5c) {
        array[36] = "1";
    } else {
        array[36] = "0"
    }
});
document.addEventListener('click', function (f) {
    if (bLUm6.contains(f.target) && bLUm6c == false) {
        bLUm6c = true;
        bLUm6.style.backgroundColor = "blue";
        bLUm6.style.opacity = "100%";
    }
    else if (bLUm6.contains(f.target) && bLUm6c == true) {
        bLUm6c = false
        bLUm6.style.backgroundColor = "lightblue";
        bLUm6.style.opacity = "50%";
    }
    if (bLUm6c) {
        array[37] = "1";
    } else {
        array[37] = "0"
    }
});

document.addEventListener('click', function (g) {
    if (bLUm7.contains(g.target) && bLUm7c == false) {
        bLUm7c = true;
        bLUm7.style.backgroundColor = "blue";
        bLUm7.style.opacity = "100%";
    }
    else if (bLUm7.contains(g.target) && bLUm7c == true) {
        bLUm7c = false
        bLUm7.style.backgroundColor = "lightblue";
        bLUm7.style.opacity = "50%";
    }
    if (bLUm7c) {
        array[38] = "1";
    } else {
        array[38] = "0"
    }
});
document.addEventListener('click', function (h) {
    if (bLUm8.contains(h.target) && bLUm8c == false) {
        bLUm8c = true;
        bLUm8.style.backgroundColor = "blue";
        bLUm8.style.opacity = "100%";
    }
    else if (bLUm8.contains(h.target) && bLUm8c == true) {
        bLUm8c = false
        bLUm8.style.backgroundColor = "lightblue";
        bLUm8.style.opacity = "50%";
    }
    if (bLUm8c) {
        array[39] = "1";
    } else {
        array[39] = "0"
    }
});
document.addEventListener('click', function (i) {
    if (bLUm9.contains(i.target) && bLUm9c == false) {
        bLUm9c = true;
        bLUm9.style.backgroundColor = "blue";
        bLUm9.style.opacity = "100%";
    }
    else if (bLUm9.contains(i.target) && bLUm9c == true) {
        bLUm9c = false
        bLUm9.style.opacity = "60%";
    }
    if (bLUm9c) {
        array[40] = "1";
    } else {
        array[40] = "0"
    }
});
document.addEventListener('click', function (j) {
    if (bLUm10.contains(j.target) && bLUm10c == false) {
        bLUm10c = true;
        bLUm10.style.backgroundColor = "blue";
        bLUm10.style.opacity = "100%";
    }
    else if (bLUm10.contains(j.target) && bLUm10c == true) {
        bLUm10c = false
        bLUm10.style.backgroundColor = "lightblue";
        bLUm10.style.opacity = "50%";
    }
    if (bLUm10c) {
        array[41] = "1";
    } else {
        array[41] = "0"
    }
});
document.addEventListener('click', function (k) {
    if (bLUm11.contains(k.target) && bLUm11c == false) {
        bLUm11c = true;
        bLUm11.style.backgroundColor = "blue";
        bLUm11.style.opacity = "100%";
    }
    else if (bLUm11.contains(k.target) && bLUm11c == true) {
        bLUm11c = false
        bLUm11.style.backgroundColor = "lightblue";
        bLUm11.style.opacity = "50%";
    }
    if (bLUm11c) {
        array[42] = "1";
    } else {
        array[42] = "0"
    }
});
document.addEventListener('click', function (l) {
    if (bLUm12.contains(l.target) && bLUm12c == false) {
        bLUm12c = true;
        bLUm12.style.backgroundColor = "blue";
        bLUm12.style.opacity = "100%";
    }
    else if (bLUm12.contains(l.target) && bLUm12c == true) {
        bLUm12c = false
        bLUm12.style.backgroundColor = "lightblue";
        bLUm12.style.opacity = "50%";
    }
    if (bLUm12c) {
        array[43] = "1";
    } else {
        array[43] = "0"
    }
});
document.addEventListener('click', function (m) {
    if (bLUm13.contains(m.target) && bLUm13c == false) {
        bLUm13c = true;
        bLUm13.style.backgroundColor = "blue";
        bLUm13.style.opacity = "100%";
    }
    else if (bLUm13.contains(m.target) && bLUm13c == true) {
        bLUm13c = false
        bLUm13.style.opacity = "60%";
    }
    if (bLUm13c) {
        array[44] = "1";
    } else {
        array[44] = "0"
    }
});
document.addEventListener('click', function (n) {
    if (bLUm14.contains(n.target) && bLUm14c == false) {
        bLUm14c = true;
        bLUm14.style.backgroundColor = "blue";
        bLUm14.style.opacity = "100%";
    }
    else if (bLUm14.contains(n.target) && bLUm14c == true) {
        bLUm14c = false
        bLUm14.style.backgroundColor = "lightblue";
        bLUm14.style.opacity = "50%";
    }
    if (bLUm14c) {
        array[45] = "1";
    } else {
        array[45] = "0"
    }
});
document.addEventListener('click', function (o) {
    if (bLUm15.contains(o.target) && bLUm15c == false) {
        bLUm15c = true;
        bLUm15.style.backgroundColor = "blue";
        bLUm15.style.opacity = "100%";
    }
    else if (bLUm15.contains(o.target) && bLUm15c == true) {
        bLUm15c = false
        bLUm15.style.backgroundColor = "lightblue";
        bLUm15.style.opacity = "50%";
    }
    if (bLUm15c) {
        array[46] = "1";
    } else {
        array[46] = "0"
    }
});
document.addEventListener('click', function (p) {
    if (bLUm16.contains(p.target) && bLUm16c == false) {
        bLUm16c = true;
        bLUm16.style.backgroundColor = "blue";
        bLUm16.style.opacity = "100%";
    }
    else if (bLUm16.contains(p.target) && bLUm16c == true) {
        bLUm16c = false
        bLUm16.style.backgroundColor = "lightblue";
        bLUm16.style.opacity = "50%";
    }
    if (bLUm16c) {
        array[47] = "1";
    } else {
        array[47] = "0"
    }
});

const bAm1 = document.getElementById("bAm1");
var bAm1c = false;
const bAm2 = document.getElementById("bAm2");
var bAm2c = false;
const bAm3 = document.getElementById("bAm3");
var bAm3c = false;
const bAm4 = document.getElementById("bAm4");
var bAm4c = false;
const bAm5 = document.getElementById("bAm5");
var bAm5c = false;
const bAm6 = document.getElementById("bAm6");
var bAm6c = false;
const bAm7 = document.getElementById("bAm7");
var bAm7c = false;
const bAm8 = document.getElementById("bAm8");
var bAm8c = false;
const bAm9 = document.getElementById("bAm9");
var bAm9c = false;
const bAm10 = document.getElementById("bAm10");
var bAm10c = false;
const bAm11 = document.getElementById("bAm11");
var bAm11c = false;
const bAm12 = document.getElementById("bAm12");
var bAm12c = false;
const bAm13 = document.getElementById("bAm13");
var bAm13c = false;
const bAm14 = document.getElementById("bAm14");
var bAm14c = false;
const bAm15 = document.getElementById("bAm15");
var bAm15c = false;
const bAm16 = document.getElementById("bAm16");
var bAm16c = false;

var bAmpos = 0;

var measure = 16 * 300;
var tempo = 300;



function whereWeAre() {
    bAmpos++;
    if (window.matchMedia("(max-width: 900px)").matches && bAmpos == 9) {
        bAmpos = 1;
    } else if (bAmpos == 17) {
        bAmpos = 1;

    }
}

var bAmCount = setInterval(whereWeAre, tempo);


function playSound() {
    if (bAm1c && bAmpos == 1) {
        if (document.getElementById("sound5").duration > 0 && !document.getElementById("sound5").paused) {

            document.getElementById("sound5BU").play();

        } else {
            document.getElementById("sound5").play();
        }
    }
    if (bAm2c && bAmpos == 2) {
        if (document.getElementById("sound5").duration > 0 && !document.getElementById("sound5").paused) {

            document.getElementById("sound5BU").play();

        } else {
            document.getElementById("sound5").play();
        }
    }
    if (bAm3c && bAmpos == 3) {
        if (document.getElementById("sound5").duration > 0 && !document.getElementById("sound5").paused) {

            document.getElementById("sound5BU").play();

        } else {
            document.getElementById("sound5").play();
        }
    }
    if (bAm4c && bAmpos == 4) {
        if (document.getElementById("sound5").duration > 0 && !document.getElementById("sound5").paused) {

            document.getElementById("sound5BU").play();

        } else {
            document.getElementById("sound5").play();
        }
    }
    if (bAm5c && bAmpos == 5) {
        if (document.getElementById("sound5").duration > 0 && !document.getElementById("sound5").paused) {

            document.getElementById("sound5BU").play();

        } else {
            document.getElementById("sound5").play();
        }
    }
    if (bAm6c && bAmpos == 6) {
        if (document.getElementById("sound5").duration > 0 && !document.getElementById("sound5").paused) {

            document.getElementById("sound5BU").play();

        } else {
            document.getElementById("sound5").play();
        }
    }
    if (bAm7c && bAmpos == 7) {
        if (document.getElementById("sound5").duration > 0 && !document.getElementById("sound5").paused) {

            document.getElementById("sound5BU").play();

        } else {
            document.getElementById("sound5").play();
        }
    }
    if (bAm8c && bAmpos == 8) {
        if (document.getElementById("sound5").duration > 0 && !document.getElementById("sound5").paused) {

            document.getElementById("sound5BU").play();

        } else {
            document.getElementById("sound5").play();
        }
    }
    if (bAm9c && bAmpos == 9) {
        if (document.getElementById("sound5").duration > 0 && !document.getElementById("sound5").paused) {

            document.getElementById("sound5BU").play();

        } else {
            document.getElementById("sound5").play();
        }
    }
    if (bAm10c && bAmpos == 10) {
        if (document.getElementById("sound5").duration > 0 && !document.getElementById("sound5").paused) {

            document.getElementById("sound5BU").play();

        } else {
            document.getElementById("sound5").play();
        }
    }
    if (bAm11c && bAmpos == 11) {
        if (document.getElementById("sound5").duration > 0 && !document.getElementById("sound5").paused) {

            document.getElementById("sound5BU").play();

        } else {
            document.getElementById("sound5").play();
        }
    }
    if (bAm12c && bAmpos == 12) {
        if (document.getElementById("sound5").duration > 0 && !document.getElementById("sound5").paused) {

            document.getElementById("sound5BU").play();

        } else {
            document.getElementById("sound5").play();
        }
    }
    if (bAm13c && bAmpos == 13) {
        if (document.getElementById("sound5").duration > 0 && !document.getElementById("sound5").paused) {

            document.getElementById("sound5BU").play();

        } else {
            document.getElementById("sound5").play();
        }
    }
    if (bAm14c && bAmpos == 14) {
        if (document.getElementById("sound5").duration > 0 && !document.getElementById("sound5").paused) {

            document.getElementById("sound5BU").play();

        } else {
            document.getElementById("sound5").play();
        }
    }
    if (bAm15c && bAmpos == 15) {
        if (document.getElementById("sound5").duration > 0 && !document.getElementById("sound5").paused) {

            document.getElementById("sound5BU").play();

        } else {
            document.getElementById("sound5").play();
        }
    }
    if (bAm16c && bAmpos == 16) {
        if (document.getElementById("sound5").duration > 0 && !document.getElementById("sound5").paused) {

            document.getElementById("sound5BU").play();

        } else {
            document.getElementById("sound5").play();
        }
    }
}

var bAmmNoise = setInterval(playSound, tempo);
let bam = 4;

document.addEventListener('click', function (a) {
    if (bAm1.contains(a.target) && bAm1c == false) {
        bAm1c = true;
        bAm1.style.backgroundColor = "blue";
        bAm1.style.opacity = "100%";
    }
    else if (bAm1.contains(a.target) && bAm1c == true) {
        bAm1c = false
        bAm1.style.opacity = "60%";
    }
    let pos = 0;
    let total = (size * bam) + pos
    if (bAm1c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (b) {
    if (bAm2.contains(b.target) && bAm2c == false) {
        bAm2c = true;
        bAm2.style.backgroundColor = "blue";
        bAm2.style.opacity = "100%";
    }
    else if (bAm2.contains(b.target) && bAm2c == true) {
        bAm2c = false
        bAm2.style.backgroundColor = "lightblue";
        bAm2.style.opacity = "50%";
    }
    let pos = 1;
    let total = (size * bam) + pos
    if (bAm2c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});

document.addEventListener('click', function (c) {
    if (bAm3.contains(c.target) && bAm3c == false) {
        bAm3c = true;
        bAm3.style.backgroundColor = "blue";
        bAm3.style.opacity = "100%";
    }
    else if (bAm3.contains(c.target) && bAm3c == true) {
        bAm3c = false
        bAm3.style.backgroundColor = "lightblue";
        bAm3.style.opacity = "50%";
    }
    let pos = 2;
    let total = (size * bam) + pos
    if (bAm3c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (d) {
    if (bAm4.contains(d.target) && bAm4c == false) {
        bAm4c = true;
        bAm4.style.backgroundColor = "blue";
        bAm4.style.opacity = "100%";
    }
    else if (bAm4.contains(d.target) && bAm4c == true) {
        bAm4c = false
        bAm4.style.backgroundColor = "lightblue";
        bAm4.style.opacity = "50%";
    }
    let pos = 3;
    let total = (size * bam) + pos
    if (bAm4c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }

});
document.addEventListener('click', function (e) {
    if (bAm5.contains(e.target) && bAm5c == false) {
        bAm5c = true;
        bAm5.style.backgroundColor = "blue";
        bAm5.style.opacity = "100%";
    }
    else if (bAm5.contains(e.target) && bAm5c == true) {
        bAm5c = false
        bAm5.style.opacity = "60%";
    }
    let pos = 4;
    let total = (size * bam) + pos
    if (bAm5c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (f) {
    if (bAm6.contains(f.target) && bAm6c == false) {
        bAm6c = true;
        bAm6.style.backgroundColor = "blue";
        bAm6.style.opacity = "100%";
    }
    else if (bAm6.contains(f.target) && bAm6c == true) {
        bAm6c = false
        bAm6.style.backgroundColor = "lightblue";
        bAm6.style.opacity = "50%";
    }
    let pos = 5;
    let total = (size * bam) + pos
    if (bAm6c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});

document.addEventListener('click', function (g) {
    if (bAm7.contains(g.target) && bAm7c == false) {
        bAm7c = true;
        bAm7.style.backgroundColor = "blue";
        bAm7.style.opacity = "100%";
    }
    else if (bAm7.contains(g.target) && bAm7c == true) {
        bAm7c = false
        bAm7.style.backgroundColor = "lightblue";
        bAm7.style.opacity = "50%";
    }
    let pos = 6;
    let total = (size * bam) + pos
    if (bAm7c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (h) {
    if (bAm8.contains(h.target) && bAm8c == false) {
        bAm8c = true;
        bAm8.style.backgroundColor = "blue";
        bAm8.style.opacity = "100%";
    }
    else if (bAm8.contains(h.target) && bAm8c == true) {
        bAm8c = false
        bAm8.style.backgroundColor = "lightblue";
        bAm8.style.opacity = "50%";
    }
    let pos = 7;
    let total = (size * bam) + pos;
    if (bAm8c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (i) {
    if (bAm9.contains(i.target) && bAm9c == false) {
        bAm9c = true;
        bAm9.style.backgroundColor = "blue";
        bAm9.style.opacity = "100%";
    }
    else if (bAm9.contains(i.target) && bAm9c == true) {
        bAm9c = false
        bAm9.style.opacity = "60%";
    }
    let pos = 8;
    let total = (size * bam) + pos;
    console.log(total);
    if (bAm9c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }

});
document.addEventListener('click', function (j) {
    if (bAm10.contains(j.target) && bAm10c == false) {
        bAm10c = true;
        bAm10.style.backgroundColor = "blue";
        bAm10.style.opacity = "100%";
    }
    else if (bAm10.contains(j.target) && bAm10c == true) {
        bAm10c = false
        bAm10.style.backgroundColor = "lightblue";
        bAm10.style.opacity = "50%";
    }
    let pos = 9;
    let total = (size * bam) + pos;
    if (bAm10c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (k) {
    if (bAm11.contains(k.target) && bAm11c == false) {
        bAm11c = true;
        bAm11.style.backgroundColor = "blue";
        bAm11.style.opacity = "100%";
    }
    else if (bAm11.contains(k.target) && bAm11c == true) {
        bAm11c = false
        bAm11.style.backgroundColor = "lightblue";
        bAm11.style.opacity = "50%";
    }
    let pos = 10;
    let total = (size * bam) + pos
    if (bAm11c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (l) {
    if (bAm12.contains(l.target) && bAm12c == false) {
        bAm12c = true;
        bAm12.style.backgroundColor = "blue";
        bAm12.style.opacity = "100%";
    }
    else if (bAm12.contains(l.target) && bAm12c == true) {
        bAm12c = false
        bAm12.style.backgroundColor = "lightblue";
        bAm12.style.opacity = "50%";
    }
    let pos = 11;
    let total = (size * bam) + pos
    if (bAm12c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (m) {
    if (bAm13.contains(m.target) && bAm13c == false) {
        bAm13c = true;
        bAm13.style.backgroundColor = "blue";
        bAm13.style.opacity = "100%";
    }
    else if (bAm13.contains(m.target) && bAm13c == true) {
        bAm13c = false
        bAm13.style.opacity = "60%";
    }
    let pos = 12;
    let total = (size * bam) + pos
    if (bAm13c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (n) {
    if (bAm14.contains(n.target) && bAm14c == false) {
        bAm14c = true;
        bAm14.style.backgroundColor = "blue";
        bAm14.style.opacity = "100%";
    }
    else if (bAm14.contains(n.target) && bAm14c == true) {
        bAm14c = false
        bAm14.style.backgroundColor = "lightblue";
        bAm14.style.opacity = "50%";
    }
    let pos = 13;
    let total = (size * bam) + pos
    if (bAm14c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (o) {
    if (bAm15.contains(o.target) && bAm15c == false) {
        bAm15c = true;
        bAm15.style.backgroundColor = "blue";
        bAm15.style.opacity = "100%";
    }
    else if (bAm15.contains(o.target) && bAm15c == true) {
        bAm15c = false
        bAm15.style.backgroundColor = "lightblue";
        bAm15.style.opacity = "50%";
    }
    let pos = 14;
    let total = (size * bam) + pos
    if (bAm15c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (p) {
    if (bAm16.contains(p.target) && bAm16c == false) {
        bAm16c = true;
        bAm16.style.backgroundColor = "blue";
        bAm16.style.opacity = "100%";
    }
    else if (bAm16.contains(p.target) && bAm16c == true) {
        bAm16c = false
        bAm16.style.backgroundColor = "lightblue";
        bAm16.style.opacity = "50%";
    }
    let pos = 15;
    let total = (size * bam) + pos
    if (bAm16c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});

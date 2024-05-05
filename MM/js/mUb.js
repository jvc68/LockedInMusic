const mUb1 = document.getElementById("mUb1");
var mUb1c = false;
const mUb2 = document.getElementById("mUb2");
var mUb2c = false;
const mUb3 = document.getElementById("mUb3");
var mUb3c = false;
const mUb4 = document.getElementById("mUb4");
var mUb4c = false;
const mUb5 = document.getElementById("mUb5");
var mUb5c = false;
const mUb6 = document.getElementById("mUb6");
var mUb6c = false;
const mUb7 = document.getElementById("mUb7");
var mUb7c = false;
const mUb8 = document.getElementById("mUb8");
var mUb8c = false;
const mUb9 = document.getElementById("mUb9");
var mUb9c = false;
const mUb10 = document.getElementById("mUb10");
var mUb10c = false;
const mUb11 = document.getElementById("mUb11");
var mUb11c = false;
const mUb12 = document.getElementById("mUb12");
var mUb12c = false;
const mUb13 = document.getElementById("mUb13");
var mUb13c = false;
const mUb14 = document.getElementById("mUb14");
var mUb14c = false;
const mUb15 = document.getElementById("mUb15");
var mUb15c = false;
const mUb16 = document.getElementById("mUb16");
var mUb16c = false;

var mUbpos = 0;

var measure = 16 * 300;
var tempo = 300;


function whereWeAre() {
    mUbpos++;
    if (window.matchMedia("(max-width: 900px)").matches && mUbpos == 9) {
        mUbpos = 1;
    } else if (mUbpos == 17) {
        mUbpos = 1;

    }
}

var mUbCount = setInterval(whereWeAre, tempo);


function playSound() {
    if (mUb1c && mUbpos == 1) {
        if (document.getElementById("sound2").duration > 0 && !document.getElementById("sound2").paused) {

            document.getElementById("sound2BU").play();

        } else {
            document.getElementById("sound2").play();
        }
    }
    if (mUb2c && mUbpos == 2) {
        if (document.getElementById("sound2").duration > 0 && !document.getElementById("sound2").paused) {

            document.getElementById("sound2BU").play();

        } else {
            document.getElementById("sound2").play();
        }
    }
    if (mUb3c && mUbpos == 3) {
        if (document.getElementById("sound2").duration > 0 && !document.getElementById("sound2").paused) {

            document.getElementById("sound2BU").play();

        } else {
            document.getElementById("sound2").play();
        }
    }
    if (mUb4c && mUbpos == 4) {
        if (document.getElementById("sound2").duration > 0 && !document.getElementById("sound2").paused) {

            document.getElementById("sound2BU").play();

        } else {
            document.getElementById("sound2").play();
        }
    }
    if (mUb5c && mUbpos == 5) {
        if (document.getElementById("sound2").duration > 0 && !document.getElementById("sound2").paused) {

            document.getElementById("sound2BU").play();

        } else {
            document.getElementById("sound2").play();
        }
    }
    if (mUb6c && mUbpos == 6) {
        if (document.getElementById("sound2").duration > 0 && !document.getElementById("sound2").paused) {

            document.getElementById("sound2BU").play();

        } else {
            document.getElementById("sound2").play();
        }
    }
    if (mUb7c && mUbpos == 7) {
        if (document.getElementById("sound2").duration > 0 && !document.getElementById("sound2").paused) {

            document.getElementById("sound2BU").play();

        } else {
            document.getElementById("sound2").play();
        }
    }
    if (mUb8c && mUbpos == 8) {
        if (document.getElementById("sound2").duration > 0 && !document.getElementById("sound2").paused) {

            document.getElementById("sound2BU").play();

        } else {
            document.getElementById("sound2").play();
        }
    }
    if (mUb9c && mUbpos == 9) {
        if (document.getElementById("sound2").duration > 0 && !document.getElementById("sound2").paused) {

            document.getElementById("sound2BU").play();

        } else {
            document.getElementById("sound2").play();
        }
    }
    if (mUb10c && mUbpos == 10) {
        if (document.getElementById("sound2").duration > 0 && !document.getElementById("sound2").paused) {

            document.getElementById("sound2BU").play();

        } else {
            document.getElementById("sound2").play();
        }
    }
    if (mUb11c && mUbpos == 11) {
        if (document.getElementById("sound2").duration > 0 && !document.getElementById("sound2").paused) {

            document.getElementById("sound2BU").play();

        } else {
            document.getElementById("sound2").play();
        }
    }
    if (mUb12c && mUbpos == 12) {
        if (document.getElementById("sound2").duration > 0 && !document.getElementById("sound2").paused) {

            document.getElementById("sound2BU").play();

        } else {
            document.getElementById("sound2").play();
        }
    }
    if (mUb13c && mUbpos == 13) {
        if (document.getElementById("sound2").duration > 0 && !document.getElementById("sound2").paused) {

            document.getElementById("sound2BU").play();

        } else {
            document.getElementById("sound2").play();
        }
    }
    if (mUb14c && mUbpos == 14) {
        if (document.getElementById("sound2").duration > 0 && !document.getElementById("sound2").paused) {

            document.getElementById("sound2BU").play();

        } else {
            document.getElementById("sound2").play();
        }
    }
    if (mUb15c && mUbpos == 15) {
        if (document.getElementById("sound2").duration > 0 && !document.getElementById("sound2").paused) {

            document.getElementById("sound2BU").play();

        } else {
            document.getElementById("sound2").play();
        }
    }
    if (mUb16c && mUbpos == 16) {
        if (document.getElementById("sound2").duration > 0 && !document.getElementById("sound2").paused) {

            document.getElementById("sound2BU").play();

        } else {
            document.getElementById("sound2").play();
        }
    }
}

var mUbmNoise = setInterval(playSound, tempo);

document.addEventListener('click', function (a) {
    if (mUb1.contains(a.target) && mUb1c == false) {
        mUb1c = true;
        mUb1.style.backgroundColor = "blue";
        mUb1.style.opacity = "100%";
    }
    else if (mUb1.contains(a.target) && mUb1c == true) {
        mUb1c = false
        mUb1.style.opacity = "60%";
    }
    if (mUb1c) {
        array[16] = "1";
    } else {
        array[16] = "0"
    }
});
document.addEventListener('click', function (b) {
    if (mUb2.contains(b.target) && mUb2c == false) {
        mUb2c = true;
        mUb2.style.backgroundColor = "blue";
        mUb2.style.opacity = "100%";
    }
    else if (mUb2.contains(b.target) && mUb2c == true) {
        mUb2c = false
        mUb2.style.backgroundColor = "lightblue";
        mUb2.style.opacity = "50%";
    }
    if (mUb2c) {
        array[17] = "1";
    } else {
        array[17] = "0"
    }
});

document.addEventListener('click', function (c) {
    if (mUb3.contains(c.target) && mUb3c == false) {
        mUb3c = true;
        mUb3.style.backgroundColor = "blue";
        mUb3.style.opacity = "100%";
    }
    else if (mUb3.contains(c.target) && mUb3c == true) {
        mUb3c = false
        mUb3.style.backgroundColor = "lightblue";
        mUb3.style.opacity = "50%";
    }
    if (mUb3c) {
        array[18] = "1";
    } else {
        array[18] = "0"
    }
});
document.addEventListener('click', function (d) {
    if (mUb4.contains(d.target) && mUb4c == false) {
        mUb4c = true;
        mUb4.style.backgroundColor = "blue";
        mUb4.style.opacity = "100%";
    }
    else if (mUb4.contains(d.target) && mUb4c == true) {
        mUb4c = false
        mUb4.style.backgroundColor = "lightblue";
        mUb4.style.opacity = "50%";
    }
    if (mUb4c) {
        array[19] = "1";
    } else {
        array[19] = "0"
    }

});
document.addEventListener('click', function (e) {
    if (mUb5.contains(e.target) && mUb5c == false) {
        mUb5c = true;
        mUb5.style.backgroundColor = "blue";
        mUb5.style.opacity = "100%";
    }
    else if (mUb5.contains(e.target) && mUb5c == true) {
        mUb5c = false
        mUb5.style.opacity = "60%";
    }
    if (mUb5c) {
        array[20] = "1";
    } else {
        array[20] = "0"
    }
});
document.addEventListener('click', function (f) {
    if (mUb6.contains(f.target) && mUb6c == false) {
        mUb6c = true;
        mUb6.style.backgroundColor = "blue";
        mUb6.style.opacity = "100%";
    }
    else if (mUb6.contains(f.target) && mUb6c == true) {
        mUb6c = false
        mUb6.style.backgroundColor = "lightblue";
        mUb6.style.opacity = "50%";
    }
    if (mUb6c) {
        array[21] = "1";
    } else {
        array[21] = "0"
    }
});

document.addEventListener('click', function (g) {
    if (mUb7.contains(g.target) && mUb7c == false) {
        mUb7c = true;
        mUb7.style.backgroundColor = "blue";
        mUb7.style.opacity = "100%";
    }
    else if (mUb7.contains(g.target) && mUb7c == true) {
        mUb7c = false
        mUb7.style.backgroundColor = "lightblue";
        mUb7.style.opacity = "50%";
    }
    if (mUb7c) {
        array[22] = "1";
    } else {
        array[22] = "0"
    }
});
document.addEventListener('click', function (h) {
    if (mUb8.contains(h.target) && mUb8c == false) {
        mUb8c = true;
        mUb8.style.backgroundColor = "blue";
        mUb8.style.opacity = "100%";
    }
    else if (mUb8.contains(h.target) && mUb8c == true) {
        mUb8c = false
        mUb8.style.backgroundColor = "lightblue";
        mUb8.style.opacity = "50%";
    }
    if (mUb8c) {
        array[23] = "1";
    } else {
        array[23] = "0"
    }
});
document.addEventListener('click', function (i) {
    if (mUb9.contains(i.target) && mUb9c == false) {
        mUb9c = true;
        mUb9.style.backgroundColor = "blue";
        mUb9.style.opacity = "100%";
    }
    else if (mUb9.contains(i.target) && mUb9c == true) {
        mUb9c = false
        mUb9.style.opacity = "60%";
    }
    if (mUb9c) {
        array[24] = "1";
    } else {
        array[24] = "0"
    }
});
document.addEventListener('click', function (j) {
    if (mUb10.contains(j.target) && mUb10c == false) {
        mUb10c = true;
        mUb10.style.backgroundColor = "blue";
        mUb10.style.opacity = "100%";
    }
    else if (mUb10.contains(j.target) && mUb10c == true) {
        mUb10c = false
        mUb10.style.backgroundColor = "lightblue";
        mUb10.style.opacity = "50%";
    }
    if (mUb10c) {
        array[25] = "1";
    } else {
        array[25] = "0"
    }
});
document.addEventListener('click', function (k) {
    if (mUb11.contains(k.target) && mUb11c == false) {
        mUb11c = true;
        mUb11.style.backgroundColor = "blue";
        mUb11.style.opacity = "100%";
    }
    else if (mUb11.contains(k.target) && mUb11c == true) {
        mUb11c = false
        mUb11.style.backgroundColor = "lightblue";
        mUb11.style.opacity = "50%";
    }
    if (mUb11c) {
        array[26] = "1";
    } else {
        array[26] = "0"
    }
});
document.addEventListener('click', function (l) {
    if (mUb12.contains(l.target) && mUb12c == false) {
        mUb12c = true;
        mUb12.style.backgroundColor = "blue";
        mUb12.style.opacity = "100%";
    }
    else if (mUb12.contains(l.target) && mUb12c == true) {
        mUb12c = false
        mUb12.style.backgroundColor = "lightblue";
        mUb12.style.opacity = "50%";
    }
    if (mUb12c) {
        array[27] = "1";
    } else {
        array[27] = "0"
    }
});
document.addEventListener('click', function (m) {
    if (mUb13.contains(m.target) && mUb13c == false) {
        mUb13c = true;
        mUb13.style.backgroundColor = "blue";
        mUb13.style.opacity = "100%";
    }
    else if (mUb13.contains(m.target) && mUb13c == true) {
        mUb13c = false
        mUb13.style.opacity = "60%";
    }
    if (mUb13c) {
        array[28] = "1";
    } else {
        array[28] = "0"
    }
});
document.addEventListener('click', function (n) {
    if (mUb14.contains(n.target) && mUb14c == false) {
        mUb14c = true;
        mUb14.style.backgroundColor = "blue";
        mUb14.style.opacity = "100%";
    }
    else if (mUb14.contains(n.target) && mUb14c == true) {
        mUb14c = false
        mUb14.style.backgroundColor = "lightblue";
        mUb14.style.opacity = "50%";
    }
    if (mUb14c) {
        array[29] = "1";
    } else {
        array[29] = "0"
    }
});
document.addEventListener('click', function (o) {
    if (mUb15.contains(o.target) && mUb15c == false) {
        mUb15c = true;
        mUb15.style.backgroundColor = "blue";
        mUb15.style.opacity = "100%";
    }
    else if (mUb15.contains(o.target) && mUb15c == true) {
        mUb15c = false
        mUb15.style.backgroundColor = "lightblue";
        mUb15.style.opacity = "50%";
    }
    if (mUb15c) {
        array[30] = "1";
    } else {
        array[30] = "0"
    }
});
document.addEventListener('click', function (p) {
    if (mUb16.contains(p.target) && mUb16c == false) {
        mUb16c = true;
        mUb16.style.backgroundColor = "blue";
        mUb16.style.opacity = "100%";
    }
    else if (mUb16.contains(p.target) && mUb16c == true) {
        mUb16c = false
        mUb16.style.backgroundColor = "lightblue";
        mUb16.style.opacity = "50%";
    }
    if (mUb16c) {
        array[31] = "1";
    } else {
        array[31] = "0"
    }
});

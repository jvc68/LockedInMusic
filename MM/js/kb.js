const kb1 = document.getElementById("kb1");
var kb1c = false;
const kb2 = document.getElementById("kb2");
var kb2c = false;
const kb3 = document.getElementById("kb3");
var kb3c = false;
const kb4 = document.getElementById("kb4");
var kb4c = false;
const kb5 = document.getElementById("kb5");
var kb5c = false;
const kb6 = document.getElementById("kb6");
var kb6c = false;
const kb7 = document.getElementById("kb7");
var kb7c = false;
const kb8 = document.getElementById("kb8");
var kb8c = false;
const kb9 = document.getElementById("kb9");
var kb9c = false;
const kb10 = document.getElementById("kb10");
var kb10c = false;
const kb11 = document.getElementById("kb11");
var kb11c = false;
const kb12 = document.getElementById("kb12");
var kb12c = false;
const kb13 = document.getElementById("kb13");
var kb13c = false;
const kb14 = document.getElementById("kb14");
var kb14c = false;
const kb15 = document.getElementById("kb15");
var kb15c = false;
const kb16 = document.getElementById("kb16");
var kb16c = false;

var kbpos = 0;

var measure = 16 * 300;
var tempo = 300;
let size = 16;

let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


function whereWeAre() {
    kbpos++;
    if (window.matchMedia("(max-width: 900px)").matches && kbpos == 9) {
        kbpos = 1;
    } else if (kbpos == 17) {
        kbpos = 1;

    }
}

var kbCount = setInterval(whereWeAre, tempo);


function playSound() {
    if (kb1c && kbpos == 1) {
        if (document.getElementById("sound1").duration > 0 && !document.getElementById("sound1").paused) {

            document.getElementById("sound1BU").play();

        } else {
            document.getElementById("sound1").play();
        }
    }
    if (kb2c && kbpos == 2) {
        if (document.getElementById("sound1").duration > 0 && !document.getElementById("sound1").paused) {

            document.getElementById("sound1BU").play();

        } else {
            document.getElementById("sound1").play();
        }
    }
    if (kb3c && kbpos == 3) {
        if (document.getElementById("sound1").duration > 0 && !document.getElementById("sound1").paused) {

            document.getElementById("sound1BU").play();

        } else {
            document.getElementById("sound1").play();
        }
    }
    if (kb4c && kbpos == 4) {
        if (document.getElementById("sound1").duration > 0 && !document.getElementById("sound1").paused) {

            document.getElementById("sound1BU").play();

        } else {
            document.getElementById("sound1").play();
        }
    }
    if (kb5c && kbpos == 5) {
        if (document.getElementById("sound1").duration > 0 && !document.getElementById("sound1").paused) {

            document.getElementById("sound1BU").play();

        } else {
            document.getElementById("sound1").play();
        }
    }
    if (kb6c && kbpos == 6) {
        if (document.getElementById("sound1").duration > 0 && !document.getElementById("sound1").paused) {

            document.getElementById("sound1BU").play();

        } else {
            document.getElementById("sound1").play();
        }
    }
    if (kb7c && kbpos == 7) {
        if (document.getElementById("sound1").duration > 0 && !document.getElementById("sound1").paused) {

            document.getElementById("sound1BU").play();

        } else {
            document.getElementById("sound1").play();
        }
    }
    if (kb8c && kbpos == 8) {
        if (document.getElementById("sound1").duration > 0 && !document.getElementById("sound1").paused) {

            document.getElementById("sound1BU").play();

        } else {
            document.getElementById("sound1").play();
        }
    }
    if (kb9c && kbpos == 9) {
        if (document.getElementById("sound1").duration > 0 && !document.getElementById("sound1").paused) {

            document.getElementById("sound1BU").play();

        } else {
            document.getElementById("sound1").play();
        }
    }
    if (kb10c && kbpos == 10) {
        if (document.getElementById("sound1").duration > 0 && !document.getElementById("sound1").paused) {

            document.getElementById("sound1BU").play();

        } else {
            document.getElementById("sound1").play();
        }
    }
    if (kb11c && kbpos == 11) {
        if (document.getElementById("sound1").duration > 0 && !document.getElementById("sound1").paused) {

            document.getElementById("sound1BU").play();

        } else {
            document.getElementById("sound1").play();
        }
    }
    if (kb12c && kbpos == 12) {
        if (document.getElementById("sound1").duration > 0 && !document.getElementById("sound1").paused) {

            document.getElementById("sound1BU").play();

        } else {
            document.getElementById("sound1").play();
        }
    }
    if (kb13c && kbpos == 13) {
        if (document.getElementById("sound1").duration > 0 && !document.getElementById("sound1").paused) {

            document.getElementById("sound1BU").play();

        } else {
            document.getElementById("sound1").play();
        }
    }
    if (kb14c && kbpos == 14) {
        if (document.getElementById("sound1").duration > 0 && !document.getElementById("sound1").paused) {

            document.getElementById("sound1BU").play();

        } else {
            document.getElementById("sound1").play();
        }
    }
    if (kb15c && kbpos == 15) {
        if (document.getElementById("sound1").duration > 0 && !document.getElementById("sound1").paused) {

            document.getElementById("sound1BU").play();

        } else {
            document.getElementById("sound1").play();
        }
    }
    if (kb16c && kbpos == 16) {
        if (document.getElementById("sound1").duration > 0 && !document.getElementById("sound1").paused) {

            document.getElementById("sound1BU").play();

        } else {
            document.getElementById("sound1").play();
        }
    }
}

var kbmNoise = setInterval(playSound, tempo);



document.addEventListener('click', function (a) {
    if (kb1.contains(a.target) && kb1c == false) {
        kb1c = true;
        kb1.style.backgroundColor = "blue";
        kb1.style.opacity = "100%";
    }
    else if (kb1.contains(a.target) && kb1c == true) {
        kb1c = false
        kb1.style.opacity = "60%";
    }
    if (kb1c) {
        array[0] = "1";
    } else {
        array[0] = "0"
    }
});
document.addEventListener('click', function (b) {
    if (kb2.contains(b.target) && kb2c == false) {
        kb2c = true;
        kb2.style.backgroundColor = "blue";
        kb2.style.opacity = "100%";
    }
    else if (kb2.contains(b.target) && kb2c == true) {
        kb2c = false
        kb2.style.backgroundColor = "lightblue";
        kb2.style.opacity = "50%";
    }
    if (kb2c) {
        array[1] = "1";
    } else {
        array[1] = "0"
    }
});


document.addEventListener('click', function (c) {
    if (kb3.contains(c.target) && kb3c == false) {
        kb3c = true;
        kb3.style.backgroundColor = "blue";
        kb3.style.opacity = "100%";
    }
    else if (kb3.contains(c.target) && kb3c == true) {
        kb3c = false
        kb3.style.backgroundColor = "lightblue";
        kb3.style.opacity = "50%";
    }
    if (kb3c) {
        array[2] = "1";
    } else {
        array[2] = "0"
    }
});
document.addEventListener('click', function (d) {
    if (kb4.contains(d.target) && kb4c == false) {
        kb4c = true;
        kb4.style.backgroundColor = "blue";
        kb4.style.opacity = "100%";
    }
    else if (kb4.contains(d.target) && kb4c == true) {
        kb4c = false
        kb4.style.backgroundColor = "lightblue";
        kb4.style.opacity = "50%";
    }
    if (kb4c) {
        array[3] = "1";
    } else {
        array[3] = "0"
    }

});
document.addEventListener('click', function (e) {
    if (kb5.contains(e.target) && kb5c == false) {
        kb5c = true;
        kb5.style.backgroundColor = "blue";
        kb5.style.opacity = "100%";
    }
    else if (kb5.contains(e.target) && kb5c == true) {
        kb5c = false
        kb5.style.opacity = "60%";
    }
    if (kb5c) {
        array[4] = "1";
    } else {
        array[4] = "0"
    }

});
document.addEventListener('click', function (f) {
    if (kb6.contains(f.target) && kb6c == false) {
        kb6c = true;
        kb6.style.backgroundColor = "blue";
        kb6.style.opacity = "100%";
    }
    else if (kb6.contains(f.target) && kb6c == true) {
        kb6c = false
        kb6.style.backgroundColor = "lightblue";
        kb6.style.opacity = "50%";
    }
    if (kb6c) {
        array[5] = "1";
    } else {
        array[5] = "0"
    }

});

document.addEventListener('click', function (g) {
    if (kb7.contains(g.target) && kb7c == false) {
        kb7c = true;
        kb7.style.backgroundColor = "blue";
        kb7.style.opacity = "100%";
    }
    else if (kb7.contains(g.target) && kb7c == true) {
        kb7c = false
        kb7.style.backgroundColor = "lightblue";
        kb7.style.opacity = "50%";
    }
    if (kb7c) {
        array[6] = "1";
    } else {
        array[6] = "0"
    }

});
document.addEventListener('click', function (h) {
    if (kb8.contains(h.target) && kb8c == false) {
        kb8c = true;
        kb8.style.backgroundColor = "blue";
        kb8.style.opacity = "100%";
    }
    else if (kb8.contains(h.target) && kb8c == true) {
        kb8c = false
        kb8.style.backgroundColor = "lightblue";
        kb8.style.opacity = "50%";
    }
    if (kb8c) {
        array[7] = "1";
    } else {
        array[7] = "0"
    }

});
document.addEventListener('click', function (i) {
    if (kb9.contains(i.target) && kb9c == false) {
        kb9c = true;
        kb9.style.backgroundColor = "blue";
        kb9.style.opacity = "100%";
    }
    else if (kb9.contains(i.target) && kb9c == true) {
        kb9c = false
        kb9.style.opacity = "60%";
    }
    if (kb9c) {
        array[8] = "1";
    } else {
        array[8] = "0"
    }

});
document.addEventListener('click', function (j) {
    if (kb10.contains(j.target) && kb10c == false) {
        kb10c = true;
        kb10.style.backgroundColor = "blue";
        kb10.style.opacity = "100%";
    }
    else if (kb10.contains(j.target) && kb10c == true) {
        kb10c = false
        kb10.style.backgroundColor = "lightblue";
        kb10.style.opacity = "50%";
    }
    if (kb10c) {
        array[9] = "1";
    } else {
        array[9] = "0"
    }

});
document.addEventListener('click', function (k) {
    if (kb11.contains(k.target) && kb11c == false) {
        kb11c = true;
        kb11.style.backgroundColor = "blue";
        kb11.style.opacity = "100%";
    }
    else if (kb11.contains(k.target) && kb11c == true) {
        kb11c = false
        kb11.style.backgroundColor = "lightblue";
        kb11.style.opacity = "50%";
    }
    if (kb11c) {
        array[10] = "1";
    } else {
        array[10] = "0"
    }

});
document.addEventListener('click', function (l) {
    if (kb12.contains(l.target) && kb12c == false) {
        kb12c = true;
        kb12.style.backgroundColor = "blue";
        kb12.style.opacity = "100%";
    }
    else if (kb12.contains(l.target) && kb12c == true) {
        kb12c = false
        kb12.style.backgroundColor = "lightblue";
        kb12.style.opacity = "50%";
    }
    if (kb12c) {
        array[11] = "1";
    } else {
        array[11] = "0"
    }

});
document.addEventListener('click', function (m) {
    if (kb13.contains(m.target) && kb13c == false) {
        kb13c = true;
        kb13.style.backgroundColor = "blue";
        kb13.style.opacity = "100%";
    }
    else if (kb13.contains(m.target) && kb13c == true) {
        kb13c = false
        kb13.style.opacity = "60%";
    }
    if (kb13c) {
        array[12] = "1";
    } else {
        array[12] = "0"
    }
});
document.addEventListener('click', function (n) {
    if (kb14.contains(n.target) && kb14c == false) {
        kb14c = true;
        kb14.style.backgroundColor = "blue";
        kb14.style.opacity = "100%";
    }
    else if (kb14.contains(n.target) && kb14c == true) {
        kb14c = false
        kb14.style.backgroundColor = "lightblue";
        kb14.style.opacity = "50%";
    }
    if (kb14c) {
        array[13] = "1";
    } else {
        array[13] = "0"
    }

});
document.addEventListener('click', function (o) {
    if (kb15.contains(o.target) && kb15c == false) {
        kb15c = true;
        kb15.style.backgroundColor = "blue";
        kb15.style.opacity = "100%";
    }
    else if (kb15.contains(o.target) && kb15c == true) {
        kb15c = false
        kb15.style.backgroundColor = "lightblue";
        kb15.style.opacity = "50%";
    }
    if (kb15c) {
        array[14] = "1";
    } else {
        array[14] = "0"
    }

});
document.addEventListener('click', function (p) {
    if (kb16.contains(p.target) && kb16c == false) {
        kb16c = true;
        kb16.style.backgroundColor = "blue";
        kb16.style.opacity = "100%";
    }
    else if (kb16.contains(p.target) && kb16c == true) {
        kb16c = false
        kb16.style.backgroundColor = "lightblue";
        kb16.style.opacity = "50%";
    }
    if (kb16c) {
        array[15] = "1";
    } else {
        array[15] = "0"
    }

});

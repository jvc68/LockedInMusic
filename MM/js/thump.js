const thump1 = document.getElementById("thump1");
var thump1c = false;
const thump2 = document.getElementById("thump2");
var thump2c = false;
const thump3 = document.getElementById("thump3");
var thump3c = false;
const thump4 = document.getElementById("thump4");
var thump4c = false;
const thump5 = document.getElementById("thump5");
var thump5c = false;
const thump6 = document.getElementById("thump6");
var thump6c = false;
const thump7 = document.getElementById("thump7");
var thump7c = false;
const thump8 = document.getElementById("thump8");
var thump8c = false;
const thump9 = document.getElementById("thump9");
var thump9c = false;
const thump10 = document.getElementById("thump10");
var thump10c = false;
const thump11 = document.getElementById("thump11");
var thump11c = false;
const thump12 = document.getElementById("thump12");
var thump12c = false;
const thump13 = document.getElementById("thump13");
var thump13c = false;
const thump14 = document.getElementById("thump14");
var thump14c = false;
const thump15 = document.getElementById("thump15");
var thump15c = false;
const thump16 = document.getElementById("thump16");
var thump16c = false;

var thumppos = 0;

var measure = 16 * 300;
var tempo = 300;



function whereWeAre() {
    thumppos++;
    if (window.matchMedia("(max-width: 900px)").matches && thumppos == 9) {
        thumppos = 1;
    } else if (thumppos == 17) {
        thumppos = 1;

    }
}

var thumpCount = setInterval(whereWeAre, tempo);


function playSound() {
    if (thump1c && thumppos == 1) {
        if (document.getElementById("sound6").duration > 0 && !document.getElementById("sound6").paused) {

            document.getElementById("sound6BU").play();

        } else {
            document.getElementById("sound6").play();
        }
    }
    if (thump2c && thumppos == 2) {
        if (document.getElementById("sound6").duration > 0 && !document.getElementById("sound6").paused) {

            document.getElementById("sound6BU").play();

        } else {
            document.getElementById("sound6").play();
        }
    }
    if (thump3c && thumppos == 3) {
        if (document.getElementById("sound6").duration > 0 && !document.getElementById("sound6").paused) {

            document.getElementById("sound6BU").play();

        } else {
            document.getElementById("sound6").play();
        }
    }
    if (thump4c && thumppos == 4) {
        if (document.getElementById("sound6").duration > 0 && !document.getElementById("sound6").paused) {

            document.getElementById("sound6BU").play();

        } else {
            document.getElementById("sound6").play();
        }
    }
    if (thump5c && thumppos == 5) {
        if (document.getElementById("sound6").duration > 0 && !document.getElementById("sound6").paused) {

            document.getElementById("sound6BU").play();

        } else {
            document.getElementById("sound6").play();
        }
    }
    if (thump6c && thumppos == 6) {
        if (document.getElementById("sound6").duration > 0 && !document.getElementById("sound6").paused) {

            document.getElementById("sound6BU").play();

        } else {
            document.getElementById("sound6").play();
        }
    }
    if (thump7c && thumppos == 7) {
        if (document.getElementById("sound6").duration > 0 && !document.getElementById("sound6").paused) {

            document.getElementById("sound6BU").play();

        } else {
            document.getElementById("sound6").play();
        }
    }
    if (thump8c && thumppos == 8) {
        if (document.getElementById("sound6").duration > 0 && !document.getElementById("sound6").paused) {

            document.getElementById("sound6BU").play();

        } else {
            document.getElementById("sound6").play();
        }
    }
    if (thump9c && thumppos == 9) {
        if (document.getElementById("sound6").duration > 0 && !document.getElementById("sound6").paused) {

            document.getElementById("sound6BU").play();

        } else {
            document.getElementById("sound6").play();
        }
    }
    if (thump10c && thumppos == 10) {
        if (document.getElementById("sound6").duration > 0 && !document.getElementById("sound6").paused) {

            document.getElementById("sound6BU").play();

        } else {
            document.getElementById("sound6").play();
        }
    }
    if (thump11c && thumppos == 11) {
        if (document.getElementById("sound6").duration > 0 && !document.getElementById("sound6").paused) {

            document.getElementById("sound6BU").play();

        } else {
            document.getElementById("sound6").play();
        }
    }
    if (thump12c && thumppos == 12) {
        if (document.getElementById("sound6").duration > 0 && !document.getElementById("sound6").paused) {

            document.getElementById("sound6BU").play();

        } else {
            document.getElementById("sound6").play();
        }
    }
    if (thump13c && thumppos == 13) {
        if (document.getElementById("sound6").duration > 0 && !document.getElementById("sound6").paused) {

            document.getElementById("sound6BU").play();

        } else {
            document.getElementById("sound6").play();
        }
    }
    if (thump14c && thumppos == 14) {
        if (document.getElementById("sound6").duration > 0 && !document.getElementById("sound6").paused) {

            document.getElementById("sound6BU").play();

        } else {
            document.getElementById("sound6").play();
        }
    }
    if (thump15c && thumppos == 15) {
        if (document.getElementById("sound6").duration > 0 && !document.getElementById("sound6").paused) {

            document.getElementById("sound6BU").play();

        } else {
            document.getElementById("sound6").play();
        }
    }
    if (thump16c && thumppos == 16) {
        if (document.getElementById("sound6").duration > 0 && !document.getElementById("sound6").paused) {

            document.getElementById("sound6BU").play();

        } else {
            document.getElementById("sound6").play();
        }
    }
}

var thumpmNoise = setInterval(playSound, tempo);
let thump = 5;

document.addEventListener('click', function (a) {
    if (thump1.contains(a.target) && thump1c == false) {
        thump1c = true;
        thump1.style.backgroundColor = "blue";
        thump1.style.opacity = "100%";
    }
    else if (thump1.contains(a.target) && thump1c == true) {
        thump1c = false
        thump1.style.opacity = "60%";
    }
    let pos = 0;
    let total = (size * thump) + pos
    if (thump1c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (b) {
    if (thump2.contains(b.target) && thump2c == false) {
        thump2c = true;
        thump2.style.backgroundColor = "blue";
        thump2.style.opacity = "100%";
    }
    else if (thump2.contains(b.target) && thump2c == true) {
        thump2c = false
        thump2.style.backgroundColor = "lightblue";
        thump2.style.opacity = "50%";
    }
    let pos = 1;
    let total = (size * thump) + pos
    if (thump2c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});

document.addEventListener('click', function (c) {
    if (thump3.contains(c.target) && thump3c == false) {
        thump3c = true;
        thump3.style.backgroundColor = "blue";
        thump3.style.opacity = "100%";
    }
    else if (thump3.contains(c.target) && thump3c == true) {
        thump3c = false
        thump3.style.backgroundColor = "lightblue";
        thump3.style.opacity = "50%";
    }
    let pos = 2;
    let total = (size * thump) + pos
    if (thump3c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (d) {
    if (thump4.contains(d.target) && thump4c == false) {
        thump4c = true;
        thump4.style.backgroundColor = "blue";
        thump4.style.opacity = "100%";
    }
    else if (thump4.contains(d.target) && thump4c == true) {
        thump4c = false
        thump4.style.backgroundColor = "lightblue";
        thump4.style.opacity = "50%";
    }
    let pos = 3;
    let total = (size * thump) + pos
    if (thump4c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }

});
document.addEventListener('click', function (e) {
    if (thump5.contains(e.target) && thump5c == false) {
        thump5c = true;
        thump5.style.backgroundColor = "blue";
        thump5.style.opacity = "100%";
    }
    else if (thump5.contains(e.target) && thump5c == true) {
        thump5c = false
        thump5.style.opacity = "60%";
    }
    let pos = 4;
    let total = (size * thump) + pos
    if (thump5c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (f) {
    if (thump6.contains(f.target) && thump6c == false) {
        thump6c = true;
        thump6.style.backgroundColor = "blue";
        thump6.style.opacity = "100%";
    }
    else if (thump6.contains(f.target) && thump6c == true) {
        thump6c = false
        thump6.style.backgroundColor = "lightblue";
        thump6.style.opacity = "50%";
    }
    let pos = 5;
    let total = (size * thump) + pos
    if (thump6c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});

document.addEventListener('click', function (g) {
    if (thump7.contains(g.target) && thump7c == false) {
        thump7c = true;
        thump7.style.backgroundColor = "blue";
        thump7.style.opacity = "100%";
    }
    else if (thump7.contains(g.target) && thump7c == true) {
        thump7c = false
        thump7.style.backgroundColor = "lightblue";
        thump7.style.opacity = "50%";
    }
    let pos = 6;
    let total = (size * thump) + pos
    if (thump7c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (h) {
    if (thump8.contains(h.target) && thump8c == false) {
        thump8c = true;
        thump8.style.backgroundColor = "blue";
        thump8.style.opacity = "100%";
    }
    else if (thump8.contains(h.target) && thump8c == true) {
        thump8c = false
        thump8.style.backgroundColor = "lightblue";
        thump8.style.opacity = "50%";
    }
    let pos = 7;
    let total = (size * thump) + pos
    if (thump8c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (i) {
    if (thump9.contains(i.target) && thump9c == false) {
        thump9c = true;
        thump9.style.backgroundColor = "blue";
        thump9.style.opacity = "100%";
    }
    else if (thump9.contains(i.target) && thump9c == true) {
        thump9c = false
        thump9.style.opacity = "60%";
    }
    let pos = 8;
    let total = (size * thump) + pos
    if (thump9c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }

});
document.addEventListener('click', function (j) {
    if (thump10.contains(j.target) && thump10c == false) {
        thump10c = true;
        thump10.style.backgroundColor = "blue";
        thump10.style.opacity = "100%";
    }
    else if (thump10.contains(j.target) && thump10c == true) {
        thump10c = false
        thump10.style.backgroundColor = "lightblue";
        thump10.style.opacity = "50%";
    }
    let pos = 9;
    let total = (size * thump) + pos
    if (thump10c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (k) {
    if (thump11.contains(k.target) && thump11c == false) {
        thump11c = true;
        thump11.style.backgroundColor = "blue";
        thump11.style.opacity = "100%";
    }
    else if (thump11.contains(k.target) && thump11c == true) {
        thump11c = false
        thump11.style.backgroundColor = "lightblue";
        thump11.style.opacity = "50%";
    }
    let pos = 10;
    let total = (size * thump) + pos
    if (thump11c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (l) {
    if (thump12.contains(l.target) && thump12c == false) {
        thump12c = true;
        thump12.style.backgroundColor = "blue";
        thump12.style.opacity = "100%";
    }
    else if (thump12.contains(l.target) && thump12c == true) {
        thump12c = false
        thump12.style.backgroundColor = "lightblue";
        thump12.style.opacity = "50%";
    }
    let pos = 11;
    let total = (size * thump) + pos
    if (thump12c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (m) {
    if (thump13.contains(m.target) && thump13c == false) {
        thump13c = true;
        thump13.style.backgroundColor = "blue";
        thump13.style.opacity = "100%";
    }
    else if (thump13.contains(m.target) && thump13c == true) {
        thump13c = false
        thump13.style.opacity = "60%";
    }
    let pos = 12;
    let total = (size * thump) + pos
    if (thump13c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (n) {
    if (thump14.contains(n.target) && thump14c == false) {
        thump14c = true;
        thump14.style.backgroundColor = "blue";
        thump14.style.opacity = "100%";
    }
    else if (thump14.contains(n.target) && thump14c == true) {
        thump14c = false
        thump14.style.backgroundColor = "lightblue";
        thump14.style.opacity = "50%";
    }
    let pos = 13;
    let total = (size * thump) + pos
    if (thump14c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (o) {
    if (thump15.contains(o.target) && thump15c == false) {
        thump15c = true;
        thump15.style.backgroundColor = "blue";
        thump15.style.opacity = "100%";
    }
    else if (thump15.contains(o.target) && thump15c == true) {
        thump15c = false
        thump15.style.backgroundColor = "lightblue";
        thump15.style.opacity = "50%";
    }
    let pos = 14;
    let total = (size * thump) + pos
    if (thump15c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (p) {
    if (thump16.contains(p.target) && thump16c == false) {
        thump16c = true;
        thump16.style.backgroundColor = "blue";
        thump16.style.opacity = "100%";
    }
    else if (thump16.contains(p.target) && thump16c == true) {
        thump16c = false
        thump16.style.backgroundColor = "lightblue";
        thump16.style.opacity = "50%";
    }
    let pos = 15;
    let total = (size * thump) + pos
    if (thump16c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});

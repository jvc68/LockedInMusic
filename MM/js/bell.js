const bell1 = document.getElementById("bell1");
var bell1c = false;
const bell2 = document.getElementById("bell2");
var bell2c = false;
const bell3 = document.getElementById("bell3");
var bell3c = false;
const bell4 = document.getElementById("bell4");
var bell4c = false;
const bell5 = document.getElementById("bell5");
var bell5c = false;
const bell6 = document.getElementById("bell6");
var bell6c = false;
const bell7 = document.getElementById("bell7");
var bell7c = false;
const bell8 = document.getElementById("bell8");
var bell8c = false;
const bell9 = document.getElementById("bell9");
var bell9c = false;
const bell10 = document.getElementById("bell10");
var bell10c = false;
const bell11 = document.getElementById("bell11");
var bell11c = false;
const bell12 = document.getElementById("bell12");
var bell12c = false;
const bell13 = document.getElementById("bell13");
var bell13c = false;
const bell14 = document.getElementById("bell14");
var bell14c = false;
const bell15 = document.getElementById("bell15");
var bell15c = false;
const bell16 = document.getElementById("bell16");
var bell16c = false;

var bellpos = 0;

var measure = 16 * 300;
var tempo = 300;



function whereWeAre() {
    bellpos++;
    if (window.matchMedia("(max-width: 900px)").matches && bellpos == 9) {
        bellpos = 1;
    } else if (bellpos == 17) {
        bellpos = 1;

    }
}

var bellCount = setInterval(whereWeAre, tempo);


function playSound() {
    if (bell1c && bellpos == 1) {
        if (document.getElementById("sound7").duration > 0 && !document.getElementById("sound7").paused) {

            document.getElementById("sound7BU").play();

        } else {
            document.getElementById("sound7").play();
        }
    }
    if (bell2c && bellpos == 2) {
        if (document.getElementById("sound7").duration > 0 && !document.getElementById("sound7").paused) {

            document.getElementById("sound7BU").play();

        } else {
            document.getElementById("sound7").play();
        }
    }
    if (bell3c && bellpos == 3) {
        if (document.getElementById("sound7").duration > 0 && !document.getElementById("sound7").paused) {

            document.getElementById("sound7BU").play();

        } else {
            document.getElementById("sound7").play();
        }
    }
    if (bell4c && bellpos == 4) {
        if (document.getElementById("sound7").duration > 0 && !document.getElementById("sound7").paused) {

            document.getElementById("sound7BU").play();

        } else {
            document.getElementById("sound7").play();
        }
    }
    if (bell5c && bellpos == 5) {
        if (document.getElementById("sound7").duration > 0 && !document.getElementById("sound7").paused) {

            document.getElementById("sound7BU").play();

        } else {
            document.getElementById("sound7").play();
        }
    }
    if (bell6c && bellpos == 6) {
        if (document.getElementById("sound7").duration > 0 && !document.getElementById("sound7").paused) {

            document.getElementById("sound7BU").play();

        } else {
            document.getElementById("sound7").play();
        }
    }
    if (bell7c && bellpos == 7) {
        if (document.getElementById("sound7").duration > 0 && !document.getElementById("sound7").paused) {

            document.getElementById("sound7BU").play();

        } else {
            document.getElementById("sound7").play();
        }
    }
    if (bell8c && bellpos == 8) {
        if (document.getElementById("sound7").duration > 0 && !document.getElementById("sound7").paused) {

            document.getElementById("sound7BU").play();

        } else {
            document.getElementById("sound7").play();
        }
    }
    if (bell9c && bellpos == 9) {
        if (document.getElementById("sound7").duration > 0 && !document.getElementById("sound7").paused) {

            document.getElementById("sound7BU").play();

        } else {
            document.getElementById("sound7").play();
        }
    }
    if (bell10c && bellpos == 10) {
        if (document.getElementById("sound7").duration > 0 && !document.getElementById("sound7").paused) {

            document.getElementById("sound7BU").play();

        } else {
            document.getElementById("sound7").play();
        }
    }
    if (bell11c && bellpos == 11) {
        if (document.getElementById("sound7").duration > 0 && !document.getElementById("sound7").paused) {

            document.getElementById("sound7BU").play();

        } else {
            document.getElementById("sound7").play();
        }
    }
    if (bell12c && bellpos == 12) {
        if (document.getElementById("sound7").duration > 0 && !document.getElementById("sound7").paused) {

            document.getElementById("sound7BU").play();

        } else {
            document.getElementById("sound7").play();
        }
    }
    if (bell13c && bellpos == 13) {
        if (document.getElementById("sound7").duration > 0 && !document.getElementById("sound7").paused) {

            document.getElementById("sound7BU").play();

        } else {
            document.getElementById("sound7").play();
        }
    }
    if (bell14c && bellpos == 14) {
        if (document.getElementById("sound7").duration > 0 && !document.getElementById("sound7").paused) {

            document.getElementById("sound7BU").play();

        } else {
            document.getElementById("sound7").play();
        }
    }
    if (bell15c && bellpos == 15) {
        if (document.getElementById("sound7").duration > 0 && !document.getElementById("sound7").paused) {

            document.getElementById("sound7BU").play();

        } else {
            document.getElementById("sound7").play();
        }
    }
    if (bell16c && bellpos == 16) {
        if (document.getElementById("sound7").duration > 0 && !document.getElementById("sound7").paused) {

            document.getElementById("sound7BU").play();

        } else {
            document.getElementById("sound7").play();
        }
    }
}

var bellmNoise = setInterval(playSound, tempo);
let bell = 6;

document.addEventListener('click', function (a) {
    if (bell1.contains(a.target) && bell1c == false) {
        bell1c = true;
        bell1.style.backgroundColor = "blue";
        bell1.style.opacity = "100%";
    }
    else if (bell1.contains(a.target) && bell1c == true) {
        bell1c = false
        bell1.style.opacity = "60%";
    }
    let pos = 0;
    let total = (size * bell) + pos
    if (bell1c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (b) {
    if (bell2.contains(b.target) && bell2c == false) {
        bell2c = true;
        bell2.style.backgroundColor = "blue";
        bell2.style.opacity = "100%";
    }
    else if (bell2.contains(b.target) && bell2c == true) {
        bell2c = false
        bell2.style.backgroundColor = "lightblue";
        bell2.style.opacity = "50%";
    }
    let pos = 1;
    let total = (size * bell) + pos
    if (bell2c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});

document.addEventListener('click', function (c) {
    if (bell3.contains(c.target) && bell3c == false) {
        bell3c = true;
        bell3.style.backgroundColor = "blue";
        bell3.style.opacity = "100%";
    }
    else if (bell3.contains(c.target) && bell3c == true) {
        bell3c = false
        bell3.style.backgroundColor = "lightblue";
        bell3.style.opacity = "50%";
    }
    let pos = 2;
    let total = (size * bell) + pos
    if (bell3c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (d) {
    if (bell4.contains(d.target) && bell4c == false) {
        bell4c = true;
        bell4.style.backgroundColor = "blue";
        bell4.style.opacity = "100%";
    }
    else if (bell4.contains(d.target) && bell4c == true) {
        bell4c = false
        bell4.style.backgroundColor = "lightblue";
        bell4.style.opacity = "50%";
    }
    let pos = 3;
    let total = (size * bell) + pos
    if (bell4c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }

});
document.addEventListener('click', function (e) {
    if (bell5.contains(e.target) && bell5c == false) {
        bell5c = true;
        bell5.style.backgroundColor = "blue";
        bell5.style.opacity = "100%";
    }
    else if (bell5.contains(e.target) && bell5c == true) {
        bell5c = false
        bell5.style.opacity = "60%";
    }
    let pos = 4;
    let total = (size * bell) + pos
    if (bell5c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (f) {
    if (bell6.contains(f.target) && bell6c == false) {
        bell6c = true;
        bell6.style.backgroundColor = "blue";
        bell6.style.opacity = "100%";
    }
    else if (bell6.contains(f.target) && bell6c == true) {
        bell6c = false
        bell6.style.backgroundColor = "lightblue";
        bell6.style.opacity = "50%";
    }
    let pos = 5;
    let total = (size * bell) + pos
    if (bell6c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});

document.addEventListener('click', function (g) {
    if (bell7.contains(g.target) && bell7c == false) {
        bell7c = true;
        bell7.style.backgroundColor = "blue";
        bell7.style.opacity = "100%";
    }
    else if (bell7.contains(g.target) && bell7c == true) {
        bell7c = false
        bell7.style.backgroundColor = "lightblue";
        bell7.style.opacity = "50%";
    }
    let pos = 6;
    let total = (size * bell) + pos
    if (bell7c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (h) {
    if (bell8.contains(h.target) && bell8c == false) {
        bell8c = true;
        bell8.style.backgroundColor = "blue";
        bell8.style.opacity = "100%";
    }
    else if (bell8.contains(h.target) && bell8c == true) {
        bell8c = false
        bell8.style.backgroundColor = "lightblue";
        bell8.style.opacity = "50%";
    }
    let pos = 7;
    let total = (size * bell) + pos
    if (bell8c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (i) {
    if (bell9.contains(i.target) && bell9c == false) {
        bell9c = true;
        bell9.style.backgroundColor = "blue";
        bell9.style.opacity = "100%";
    }
    else if (bell9.contains(i.target) && bell9c == true) {
        bell9c = false
        bell9.style.opacity = "60%";
    }
    let pos = 8;
    let total = (size * bell) + pos
    if (bell9c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }

});
document.addEventListener('click', function (j) {
    if (bell10.contains(j.target) && bell10c == false) {
        bell10c = true;
        bell10.style.backgroundColor = "blue";
        bell10.style.opacity = "100%";
    }
    else if (bell10.contains(j.target) && bell10c == true) {
        bell10c = false
        bell10.style.backgroundColor = "lightblue";
        bell10.style.opacity = "50%";
    }
    let pos = 9;
    let total = (size * bell) + pos
    if (bell10c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (k) {
    if (bell11.contains(k.target) && bell11c == false) {
        bell11c = true;
        bell11.style.backgroundColor = "blue";
        bell11.style.opacity = "100%";
    }
    else if (bell11.contains(k.target) && bell11c == true) {
        bell11c = false
        bell11.style.backgroundColor = "lightblue";
        bell11.style.opacity = "50%";
    }
    let pos = 10;
    let total = (size * bell) + pos
    if (bell11c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (l) {
    if (bell12.contains(l.target) && bell12c == false) {
        bell12c = true;
        bell12.style.backgroundColor = "blue";
        bell12.style.opacity = "100%";
    }
    else if (bell12.contains(l.target) && bell12c == true) {
        bell12c = false
        bell12.style.backgroundColor = "lightblue";
        bell12.style.opacity = "50%";
    }
    let pos = 11;
    let total = (size * bell) + pos
    if (bell12c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (m) {
    if (bell13.contains(m.target) && bell13c == false) {
        bell13c = true;
        bell13.style.backgroundColor = "blue";
        bell13.style.opacity = "100%";
    }
    else if (bell13.contains(m.target) && bell13c == true) {
        bell13c = false
        bell13.style.opacity = "60%";
    }
    let pos = 12;
    let total = (size * bell) + pos
    if (bell13c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (n) {
    if (bell14.contains(n.target) && bell14c == false) {
        bell14c = true;
        bell14.style.backgroundColor = "blue";
        bell14.style.opacity = "100%";
    }
    else if (bell14.contains(n.target) && bell14c == true) {
        bell14c = false
        bell14.style.backgroundColor = "lightblue";
        bell14.style.opacity = "50%";
    }
    let pos = 13;
    let total = (size * bell) + pos
    if (bell14c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (o) {
    if (bell15.contains(o.target) && bell15c == false) {
        bell15c = true;
        bell15.style.backgroundColor = "blue";
        bell15.style.opacity = "100%";
    }
    else if (bell15.contains(o.target) && bell15c == true) {
        bell15c = false
        bell15.style.backgroundColor = "lightblue";
        bell15.style.opacity = "50%";
    }
    let pos = 14;
    let total = (size * bell) + pos
    if (bell15c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});
document.addEventListener('click', function (p) {
    if (bell16.contains(p.target) && bell16c == false) {
        bell16c = true;
        bell16.style.backgroundColor = "blue";
        bell16.style.opacity = "100%";
    }
    else if (bell16.contains(p.target) && bell16c == true) {
        bell16c = false
        bell16.style.backgroundColor = "lightblue";
        bell16.style.opacity = "50%";
    }
    let pos = 15;
    let total = (size * bell) + pos
    if (bell16c) {
        array[total] = "1";
    } else {
        array[total] = "0"
    }
});

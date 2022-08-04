document.addEventListener("keypress", function (eent) {
    let pressedkey = eent.key;
    console.log(pressedkey);
    sound(pressedkey);
})
// document.addEventListener("keypress", function (event) {
//     let pressedkey = event.key;
//     sound(pressedkey);
// })
let nmbr = document.querySelectorAll(".box").length;
for (let i = 0; i < nmbr; i++) {
    document.querySelectorAll(".box")[i].addEventListener("click", function () {
        let conhtml = this.innerHTML;
        console.log(conhtml);
        sound(conhtml);
    })
}
let audio;
function sound(conhtml) {
    switch (conhtml) {
        case "a":
            audio = new Audio('sounds/aa.mp3');
            audio.play();
            break;
        case "b":
            audio = new Audio('sounds/bb.mp3');
            audio.play();
            break;
        case "c":
            audio = new Audio('sounds/cc.mp3');
            audio.play();
            break;
        case "d":
            audio = new Audio('sounds/dd.mp3')
            audio.play();
            break;
        case "e":
            audio = new Audio('sounds/ee.mp3');
            audio.play();
            break;
        case "f":
            audio = new Audio('sounds/ff.mp3');
            audio.play();
            break;
        case "g":
            audio = new Audio('sounds/gg.mp3');
            audio.play();
            break;

        case "h":
            audio = new Audio('sounds/hh.mp3');
            audio.play();
            break;
        case "i":
            audio = new Audio('sounds/ii.mp3');
            audio.play();
            break;
            case "j":
                audio = new Audio('sounds/jj.mp3')
                audio.play();
                break;
        case "k":
            audio = new Audio('sounds/kk.mp3');
            audio.play();
            break;
            case "l":
            audio = new Audio('sounds/ll.mp3')
            audio.play();
            break;
        case "m":
            audio = new Audio('sounds/nn.mp3');
            audio.play();
            break;
        case "n":
            audio = new Audio('sounds/nn.mp3');
            audio.play();
            break;
        case "o":
            audio = new Audio('sounds/oo.mp3');
            audio.play();
            break;

        case "p":
            audio = new Audio('sounds/pp.mp3');
            audio.play();
            break;
        case "q":
            audio = new Audio('sounds/qq.mp3');
            audio.play();
            break;
        case "r":
            audio = new Audio('sounds/rr.mp3');
            audio.play();
            break;
            case "s":
            audio = new Audio('sounds/ss.mp3')
            audio.play();
            break;
        case "t":
            audio = new Audio('sounds/tt.mp3');
            audio.play();
            break;
        case "u":
            audio = new Audio('sounds/uu.mp3');
            audio.play();
            break;
        case "v":
            audio = new Audio('sounds/vv.mp3');
            audio.play();
            break;
        case "x":
            audio = new Audio('sounds/xx.mp3');
            audio.play();
            break;
        case "y":
            audio = new Audio('sounds/yy.mp3');
            audio.play();
            break;
        case "z":
            audio = new Audio('sounds/zz.mp3');
            audio.play();
            break;
        

        
        case "w":
            audio = new Audio('sounds/ww.mp3')
            audio.play();
            break;
        

        default: console.log();
            break;
    }
}

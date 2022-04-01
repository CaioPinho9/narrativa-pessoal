var i = 0;
var txt; 
var speed = 60;
var paragraph = 0;
var sound = 0;
var sSound = 0;

start();

function changeImage() {
    if (paragraph == 2) {
        (function() {
        var border = document.getElementById("image");
        border.style.borderStyle = "solid";
        var img = document.getElementsByTagName('img')[0]; 
        img.style.visibility = "visible";
        var imageDir = 'images/'
        var delayInSeconds = 5;                           
        // list image names
        var images = ['pxArt(0).png','pxArt(0).png','pxArt(1).png', 'pxArt(2).png', 'pxArt(3).png', 'pxArt(4).png','pxArt(5).png', 'pxArt(6).png', 'pxArt(7).png', 'pxArt(8).png','pxArt(9).png', 'pxArt(10).png', 'pxArt(11).png', 'pxArt(12).png', 'pxArt(12).png'];

        // don't change below this line
        var num = 0;
        var changeImage = function() {
            var len = images.length;
            img.src = imageDir+images[num++];
            if (num == len) {
                num = 0;
            }
        };
        setInterval(changeImage, delayInSeconds * 150);
        })();
    }
    if (paragraph == 10) {
        (function() {
        var img = document.getElementsByTagName('img')[1];
        img.style.visibility = "visible";
        var imageDir = 'images/'
        var delayInSeconds = 5;                           
        // list image names
        var images = ['jogos(0).png','jogos(1).png', 'jogos(2).png', 'jogos(3).png', 'jogos(4).png'];

        // don't change below this line
        var num = 0;
        var changeImage = function() {
            var len = images.length;
            img.src = imageDir+images[num++];
            if (num == len) {
                num = 0;
            }
        };
        setInterval(changeImage, delayInSeconds * 300);
        })();
    }
}

function start() {
    var p = document.getElementsByTagName('p')[paragraph];
    txt = p.innerHTML;
    p.innerHTML = "";
    p.style.visibility = "visible";
    typeWriter();
}  

function typeWriter() {
    if (i < txt.length) {
        document.getElementsByTagName("p")[paragraph].style.borderRight.visibility = "visible";
        if (txt.charAt(i) == "%") {
            speed = 40;
            var p = document.getElementsByTagName("p")[paragraph].innerHTML;
            document.getElementsByTagName("p")[paragraph].innerHTML = p.slice(0,-1);
        } else {
            speed = 50;
            document.getElementsByTagName("p")[paragraph].innerHTML += txt.charAt(i);

            if (paragraph != 0) {
                if (txt.charAt(i) == " "){
                    sSound = Math.floor(Math.random() * 3);
                    var type = new Audio('audio/s'+sSound+'.mp3');
                    type.volume = 0.1;
                    type.loop = false;
                    type.play();
                } else if (!(txt.charAt(i) == ".")) {
                    sound = Math.floor(Math.random() * 6);
                    var type = new Audio('audio/'+sound+'.mp3');
                    type.volume = 0.17;
                    type.loop = false;
                    type.play();
                }
            }

        }
        if (paragraph == 2) {
            changeImage();
        }
        if (paragraph == 10) {
            changeImage();
        }
        i++;
        if (paragraph >= 16 && paragraph < 19) {
            var list = document.getElementsByTagName("li")[paragraph-16];
            list.style.visibility = "visible";
        }

        if (paragraph >= 18 && paragraph < 20) {
            var link = document.getElementsByTagName("a")[paragraph-18];
            link.style.visibility = "visible";
        }
            
            
        
        setTimeout(typeWriter, speed);
    } else {
        document.getElementsByTagName("p")[paragraph].style.borderRight = "none";
        paragraph++;
        i = 0;
        start();
    }

}
        
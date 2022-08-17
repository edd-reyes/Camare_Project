var width = 395;
var difference = 2;
var intervalId = 0;

function increase() {
    intervalId = setInterval(zoomIn, 20);
}

function zoomIn() {
    if(width <= 420) {
        width = width + difference;
        document.getElementById("wed1").style.width=width;
    } else {
        clearInterval(intervalId);
    }
}


// const increase = () => {
//     intervalId = setInterval(zoomIn, 20);
// }

// const zoomIn = () => {
//     if(width < 450) {
//         width += difference;
//         document.getElementById('wed1').style.width = width;
//     } else {
//         clearInterval(intervalId);
//     }
// }

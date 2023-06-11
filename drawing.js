const BACKGROUND_COLOR = 'black';
var currentx = 0;
var currenty = 0;
var previousx = 0;
var previousy = 0;

var context;
var canvas;
function prepareCanvas() {
    // console.log('preparing Canvas');
    canvas = document.getElementById('canva')
    context = canvas.getContext('2d');
    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    context.strokeStyle = 'white';
    context.lineWidth = 15;
    context.lineJoin = 'round';

    var isClick = false;

    document.addEventListener('mousedown', function (event) {
        isClick = true;
        currentx = event.clientX - canvas.offsetLeft;
        currenty = event.clientY - canvas.offsetTop;
    });
    document.addEventListener('mousemove', function (event) {
        if (isClick) {
            previousx = currentx;
            currentx = event.clientX - canvas.offsetLeft;

            previousy = currenty;
            currenty = event.clientY - canvas.offsetTop;

            context.beginPath();
            context.moveTo(previousx, previousy);
            context.lineTo(currentx, currenty);
            context.closePath();
            context.stroke();
        }

    });

    document.addEventListener('mouseup', function (event) {
        isClick = false;
    });
    canvas.addEventListener('mouseleave', function (event) {
        isClick = false;
    });

    canva.addEventListener('touchstart', function (event) {
        isClick = true;
        currentx = event.touches[0].clientX - canvas.offsetLeft;
        currenty = event.touches[0].clientY - canvas.offsetTop;
    });

    canva.addEventListener('touchmove', function (event) {
        if (isClick) {
            previousx = currentx;
            previousy = currenty;
            currentx = event.touches[0].clientX - canvas.offsetLeft;
            currenty = event.touches[0].clientY - canvas.offsetTop;
            context.beginPath();
            context.moveTo(previousx, previousy);
            context.lineTo(currentx, currenty);
            context.closePath();
            context.stroke();
        }
    });

    canva.addEventListener('touchend', function (event) {
        isClick = false;
    });
    canva.addEventListener('touchcancel', function (event) {
        isClick = false;
    });


}

function clearCanvas() {
    currentx = 0;
    currenty = 0;
    previousx = 0;
    previousy = 0;
    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}
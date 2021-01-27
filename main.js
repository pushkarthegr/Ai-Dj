sound = "";
sound2 = "";
function preload(){
    sound = loadSound("music.mp3");
    sound2 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(350,350);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,350,350);
}

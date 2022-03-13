song = "";
scoreleftwrist = 0;
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
function preload(){
song = loadSound("music.mp3");
}

function setup(){
canvas = createCanvas(600, 500);
canvas.position(660, 300);
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
} 

function draw(){
image(video, 0, 0, 600, 500);
fill("#FF0000");
stroke("#FF0000");
if(scoreleftwrist > 0.2){
circle(leftwristX, leftwristY, 20);
innumberleftwristY = Number(leftwristY);
remove_decimals = floor(innumberleftwristY);
volume = remove_decimals / 500;
document.getElementById("volume").innerHTMTL = "volume = " + volume;
song.setVolume(volume)
}
}
function Play(){
song.play();
song.setVolume(1);
song.rate(1);
}

function modelLoaded(){
console.log("poseNet is initalized");
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
scoreleftwrist = results[0].pose.keypoints[9].score
leftwristX = results[0].pose.leftWrist.x;
leftwristY = results[0].pose.leftWrist.y;
console.log("leftwristx = " + leftwristX + "leftwristy = " + leftwristY);
rightwristX = results[0].pose.rightWrist.x;
rightwirstY = results[0].pose.rightWrist.y;
console.log("rightwristx = " + rightwristX + "leftwristy = " + leftwristY);
console.log("scoreleftwrist = " + scoreleftwrist)
}
}
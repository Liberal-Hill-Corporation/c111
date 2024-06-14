Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("snapshot").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version', ml5.version);

let classifier;
async function setup() {
    classifier = await ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1VKz6g3fS/model.json', modelLoaded);
}

function modelLoaded() {
    console.log('Model Loaded');
}

setup();

function speak() {
    var synth = window.speechSynthesis;
    var speak_data_1 = "the first prediction is " + prediction_1;
    var speak_data_2 = "the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function start_classification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8h-FECTe7__/model.json', model_ready);
}

function model_ready(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
 if(error){
     console.error(error);
 }
 else{
     console.log(results);
 }
}
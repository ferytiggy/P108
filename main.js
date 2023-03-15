function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/aiqFAlTFJ/model.json",model_ready)
}
function model_ready(){
    classifier.classify(got_result);
}
function got_result(error,results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML= "escucnho: " + results[0].label;
        document.getElementById("result_confidence").innerHTML= "Presición:" + (results[0].confidence).toFixed(2 + "%");
        document.getElementById("result_label").style.color="rgb(" + r +"," + g +"," + b +")";
        document.getElementById("result_confidence").style.color="rgb(" + r +"," + g +"," + b +")";
        img=document.getElementById("lego");
        img2=document.getElementById("pastel");
        img3=document.getElementById("aguacate");
        img4=document.getElementById("muñecodenieve");
        if (results[0].label == "perro") {
            img.src = '1.webp';
            img1.src = '2.png';
            img2.src = '3.png';
            img3.src = '4.png';
          } else if (results[0].label == "Golpes") {
           img.src = '1.png';
            img1.src = '2.gif';
            img2.src = '3.png';
            img3.src = '4.png';
          } else if (results[0].label == "Weee") {
          img.src = '1.png';
            img1.src = '2.png';
            img2.src = '3.gif';
            img3.src = '4.png';
          }else{
            img.src = '1.png';
            img1.src = '2.png';
            img2.src = '3.png';
            img3.src = '4.gif';
          }
      
    }
}
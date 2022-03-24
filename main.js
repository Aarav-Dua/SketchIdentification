function preload(){
    classifier = ml5.imageClassifier("DoodleNet");
    }
    
    
    function setup(){
    Canvas = createCanvas(280, 280);
    Canvas.center();
    background("cyan");
    
    Canvas.mouseReleased(classifyCanvas)
    
    
    synth = window.speechSynthesis;
    
    }
    
    function classifyCanvas(){
    
    classifier.classify(canvas, gotReults)
    
    }
    
    function gotReults(error, results){
    
    if(error){console.error(error)}
    else{console.log(results);
    
    document.getElementById("popoV2").innerHTML = "Label:" +results[0].label;
    document.getElementById("popoV3").innerHTML = "Confidence:" +Math.round(results[0].confidence*100);
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
    
    
    }
    
    }
    
    
    
    
    
    function draw(){
    
    strokeWeight(18);
    
    stroke("yellow");
    
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    
    }
    
    
    }
    
    
    function Madrigal(){
    
    background("cyan");
    }
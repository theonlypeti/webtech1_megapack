let amplitude = 1;
let work = 1;

trace1={
    x: [],
    y: [],
    type: 'scatter',
    line: {
        color: 'rgba(253,96,178,1)',
        width: 3
    },
    name : 'Sinus'
};

trace2={
    x: [],
    y: [],
    type: 'scatter',
    line: {
        color: 'rgb(76,226,245,1)',
        width: 3
    },
    name: 'Cosinus'
}


let numberGenerator = new EventSource("https://iolab.sk/evaluation/sse/sse.php");
numberGenerator.addEventListener("message",(event) => {
    let data = JSON.parse(event.data);
    if(work){
        trace1.y.push(data.y1 * amplitude);
        trace2.y.push(data.y2 * amplitude);
        trace1.x.push(data.x);
        trace2.x.push(data.x);
        Plotly.newPlot(graf, graph,{responsive:true});}

})

graf = document.getElementById('graf');
graph = [trace1,trace2]
Plotly.newPlot(graf, graph,{responsive:true});

function stopPlot(){
    work = 0;
    document.getElementById("pausebutton").setAttribute("disabled","true");
    //work = !work;
    //document.getElementById("pausebutton").innerHTML = work?"Pause":"Unpause";
}

function swapInputs(){
    a = document.getElementsByClassName("hiddenInput")[0];
    document.getElementsByClassName("visibleInput")[0].classList = ["hiddenInput inputField"];
    a.classList = ["visibleInput inputField"];

    document.getElementsByTagName("sample-component")[0].shadowRoot.getElementById("slider").value = amplitude;
    document.getElementsByTagName("sample-component")[0].update()

    document.getElementById("numberInput").value = amplitude; //asi je lepsi napad updateovat iba pri swapu a nie pri kazdom value change
}

function numberInput(){
    amplitude = document.getElementById("numberInput").value;
    //updateValues(); /boze ja som si myslel ze vsetky treba zmenit amplitudou
}

function changeVisibility(){
    trace1.line = {
        color: 'rgba(0,0,0,0)',
        width: 0
    };
    trace1.name = '';
    trace2.line = {
        color: 'rgba(0,0,0,0)',
        width: 0
    };
    trace2.name = '       ';

    if(document.getElementById("trace1check").checked){
        trace1.line = {
            color: 'rgba(253,96,178,1)',
            width: 3
        };
        trace1.name = 'Sinus';
    }
    if(document.getElementById("trace2check").checked){
        trace2.line = {
            color: 'rgb(76,226,245,1)',
            width: 3
        };
        trace2.name = 'Cosinus';
    }
    Plotly.newPlot(graf, graph,{responsive:true});
}

/*function update(){ //na TOTO by som akoze mal prist sam!!?!?
    var off = slider.offsetWidth / (parseInt(slider.max) - parseInt(slider.min));
    let px = ((slider.valueAsNumber - parseInt(slider.min)) * off) - (sliderValue.offsetWidth / 2) + 60;
    sliderValue.innerHTML = "<b>"+slider.value+"</b>";
    sliderValue.parentElement.style.left = px + 'px';
}*/

//var slider = document.querySelector('#slider');
//var sliderValue = document.querySelector('#sliderValue');
//var off = slider.offsetWidth / (parseInt(slider.max) - parseInt(slider.min));
//var px =  ((slider.valueAsNumber - parseInt(slider.min)) * off) - (sliderValue.offsetParent.offsetWidth / 2);
//update();

//window.addEventListener('resize', function(event) {
//    update();
//}, true);

//slider.oninput =function(){}
    //update();
    //amplitude = document.getElementById("slider").value;
    //document.getElementById("numberInput").value = amplitude;}
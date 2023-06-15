class SampleComponent extends HTMLElement {

    connectedCallback() { //toto sa zavola ak sa element objavi na stranke
        this.attachShadow({mode: 'open'}); //shadow je na to aby sa nemohlo potom editovat niekym inym nejakym skriptom

        this.shadowRoot.innerHTML = `<style>
.sliderHandle{
     position:absolute;
     color: #f805f0;
     border:1px solid #4ce2f5;
     min-width:30px;
     pointer-events: none;
     background-color: #4ce2f5;
        }
        
         .handleValue{
     display: flex;
     justify-content: center;
        }</style>
        <div class="inputField visibleInput">
        <span class="sliderHandle">
            <span id="sliderValue" class="handleValue"></span>
        </span>
            <input style="width:100%" type="range" id="slider" max=`+this.getAttribute("max")+` min=`+this.getAttribute("min")+` value="1">
        </div>`

        this.shadowRoot.getElementById('slider').addEventListener("input",event => this.valueChange(event)); //man believe me i tried to hodit len do button onclicku ale neviem spojazdnit bez event listeneru
        var toto = this; //preboha
        window.addEventListener('resize', function(event) {
            toto.update();}, true);
        this.update()
    }

    valueChange(event){ //na TOTO by som akoze mal prist sam!!?!?
        this.update();
        amplitude = event.target.value;
        //document.getElementById("numberInput").value = amplitude;
    }
    update(){
        var slider = this.shadowRoot.querySelector('#slider'); //musim to hodit sem lebo ak dam iba do connectedcallbacku tak nefunguje
        var sliderValue = this.shadowRoot.querySelector('#sliderValue');

        var off = slider.offsetWidth / (parseInt(slider.max) - parseInt(slider.min));
        // var off = 1
        let px = ((slider.valueAsNumber - parseInt(slider.min)) * off) - (sliderValue.offsetWidth / 2) + 120;
        sliderValue.innerHTML = "<b>"+slider.value+"</b>";
        sliderValue.parentElement.style.left = px + 'px';
    }
}

if (!customElements.get('sample-component')) {
    ( customElements.define('sample-component', SampleComponent)); //registruje klasu SampleComponent z js, ako html element s menom sample-component

}
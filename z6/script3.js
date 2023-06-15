const template = document.createElement("template");
template.innerHTML =
    `<style>
        .web-component{
        display:flex;
        /*justify-content:center;*/
    }

    .handleValue{
            display:flex;
            position:absolute;
            color: #f805f0;
            left: 10px;
            border:1px solid #4ce2f5;
            min-width:50px;
            min-height:30px;
            pointer-events: none;
            background-color: #4ce2f5;
            transform: translate(0,  11px);
        }

        input[type=range] {
        height: 32px;
        -webkit-appearance: none;
        margin: 10px 0;
        width: 100%;
    }
        input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 16px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000;
        background: #B6B6B6;
        border-radius: 25px;
        border: 1px solid #8A8A8A;
    }
        input[type=range]::-webkit-slider-thumb {
        box-shadow: 1px 1px 1px #828282;
        border: 1px solid #8A8A8A;
        height: 24px;
        width: 35px;
        border-radius: 6px;
        background: #DADADA;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -5px;

    }

    </style>
<div class = "web-component">
    <h3></h3>


    <span id="sliderValue" class="handleValue"></span>

    <input type = "range" style="width:50%" class="myslider" id="sliderRange" step ="1" value="1">
</div>`

class Amplitude extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("input").min = this.getAttribute("min");
        this.shadowRoot.querySelector("input").max = this.getAttribute("max");
        let sliderValue = this.shadowRoot.querySelector("input");
        let sliderHandle = this.shadowRoot.querySelector("span");
        sliderHandle.innerHTML = sliderValue.value;
        sliderValue.oninput = function(){
            sliderHandle.innerHTML = sliderValue.value;
            sliderHandle.style.left = sliderValue.value * 3 + 10 + "px";
        }


    }
}

window.customElements.define("web-component", Amplitude);

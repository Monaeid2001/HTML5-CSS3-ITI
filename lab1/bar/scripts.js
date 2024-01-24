document.addEventListener("DOMContentLoaded", function () {
    const textbox = document.getElementById("slidertextbox");
    const slider = document.getElementById("myRange");
    const sliderval = document.getElementById("sliderval");
    const progress = document.getElementById("myProgress");
    const progVal = document.getElementById("progval");

    function validateNumberRange(input) {
        const value = parseInt(input.value);
        if (isNaN(value) || value < 1 || value > 8) {
            input.value = "";
        } else {
            fixSlider(value);
            updateProgress(value);
        }
    }

    function fixSlider(val) {
        slider.value = val;
        sliderval.innerText = val;
    }

    function updateProgress(value) {
        progress.value = value * 10;
        progVal.innerText = `${value * 10}%`;
    }

    slider.addEventListener("input", function () {
        textbox.value = this.value;
        sliderval.innerText = this.value;
        updateProgress(this.value);
        console.log(textbox);
    });

    textbox.addEventListener("input", function () {
        validateNumberRange(this);
    });
});
////
function updateSliderAndProgress(input) {
    const sliderValue = parseInt(input.value);
    const progress = document.getElementById("myProgress");
    const progVal = document.getElementById("progval");

    if (!isNaN(sliderValue)) {
        document.getElementById("myRange").value = sliderValue;
        document.getElementById("sliderval").innerText = sliderValue;

        progress.value = sliderValue * 10;
        progVal.innerText = `${sliderValue * 10}%`;
    }
}
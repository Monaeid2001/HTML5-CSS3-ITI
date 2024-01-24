
const redSlider = document.getElementById("redRange");
const greenSlider = document.getElementById("greenRange");
const blueSlider = document.getElementById("blueRange");

const redVal = document.getElementById("redVal");
const greenVal = document.getElementById("greenVal");
const blueVal = document.getElementById("blueVal");

const texttbc = document.getElementById("tbc");

function updateColor() {
    const red = redVal.innerHTML;
    const green = greenVal.innerHTML;
    const blue = blueVal.innerHTML;

    texttbc.style.color = `rgb(${red}, ${green}, ${blue})`;
}

redSlider.addEventListener("input", function() {
    redVal.innerHTML = this.value;
    updateColor();
});

greenSlider.addEventListener("input", function() {
    greenVal.innerHTML = this.value;
    updateColor();
});

blueSlider.addEventListener("input", function() {
    blueVal.innerHTML = this.value;
    updateColor();
});

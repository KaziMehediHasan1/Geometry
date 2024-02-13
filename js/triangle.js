function calculateTriangleArea (){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);

    // get height value..

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightValue =  triangleHeightInput.value;
    const height = parseFloat(triangleHeightValue);
    const result = 0.5 * base * height;
    console.log(result);
}

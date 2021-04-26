function getAreaOfCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}
function getCircumferenceOfCircle(radius) {
    return (2 * radius) * Math.PI;
}
function getAreaOfSquare(side) {
    return Math.pow(side, 2);
}
function getAreaOfTriangle(base, height) {
    return (base * height) / 2;
}
console.log(getAreaOfCircle(20));
console.log(getCircumferenceOfCircle(14));
console.log(getAreaOfSquare(43));
console.log(getAreaOfTriangle(10, 32));
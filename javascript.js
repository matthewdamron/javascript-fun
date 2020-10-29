window.addEventListener("load", resetFun);
var shapeWidth = 150;
var shapeHeight = 150;
var fadeValue = 0.5;

function growFun() {
    if (shapeWidth < 650 && shapeHeight < 650) {
        shapeWidth = shapeWidth + 150;
        shapeHeight = shapeHeight + 150;
        document.getElementById("shape").style.width = shapeWidth + "px";
        document.getElementById("shape").style.height = shapeHeight + "px";
        document.getElementById("buttonClicked").innerHTML = "Shape size has grown by 150px."
    } else {
        alert("Shape can't grow anymore.")
        document.getElementById("buttonClicked").innerHTML = "Shape can't grow anymore."
    }
}

function shrinkFun() {
    if (shapeWidth > 150 && shapeHeight > 150) {
        do {
            shapeWidth = shapeWidth - 150;
            shapeHeight = shapeHeight - 150;
            document.getElementById("shape").style.width = shapeWidth + "px";
            document.getElementById("shape").style.height = shapeHeight + "px";
            document.getElementById("buttonClicked").innerHTML = "Shape size has shrunk by 150px."
        } while (shapeWidth < 150 && shapeHeight < 150);
    } else {
        alert("Shape can't shrink anymore.")
        document.getElementById("buttonClicked").innerHTML = "Shape can't shrink anymore."
    }
}

function blueFun() {
    document.getElementById("shape").style.backgroundColor = "blue";
    document.getElementById("buttonClicked").innerHTML = "Shape color has changed to blue."
}

function fadeValueFun() {
    fadeValue = document.getElementById("fadeRange").value;
    document.getElementById("fadeValue").innerHTML = fadeValue;
}

function fadeFun() {
    document.getElementById("shape").style.opacity = fadeValue;
    document.getElementById("buttonClicked").innerHTML = "Shape opacity has changed to " + fadeValue + ".";
}

function squareFun() {
    if (document.getElementById("shape").style.borderRadius == "0%") {
        document.getElementById("buttonClicked").innerHTML = "Shape is already a Square."
    } else {
        document.getElementById("shape").style.borderRadius = "0%";
        // document.getElementById("shape").style.borderLeft = "0px";
        // document.getElementById("shape").style.borderRight = "0px";
        document.getElementById("buttonClicked").innerHTML = "Shape has changed to a Square!"
    }
}

function circleFun() {
    if (document.getElementById("shape").style.borderRadius == "50%") {
        document.getElementById("buttonClicked").innerHTML = "Shape is already a Circle."
    } else {
        document.getElementById("shape").style.borderRadius = "50%";
        // document.getElementById("shape").style.borderLeft = "0px";
        // document.getElementById("shape").style.borderRight = "0px";
        document.getElementById("buttonClicked").innerHTML = "Shape has changed to a Circle!"
    }
}

// function trapezoidFun() {
//     document.getElementById("shape").style.borderBottom = "50px solid #555";
//     document.getElementById("shape").style.borderLeft = "25px solid transparent";
//     document.getElementById("shape").style.borderRight = "25px solid transparent";
//     document.getElementById("shape").style.height = "0px";
//     document.getElementById("shape").style.width = "125px";
// }

function resetFun() {
    shapeWidth = 150;
    shapeHeight = 150;
    document.getElementById("shape").style.width = shapeWidth + "px";
    document.getElementById("shape").style.height = shapeHeight + "px";
    document.getElementById("shape").style.margin = "25px";
    // document.getElementById("shape").style.borderLeft = "0px";
    // document.getElementById("shape").style.borderRight = "0px";
    document.getElementById("shape").style.backgroundColor = "orange";
    document.getElementById("shape").style.opacity = "1";
    document.getElementById("shape").style.borderRadius = "0%";
    document.getElementById("fadeValue").innerHTML = fadeValue;
    document.getElementById("buttonClicked").innerHTML = "Shape has been reset to it original state."
}
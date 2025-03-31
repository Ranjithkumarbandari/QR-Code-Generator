let qrcode;
let h =128;
let w =128;

function Sizechange(){
    let sizeValue = document.getElementById("size").value.split("x");
    h = parseInt(sizeValue[0]);
    w = parseInt(sizeValue[1]);
    generate();
}
// Generate the QR Code
function generate() {
    let input = document.getElementById("text").value;
    
    if (input === "") {
        alert("Please enter some text or URL to generate the QR code.");
        return;
    }

    // Clear any existing QR code
    document.getElementById("qrcode").innerHTML = "";

    qrcode = new QRCode(document.getElementById("qrcode"), {
        text: input,
        width: w,
        height: h,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}


// Download the QR Code as an image
function download() {
    if (!qrcode) {
        alert("Please generate a QR code first.");
        return;
    }

    // Get the canvas element of the QR code
    const canvas = document.querySelector("#qrcode canvas");
    if (canvas) {


        // Create a temporary link element to download the image
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "qrcode.png";
        link.click();
    }
}
let indexSlide = 1; // [0, 1, 2, ...]
showSlide(1); 

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName("slidebanner-content"); 
    if (n > listImage.length) indexSlide = 1; // Reset Index Banner
    
    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = "none"; // Menyembunyikan seluruh gambar
        index++;
    }

    listImage[indexSlide -1].style.display = "block"; // Menampilkan hanya 1 gambar

    console.log("jumlah gambar " + listImage.length);
    console.log("indexSlide " + indexSlide);
}

setInterval (() => nextSlide(1), 5000); // Dalam milisecond

function submitForm() {
    let form = document.forms["message-form"];
    let yourName = form["nama"].value;
    let yourEmail = form["email"].value;
    let yourRegion = form["domisili"].value;
    let yourPackage = form["perawatan"].value;

    if (yourName == "" || yourEmail == "" || yourRegion == "" || yourPackage == ""){
        alert("Please fill the blank space")
    } else {
        alert("Thankyou for submitting " + yourName)
    }

    console.log(form);
    console.log(yourName);
    console.log(yourEmail);
    console.log(yourRegion);
    console.log(yourPackage);
}

document.getElementById("submit-button").addEventListener("click", () => submitForm());
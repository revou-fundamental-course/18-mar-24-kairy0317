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
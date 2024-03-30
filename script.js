// JavaScript untuk semua halaman

document.addEventListener("DOMContentLoaded", function() {
    // Fungsi untuk kembali ke menu utama
    var goToMainLinks = document.querySelectorAll("#goToMain");
    goToMainLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Mencegah perilaku default dari tautan
            window.location.href = "persona5royal.html";
        });
    });
});
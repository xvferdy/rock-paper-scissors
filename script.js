//function global yang akan dipanggil di dlm function untuk dijadikan variabel
//function pilihan komputer
//function mengembalikan sebuah nilai (disimpan)
function getpilihankomputer() {
    var comp = Math.random();
    if (comp < 0.34) return 'gunting';
    if (comp >= 0.34 && comp < 0.67) return 'batu';
    return 'kertas';
}

//function global yang akan dipanggil di dlm function untuk dijadikan variabel
//function aturan
//menggunakan operator conditional
//function mengembalikan sebuah nilai (disimpan)
function getHasil(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'gunting') return (comp == 'kertas') ? 'MENANG!' : 'KALAH!';
    if (player == 'batu') return (comp == 'kertas') ? 'KALAH!' : 'MENANG!';
    if (player == 'kertas') return (comp == 'gunting') ? 'KALAH!' : 'MENANG!';
}

//event
//menangkap element

var imgComputer = document.querySelector('.img-komputer');
var info = document.querySelector('.info');
var pilihan = document.querySelectorAll('li img');
// //jalankan event
pilihan.forEach(function (i) {
    i.addEventListener('click', function () {
        var pilihanKomputer = getpilihankomputer()
        var pilihanPlayer = i.className;
        var hasil = getHasil(pilihanKomputer, pilihanPlayer);
        imgComputer.setAttribute('src', 'images/' + pilihanKomputer + '.PNG');
        info.classList.add('animated', 'bounceIn');
        info.addEventListener('animationend', function () {
            doSomething();
        });

        info.innerHTML = hasil;
    })
});

//reset class's animation
function doSomething() {
    info.classList.remove('animated', 'bounceIn');
}

//untuk mousedown mouseup opacity
var pilihanHover = document.querySelectorAll('li');
pilihanHover.forEach(function (i) {
    i.addEventListener('mousedown', function () {
        i.classList.add('playing');
    });

    i.addEventListener('mouseup', function () {
        i.classList.remove('playing');
    });
});
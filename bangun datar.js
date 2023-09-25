//variable id ke js
const Container = document.getElementById("container")
const Input_button = document.getElementById("input-add")
const Box_input = document.getElementById("box")
const Soal_input = document.getElementById("soal")

// inputan
function input(){

    if (Input_button.value == "Persegi"){
          luas_persegi()
    }
    else if (Input_button.value == "Lingkaran"){
          luas_lingkaran()
    }
    else if (Input_button.value == "Segitiga"){
          luas_segitiga()
    }
    else if (Input_button.value == "Persegi Panjang"){
        luas_persegipanjang()
    }
    else if (Input_button.value == "Jajar Genjang"){
        luas_jajargenjang()
    }
    else if (Input_button.value == "Trapesium"){
        luas_trapesium()
    }
    else if (Input_button.value == "Belah Ketupat"){
        luas_belahketupat()
    }
    else if (Input_button.value == "Layang-Layang"){
        luas_layang2()
    }
    else (
        alert("Harus input sesuai bangun datar yang ada dan ketikan harus bener2 sesuai dengan yang ada di daftar!")
    )
    Input_button.value = ""
}

//enter
Input_button.addEventListener('keydown',function(enter){
    if (enter.key === "Enter"){
        enter.preventDefault()
        input()
        Input_button.value = null
    }
})

//rumus luas bangun datar
function luas_lingkaran(r) {
    const newDiv2 = document.createElement("div")

    r = parseFloat(prompt("Masukkan jari2 lingkaran!"))
    const jari2 = 22/7*r**2
    
    const newContent2 = document.createTextNode('Luas lingkaran tersebut adalah '+jari2)
    newDiv2.appendChild(newContent2)

    const currentDiv2 = document.getElementById("div1")
    currentDiv2.innerHTML='';

    currentDiv2.appendChild(newDiv2)
    Input_button.value = '';

    if (isNaN (r)){
        alert("Harus di isi angka!")
    }
    return
    
  }


function luas_segitiga(a,t) {
    //menambahkan class element baru
    const newDiv1 = document.createElement("div")

    a = parseFloat(prompt("Masukkan alas segitiga!"))
    t = parseFloat(prompt("Masukkan tinggi segitiga!"))
    const luas_s = 1/2*a*t
    
    //untuk memunculkan tulisan apa yang kita tulis di web/DOM
    const newContent1 = document.createTextNode("Luas segitiga tersebut adalah "+luas_s)
   

    //menambahkan tulisan yang kita tulis di element baru
    newDiv1.appendChild(newContent1)
    
    //memanggil id dari css 
    const currentDiv1 = document.getElementById("div1")
    currentDiv1.innerHTML = ''; //kosongkan element sebelum menambahkan yang baru

    //menambahkan element baru yang dibuat di markas id yang ditetapkan/DOM
    currentDiv1.appendChild(newDiv1)
    Input_button.value = '';

    if (isNaN (a) || isNaN (t)){
        alert("Harus di isi angka!")
    }
    return
    

  }

function luas_persegi(s) {
    const newDiv = document.createElement("div")

    s = parseFloat(prompt("Masukkan sisi Persegi!"))
    const result = s*s;

    const newContent = document.createTextNode('Luas persegi tersebut adalah '+result)
    newDiv.appendChild(newContent)

    const currentDiv = document.getElementById("div1")
    currentDiv.innerHTML='';
    currentDiv.appendChild(newDiv)

    Input_button.value = '';

    if (isNaN (s) || isNaN (s1)){
        alert("Harus di isi angka!")
    }
    return

  }
function luas_persegipanjang(s1,s2) {
    const newDiv4 = document.createElement("div")

    s1 = parseFloat(prompt("Masukkan sisi 1 Persegi panjang!"))
    s2 = parseFloat(prompt("Masukkan sisi 2 Persegi panjang!"))
    const result = s1*s2;

    const newContent4 = document.createTextNode('Luas persegi panjang tersebut adalah '+result)
    newDiv4.appendChild(newContent4)

    const currentDiv4 = document.getElementById("div1")
    currentDiv4.innerHTML='';
    currentDiv4.appendChild(newDiv4)

    Input_button.value = '';

    if (isNaN (s1) || isNaN (s2)){
        alert("Harus di isi angka!")
    }
    return

  }
function luas_jajargenjang(aj,tj) {
    const newDiv5 = document.createElement("div")

    aj = parseFloat(prompt("Masukkan alas jajar genjang!"))
    tj = parseFloat(prompt("Masukkan tinggi jajar genjang!"))
    const Luas = aj*tj;

    const newContent5 = document.createTextNode('Luas jajar genjang tersebut adalah '+Luas)
    newDiv5.appendChild(newContent5)

    const currentDiv5 = document.getElementById("div1")
    currentDiv5.innerHTML='';
    currentDiv5.appendChild(newDiv5)

    Input_button.value = '';

    if (isNaN (aj) || isNaN (tj)){
        alert("Harus di isi angka!")
    }
    return

  }
function luas_trapesium(at,bt,tt) {
    const newDiv6 = document.createElement("div")

    at = parseFloat(prompt("Masukkan sisi sejajar 1 trapesium !"))
    bt = parseFloat(prompt("Masukkan sisi sejajar 2 trapesium !"))
    tt = parseFloat(prompt("Masukkan tinggi trapesium!"))
    const L = 1/2 * (at + bt) * tt

    const newContent6 = document.createTextNode('Luas trapesium tersebut adalah '+L)
    newDiv6.appendChild(newContent6)

    const currentDiv6 = document.getElementById("div1")
    currentDiv6.innerHTML='';
    currentDiv6.appendChild(newDiv6)

    Input_button.value = '';

    if (isNaN (at) || isNaN (bt) || isNaN (tt)){
        alert("Harus di isi angka!")
    }
    return

  }
function luas_belahketupat(d1,d2) {
    const newDiv7 = document.createElement("div")

    d1 = parseFloat(prompt("Masukkan diagonal 1 belah ketupat!"))
    d2 = parseFloat(prompt("Masukkan diagonal 2 belah ketupat!"))
    const Luas_K = 1/2 * d1 * d2

    const newContent7 = document.createTextNode('Luas belah ketupat tersebut adalah '+Luas_K)
    newDiv7.appendChild(newContent7)

    const currentDiv7 = document.getElementById("div1")
    currentDiv7.innerHTML='';
    currentDiv7.appendChild(newDiv7)

    Input_button.value = '';

    if (isNaN (d1) || isNaN (d2)){
        alert("Harus di isi angka!")
    }
    return

  }
function luas_layang2(d1_l,d2_l) {
    const newDiv8 = document.createElement("div")

    d1_l = parseFloat(prompt("Masukkan diagonal 1 layang-layang!"))
    d2_l = parseFloat(prompt("Masukkan diagonal 2 layang-layang!"))
    const Luas_L = 1/2 * d1_l * d2_l

    const newContent8 = document.createTextNode('Luas layang-layang tersebut adalah '+Luas_L)
    newDiv8.appendChild(newContent8)

    const currentDiv8 = document.getElementById("div1")
    currentDiv8.innerHTML='';
    currentDiv8.appendChild(newDiv8)

    Input_button.value = '';

    if (isNaN (d1_l) || isNaN (d2_l)){
        alert("Harus di isi angka!")
    }
    return

  }

  


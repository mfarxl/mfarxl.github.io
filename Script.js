document.getElementById("mfaril").innerHTML = "Welcome to My Private Room!";



function cekPassword() {
    let password = document.getElementById("password").value;

    if (password == "Eccedentediast") {
        window.location.href = "Halaman/Index.html";
    } else {
        alert("Password salah!");
    }
}

window.onload = function() {
  const images = [
    "animasi1.png",
    "animasi2.png",
    "animasi3.png",
    "animasi4.png",
    "animasi5.png"
  ];

  let index = 0;
  const slide = document.getElementById("slide");

  setInterval(() => {
    index++;
    if (index >= images.length) {
      index = 0;
    }
    slide.src = images[index];
  }, 500);
}
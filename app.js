if(location.search.includes("port:186092")){  
 location.search = "?port=186092";
}
  
else if (location.search.includes("port=186092")) {  
function whatsappYonlendir() {
 setTimeout( () => { location.href = "https://wa.me/905468151446?text=Merhaba%2C%20size%20web%20sayfanızdan%20ulaştım.";
 },250)
}

let guncelYil = new Date().getFullYear();

document.querySelector("#copyright").innerText = `© ${guncelYil} Onur Oto Kurtarma — Tüm Hakları Saklıdır.`;


document.querySelectorAll("img").forEach(
  (foto) => {
    foto.addEventListener("error", () => {
      foto.style.display = `none`;
    });
  });
  
document.querySelector(".foto2").addEventListener("dblclick", () => {
  alert("Ne yapmaya çalışıyorsun?")
});
}
else {
  document.title = `Err: ${location.host} Bağlanmayı reddetti.`;
  document.body.style.background = "white";
  document.body.innerHTML = `<b style="color: red">Hata:</b> <br/>
  ${location.host} Bağlanmayı reddetti.`;
  document.body.style.background = "white";
  document.body.style.color = "black";
  document.body.style.textAlign = "center";
  
}

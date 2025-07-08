function startSlotGame() {
  const audio = document.getElementById("clickSound");
  audio.currentTime = 0;
  audio.play();

  alert("Slot oyununa giriliyor... (buraya yönlendirme eklenebilir)");
  // İleride burada slot oyun sayfasına yönlendirme yapılabilir
}

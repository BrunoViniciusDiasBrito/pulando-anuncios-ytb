{
  // variaveis necessarias para criação do botão ignit e estilização dinamica, controle de fluxo
  let ligado = false,
    myInterval,
    ignitBtn = document.createElement("button");
  ignitBtn.innerText = "Jump AD";
  ignitBtn.style.padding = "2% 4%";

  // Capturando o container de botões da barra e inserindo o botão ignit
  const divButtonsYtb = document.querySelector("#buttons");
  divButtonsYtb.insertAdjacentElement("afterEnd", ignitBtn);

  // Função para pular os anuncios
  function jumpAds() {
    let buttonSend = document.querySelector(
        ".ytp-ad-feedback-dialog-confirm-button"
      ),
      itemToCheck = document.querySelector(
        ".ytp-ad-feedback-dialog-reason-input"
      ),
      closeBannerAd = document.querySelector(".ytp-ad-overlay-close-button");

    // Validação da existencia dos Elementos da pagina para a execução
    if (itemToCheck || buttonSend) {
      itemToCheck.setAttribute("checked", "checked");
      buttonSend.click();
    } else if (closeBannerAd) {
      closeBannerAd.click();
    }
  }

  // Mudando o fluxo do processo para encerrar o looping
  function stopJumpsAds(myInterval) {
    clearInterval(myInterval);
  }

  // Botão ignit, inicia e encerra o fluxo da aplicação
  ignitBtn.addEventListener("click", () => {
    ligado = !ligado;

    if (ligado) {
      myInterval = setInterval(jumpAds, 1000);
      ignitBtn.classList.add("actived");
      console.log("Running Jump AD...");
    } else {
      stopJumpsAds(myInterval);
      ignitBtn.classList.remove("actived");
      console.log("Not Running!");
    }
  });
}

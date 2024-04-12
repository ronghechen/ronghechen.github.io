window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitioned", () => {
    document.body.removeChild("loader");
  })
})

window.addEventListener("loadingScreen", () => {
  const loaderWrapper = document.querySelector(".loader-wrapper");
  loaderWrapper.classList.add("loader-wrapper-hidden");
  loaderWrapper.addEventListener("transitioned", () => {
    document.body.removeChild("loaderWrapper");
  })
})

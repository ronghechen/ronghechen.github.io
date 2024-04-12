window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  const loaderWrapper = document.querySelector(".loader-wrapper");
  loader.classList.add("loader-hidden");
  loaderWrapper.classList.add("loader-wrapper-hidden");
  loader.addEventListener("transitioned", () => {
    document.body.removeChild("loader");
  })
  loaderWrapper.addEventListener("transitioned", () => {
    document.body.removeChild("loaderWrapper");
  })
})

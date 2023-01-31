;(() => {
  // const modal = document.querySelector(".modal")
  // const bg = document.querySelector(".bg")
  // const form = document.querySelector(".form")
  // bg.addEventListener("click", () => {
  //   console.log("bg")
  //   modal.style.display = "none"
  // })
  // form.addEventListener("click", () => {
  //   console.log("form")
  // })

  const tabs = document.querySelectorAll(".tab-item")

  for (const tab of tabs) {
    tab.addEventListener("click", (e) => {
      removeActive()
      e.currentTarget.classList.add("active")
    })
  }

  function removeActive() {
    for (const tab of tabs) {
      tab.classList.remove("active")
    }
  }
})()

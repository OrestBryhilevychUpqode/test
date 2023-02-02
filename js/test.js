;(() => {
  const modal = document.querySelector(".modal")
  const bg = document.querySelector(".bg")
  const form = document.querySelector(".form")
  const html = document.querySelector("html")

  bg.addEventListener("click", () => {
    console.log("bg")
    modal.style.display = "none"
    html.classList.remove("no-scroll")
  })

  form.addEventListener("click", () => {
    console.log("form")
  })

  const tabs = document.querySelectorAll(".js-tab-item")

  for (const tab of tabs) {
    tab.addEventListener("click", (e) => {
      removeActive()
      e.currentTarget.classList.add("active")
      modal.style.display = "flex"
      html.classList.add("no-scroll")
    })
  }

  function removeActive() {
    const newTabs = document.querySelectorAll(".js-tab-item")
    for (const tab of newTabs) {
      tab.classList.remove("active")
    }
  }
})()

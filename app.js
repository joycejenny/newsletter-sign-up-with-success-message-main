const main_Form = document.querySelector(".main-container");
const subscribe_Btn = document.getElementById("subscribeBtn");
const dismiss_btn = document.getElementById("dismiss-btn");
const thank_Section = document.querySelector(".second");

subscribe_Btn.addEventListener("click", () => {
    main_Form.classList.add("hidden");
    thank_Section.classList.remove("hidden");
})
dismiss_btn.addEventListener("click", () => {
    main_Form.classList.remove("hidden");
    thank_Section.classList.add("hidden");
})

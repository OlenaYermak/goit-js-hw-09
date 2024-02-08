const storageKey = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const inputEmail = document.querySelector("input[autofocus]");
const inputMessage = document.querySelector("textarea");

const submitBtn = document.querySelector("button");



function inputFormData() {
  
    const emailValue = inputEmail.value.trim();
const messageValue = inputMessage.value.trim();
    
    return {
        email: emailValue,
        message: messageValue,
    };
}

form.addEventListener("input", (event) => {
    event.preventDefault();
    const data = inputFormData();
    const dataJson = JSON.stringify(data);

    localStorage.setItem(storageKey, dataJson);

});

document.addEventListener("DOMContentLoaded", () => {
    const storedData = localStorage.getItem("feedback-form-state");

    if (storedData) {
        const dataParsed = JSON.parse(storedData);
        inputEmail.value = dataParsed.email;
        inputMessage.value = dataParsed.message;
    }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = inputFormData();

 
  if (data.email && data.message) {
    console.log(data);

    localStorage.removeItem("feedback-form-state");
  inputEmail.value = "";
   inputMessage.value = "";
  }
});


inputEmail.classList.add("input-style");
inputMessage.classList.add("textarea-style")
submitBtn.classList.add("btn-style");
const labels = document.querySelectorAll("label");

labels.forEach((label) => {
  label.classList.add("label-style");
});







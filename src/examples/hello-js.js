const button = document.getElementById("submitButton");
button.addEventListener("click", () => {
    const input = document.getElementById("nameInput");
    const name = input.value;
    
    alert(`Hello ${name}, hope you're having a great day!`);
});
let input = document.querySelector("input");
let form = document.querySelector("form");

let elem = document.createElement("div");
elem.id = "error";
elem.style.display = "none";
form.appendChild(elem);

let warning = document.querySelector(".warning");
warning.style.display = "none";

form.onsubmit = () => {
    if (input.value === "") {
        elem.textContent = "This field is required.";
        elem.style.display = "block";
        warning.style.display = "block";
        input.className = "invalid";
        return false;
    }
};

input.oninvalid = (e) => {
    e.preventDefault();
    if (!e.target.validity.valid) {
        elem.textContent = "Please provide a valid email.";
        elem.style.display = "block";
        warning.style.display = "block";
        input.className = "invalid";
    }
}; 

input.onclick = () => {
    if (elem.style.display === "block") {
        input.className = "";
        elem.style.display = "none";
        warning.style.display = "none";
    }
};
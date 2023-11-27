let form = document.getElementById('ans-form');
let btnshowForm = document.getElementById("show-form");
console.log(btnshowForm);
console.log(form);

btnshowForm.addEventListener("click", showForm);

function showForm() {
    
    form.style = "display: block";
    e.preventDefault();
}

const inputDate = document.getElementById("DateInput");
const btnConfirm = document.getElementById("orderConfirm");

btnConfirm.addEventListener("click", validateForm);

function validateForm(){
    const dateChecked = validateRequired(inputDate);

    if(dateChecked){
        btnConfirm.disabled = false;
        alert("Votre commande a bien été prise en compte !")
        window.location.replace('/');
    }
    else{
        btnConfirm.disabled = true;
    }
}

function validateRequired(input){
    if(input && input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        if(input){
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
        }
        return false;
    }
}




$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value > 1) {
        value = value - 1;
    } else {
        value = 1;
    }
 
    $input.val(value);
});
 
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value < 5) {
        value = value + 1;
    } else {
        value = 5;
    }
 
    $input.val(value);
});

const formEl = $("#ingredient-form");

function handleFormSubmit(event) {
    event.preventDefault();
    
    let checkedEl = $("input:checked");
    let selected = [];

    $.each(checkedEl, function () {
        selected.push($(this).val())
        
    })
    console.log(selected);

    fetch("/api/results", {
        method: "POST"
    })
    .then(function (response) {
        return response.json();
    })
}


formEl.on("submit", handleFormSubmit);





// const resultsBtn = document.getElementById

// const checkedIngredients = document.getElementsByClassName("form-check")
// console.log(checkedIngredients);

// checkedIngredients.addEventListener("click", event => {
//     event.preventDefault();
    
//     if (checkedIngredients.checked) {
//         console.log(checkedIngredients.value)
//         return(checkedIngredients.value)
//     }
// })



    //How do I grab the user's checked ingredients?


// When the user hits the get recipes button, we need to grab the checked ingredients.
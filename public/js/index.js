const ingFormHandler = async function(event) {
    event.preventDefault();

    let checkedEl = $("input:checked");
    let selected = [];

    $.each(checkedEl, function () {
        selected.push($(this).val())
        
    })

    const apiString =selected.join(",+");
    console.log(apiString);
    

    await fetch(`/api/results`, {
        method: "POST",
        body: JSON.stringify({
            apiString
        }),
        headers: { "Content-Type": "application/json"},
    })
    // console.log(selected)
    document.location.replace("/results");
}

document
    .querySelector("#ingredient-form")
    .addEventListener("submit", ingFormHandler);


module.exports = apiString;

    //How do I grab the user's checked ingredients?


// When the user hits the get recipes button, we need to grab the checked ingredients.
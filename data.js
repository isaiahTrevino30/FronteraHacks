// script.js
document.getElementById("situation-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get user input
    const age = document.getElementById("age").value;
    const concern = document.getElementById("concern").value;
    const children = document.getElementById("children").value;
    let advice = '';

    // Determine advice based on user input
    if (age < 18) {
        advice = "As a young person, focus on your studies and talk to trusted adults about your concerns.";
    } else if (age >= 18 && age < 30) {
        advice = "In your twenties, it's a great time to explore career options. Don't hesitate to network.";
    } else {
        advice = "Consider your long-term goals and seek guidance if needed.";
    }

    // Display the advice based on the concern
    if (concern.toLowerCase().includes("job")) {
        advice += " Consider updating your resume and reaching out to your network.";
    } else if (concern.toLowerCase().includes("relationship")) {
        advice += " Communication is key; try talking openly with the other person.";
    }

    if (children == 0){
        advice += " You have more freedom to experiment with the money you have, you're okay to take chances and be adventurous."
    }
    else{
        advice += " The freedom you have is a lot more limited, depending on your income budgeting might be prefered"
    }

    // Show the advice on the page
    document.getElementById("advice").innerText = advice;
    document.getElementById("advice").style.display = "block";
});

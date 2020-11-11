$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
            firstName: {
                required: true
            },
            grade: {
                required: true,
                min: 5,
                max: 8,
                digits: true
            }

        };

    // Object containing the error messages
    var myMessages =
        {
            firstName: {
                required: "A first name is required!"
            },
            grade: {
                required: "Grade level is required",
                min: "Your child is too young for this camp. Please enroll them in our elementary school coding camp.",
                max: "Your child is too old for this camp. Please enroll them in our High School coding camp,",
                digits: "Enter number in stated range"

            }
        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler:runMyProgram,
            rules: myRules,
            messages: myMessages
        }
    );

    function runMyProgram() {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.
        var name = $("#firstName").val();
        var grade = $("#grade").val();

        $("#message").text(`You have registered ${name} for grade ${grade} camp!`)

    }



});
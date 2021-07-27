//$(function() {}) is the right way. Below is depracated. Document ready to have the code idling for proper html code:
$(document).ready(function() {
    $("#submit").click(function (){
        var loanAmount= $("#loan-amount").val();
        var apr =$("apr").var();

        // .val will grab the value but needs to convert to number
        loanAmount =parseFloat(loanAmout);
        apr= parseFloat(apr);  //should be float, it will continue numbers with decimals

        //calculate the apr with math
        var interestPrice = loanAmount *((apr/100)/12) ;

        interestPrice = interestPrice.toFixed(2);

        var resultsText = "You will owe an extra $" + interestPrice + "after 1 month <br />(Monthly Compounding Interest)";

        $("#result-value").html(resultsText)
    });

});
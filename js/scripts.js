$(document).ready(function() {

  $("#mainform").submit(function(event){
    event.preventDefault();

    // For example, 5! = 5 * 4 * 3 * 2 * 1 = 120.


    var numberArray = [];
    var userInput = parseInt($("#input1").val());
    var total = 1;

    if (userInput > 100) {
      alert("My CPU can't handle that size");
      userInput = 1;
    }

    for (i = 1; i <= userInput; i++) {
      numberArray.push(i);
    }

    for (j = 0; j < numberArray.length; j++) {
      total *= numberArray[j];
      console.log("totalinloop: " , total)
    }

    console.log("total: " , total);

    $(".word-output").show();

    $("#yourStartnum").text("");
    $("#fact").text("");
    $("#yourStartnum").append(userInput);
    $("#fact").append(total);

  });

});

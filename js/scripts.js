$(document).ready(function() {

  $("#mainform").submit(function(event){
    event.preventDefault();
    // factorial example, 5! = 5 * 4 * 3 * 2 * 1 = 120.


    var numberArray = [];
    var userInput = parseInt($("#input1").val());
    var total = 1;

    // check for starting value too high
    if (userInput > 200) {
      alert("My CPU can't handle that size");
      userInput = "-";
      total = "-";
    }

    // WITH RECURSION
    var tmpTotal = 1;
    for (i = 1; i <= userInput; i++) {
      tmpTotal = (tmpTotal * i);
      //show current iteration
      console.log("tmpTotal= " , i);
    }

    // NON RECURSIVE METHOD
    // for (i = 1; i <= userInput; i++) {
    //   numberArray.push(i);
    // }
    //
    // for (j = 0; j < numberArray.length; j++) {
    //   total *= numberArray[j];
    //   console.log("totalinloop: " , total)
    // }

    // console.log("total: " , total);
   console.log("tmptotal: " , tmpTotal);

    //show form
    $(".word-output").show();

    // clear output fields
    $("#yourStartnum").text("");
    $("#fact").text("");

    // output starting and calculated values
    $("#yourStartnum").append(userInput);
    // $("#fact").append(total);
    $("#fact").append(tmpTotal);

  });

});

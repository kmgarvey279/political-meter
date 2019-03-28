$().ready(function(){
  $("form#politicalspectrum").submit(function(event){
    var answer1 = parseInt($("select#question1").val());
    var answer2 = parseInt($("select#question2").val());
    var answer3 = parseInt($("select#question3").val());
    var total = answer1 + answer2 + answer3

    if (total < 0) {
      result = "conservative";
    } else if (total > 0) {
      result = "liberal";
    } else {
      result = "moderate";
    }

    $("#politics").empty().append(result);
    $("#result").show();

      event.preventDefault();
    });
  });

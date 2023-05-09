console.log("this form script is working!");


function postToGoogle() {
  var field1 = $("#asistencia").val();
  var field2 = $("#nombre").val();
  var field3 = $("#apellido").val();

  $.ajax({
    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeuk1op-y0oX3Y5GafElJCZBMqX2Btct8Wg7Bs2MaSYomptFA/formResponse",

    //add your google form generated numbers below which are also the 'names' of your inputs     
    data: {
      "entry.1607674031": field1,
      "entry.1898245126": field2,
      "entry.1212490641": field3
    },
    type: "POST",
    dataType: "xml",
    success: function (d) {
      $('#contact').trigger('reset');
    },
    error: function (x, y, z) {
      $('#contact').trigger('reset');
    }
  });
  return false;
}

// function postToGoogle() {
//   var field1 = $("#asistencia").val();
//   var field2 = $("#nombre").val();
//   var field3 = $("#apellido").val();

//   $.getJSON("https://docs.google.com/forms/u/0/d/e/1FAIpQLSeuk1op-y0oX3Y5GafElJCZBMqX2Btct8Wg7Bs2MaSYomptFA/formResponse?callback=?", {
//     //add your google form generated numbers below which are also the 'names' of your inputs     
//     "entry.1607674031": field1,
//     "entry.1898245126": field2,
//     "entry.1212490641": field3
//   }).done(function (response) {
//     $('#contact').trigger('reset');
//   }).fail(function () {
//     $('#contact').trigger('reset');
//   });

//   return false;
// }

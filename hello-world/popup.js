$(function () {
  $("#greet").text("Welcome stranger");

  $("#name").keyup(function () {
    $("#greet").text("Welcome " + $("#name").val());
    console.log($("#name").val());
  })
})
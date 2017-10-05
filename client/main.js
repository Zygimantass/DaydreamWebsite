var dateformat = require("dateformat");
var $ = require("jquery")

console.log("asd")

const temperatureAPI = "http://192.168.1.25:3001/roomTemperature"

var clock = function() {
  var today = new Date();
  $(".clockText").text(dateformat(today, "isoTime"))
  $(".date").text(dateformat(today, "dS mmmm yyyy"))
}

setInterval(clock, 500)

var temperatureCheck = function () {
  $.get(temperatureAPI, function (res) {
    $(".homeTempText").text("Home temperature - " + res + " C°")
  })
}

temperatureCheck()

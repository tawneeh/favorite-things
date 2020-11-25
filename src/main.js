import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



$(document).ready(function() {
  $("#favForm").submit(function(event) {
    const thing1 = $("input#thing1").val();
    const thing2 = $("input#thing2").val();
    const thing3 = $("input#thing3").val();
    const thing4 = $("input#thing4").val();
    const thing5 = $("input#thing5").val();

    const array = [thing1, thing2, thing3, thing4, thing5];
    const spaces = array.join(", ");
    const first = array[0];
    const second = array[1];
    const third = array[2];
    let newArr = [];
    newArr.push(first, second, third);

    $("#favForm").hide();
    
    $("#output").text(spaces);
    $("#output2").html(`Your top three: <ul>${first}</ul> <ul>${second}</ul> <ul>${third}</ul>`);

    event.preventDefault();
  });
});
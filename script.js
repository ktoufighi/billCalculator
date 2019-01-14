//external javascript file
// **
// Variables
var amount = document.querySelector('#amount');
var people = document.querySelector('#people');
var tip = document.querySelector('#tip');
var owed = document.querySelector('#owed');


// **
// Calculate total amount per person
var CalculatorAmountOwed = function () {
  // console.log(typeof tip.value);
  var tipAmount = parseFloat(tip.value) / 100;
  //adding Math.ceil to people.value obj will round it up incase someone inputs nubmer with deci
  var perPerson = parseFloat(amount.value) / Math.ceil(people.value);
  //adding Math.ceil method here rounds up the amount so we won't leave any change or end up with many decimal places in our calculation.
  var owed = Math.ceil(perPerson + (perPerson * tipAmount));

  return owed;

};
//function to handle the change events in each field and updates the change on the fly!!!
var changeHandler = function(event) {
  //Make sure change field is inside the tip calculator we also need to run a out of a box link in our html file called polyfill that works across different browsers to run this mehtod successfully.
  if (!event.target.closest('.tip-calculator')) return;
  //this way we will update the DOM by using innerHTML method on owed amount
  owed.innerHTML = 'Each person owes $' + CalculatorAmountOwed();
}


// listen for when someting gets added to the input field and update the amount
document.addEventListener('input', changeHandler, false);


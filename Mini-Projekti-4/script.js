function calculateTip() {
    var billAmount = parseFloat(prompt("Put the bill amount here:"));
    var tipPercentage = parseFloat(prompt("THIS IS OPTIONAL Put the tip amount here:", "0"));    
    var tipAmount = (billAmount * tipPercentage) / 100;
    var totalAmount = billAmount + tipAmount;
    return totalAmount;
  }
  
  var total = calculateTip();
  var amount = document.getElementById("amount")
  amount.innerText = (`The Total Amount Including The Tip (if you put the tip percentage) Is $${total}.`);
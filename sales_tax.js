"use strict";
let $ = function(id) {
  return document.getElementById(id);
};
let processEntries = function() {

  let subtotal = parseFloat($("subtotal").value);
  let taxRate = parseFloat($("tax_rate").value);

  if (isNaN(subtotal) || isNaN(taxRate)) {
    alert("Both entries must be numeric");
  } else if (subtotal <= 0 || subtotal >= 10000) {
    alert("Subtotal must be greater than 0 but less than 10,000");
  } else if (taxRate <= 0 || taxRate >= 12) {
    alert("Tax Rate must be greater than 0 but less than 12");
  } else {
    let salesTax = ((taxRate / 100) * subtotal);
    let saleTotal = subtotal + salesTax;

    $('sales_tax').value = parseFloat(salesTax);
    $('total').value = parseFloat(saleTotal);
  }
};

let clear = function() {
  $("subtotal").value = "";
  $("tax_rate").value = "";
  $("sales_tax").value = "";
  $("total").value = "";
  $("subtotal").focus();
};

let clearSubtotal = function() {
  $("subtotal").value = "";
};

let clearRate = function() {
  $("tax_rate").value = "";
};

window.onload = function() {
  $("calculate").onclick = processEntries;
  $("subtotal").focus();
  $("clear").onclick = clear;
  $("subtotal").onclick = clearSubtotal;
  $("tax_rate").onclick = clearRate;

}

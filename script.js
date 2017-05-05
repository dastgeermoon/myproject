function iif()
{

var xx=eval(form2.text1.value);
var yy=eval(form2.text2.value);

	if (xx>0 && xx>yy)
    	{
	form2.text3.value=("Amount1 is greater")
	}
	else
    {
    form2.text3.value=("Amount2 is greater")
    }
}
//------------------------------------------------------------------

function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

//------------------------------------------------------------------

function checkempty()
{
    if(thisform.text1.value.length <= 0)
    {
    alert("Please enter value")
    }
}
//------------------------------------------------------------------
function isNumberKey(evt)
    {
   var charCode = (evt.which) ? evt.which : event.keyCode
     if (charCode > 31 && (charCode < 48     || charCode > 57 || charCode == 110))
{
alert("Only Numbers");      
return false;
}
else
{
   return true;
}
}
//------------------------------------------------------------------
function ischarKey(evt)
    {
   var charCode = (evt.which) ? evt.which : event.keyCode
     if (charCode > 31 && (charCode < 48     || charCode > 57))
{
   return true;
}
else
{
alert("Only Characters");      
return false;
}
}
//------------------------------------------------------------------

function applydeci()
{
num=thisform.text1.value;
result=(parseFloat(num)).toFixed(2);
thisform.text3.value=result
}
//------------------------------------------------------------------
function applysubstr()
{
num=thisform.text1.value;
result=num.substr(2,4);
thisform.text3.value=result
}
//------------------------------------------------------------------
function applyat()
{
num=thisform.text1.value;
result=num.charAt(3);
thisform.text3.value=result
}
//------------------------------------------------------------------
function round1()
{

alert("Round upto 3 digits after decimal")
num=eval(form2.text1.value);
result=num.toFixed(3);
form2.text3.value=result;
}
//------------------------------------------------------------------

function format1()
{
num=thisform.text1.value;
result=num.formcharcode(123,254,366);
thisform.text3.value=result
}
//------------------------------------------------------------------

function getposition()
{
num=prompt("Enter any word")
thisform.text1.value=num
pos=prompt("Enter Character to get position")
result=num.indexOf(pos);
thisform.text3.value=result
}
//------------------------------------------------------------------

function alltrim()
{
num=prompt("Enter any word with left spaces")
thisform.text1.value=num
thisform.text3.value=thisform.text1.value.trim()
}
//------------------------------------------------------------------

function addCommas(nStr)
{

 nStr += '';
 x = nStr.split('.');
 x1 = x[0];
 x2 = x.length > 1 ? '.' + x[1] : '';
 var rgx = /(\d+)(\d{3})/;
 while (rgx.test(x1)) {
  x1 = x1.replace(rgx, '$1' + ',' + '$2');
 }
 return x1 + x2;
}
//------------------------------------------------------------------

function formatCurrency(num) {
num = num.toString().replace(/\$|\,/g,'');
if(isNaN(num))
num = "0";
sign = (num == (num = Math.abs(num)));
num = Math.floor(num*100+0.50000000001);
cents = num%100;
num = Math.floor(num/100).toString();
if(cents<10)
cents = "0" + cents;
for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
num = num.substring(0,num.length-(4*i+3))+','+
num.substring(num.length-(4*i+3));
return (((sign)?'':'-') + num + '.' + cents);
}

//------------------------------------------------------------------
function isValidDate(ctrl)
{
var dateStr = ctrl;
var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{2}|\d{4})$/;
var matchArray = dateStr.match(datePat); // is the format ok?
if (matchArray == null)
{
alert("Invalid date format. Please enter the date in the MM/DD/YY format (example: 1/15/08) or select a date by clicking the calendar icon.")
ctrl.focus();
return false;
}
month = matchArray[1]; // parse date into variables
day = matchArray[3];
year = matchArray[4];
if (month < 1 || month > 12)
{ 
// check month range
alert("Month must be between 1 and 12.");
return false;
}
if (day < 1 || day > 31)
{
alert("Day must be between 1 and 31.");
return false;
}
if ((month==4 || month==6 || month==9 || month==11) && day==31)
{
alert("Month "+month+" doesn't have 31 days!")
return false
}
if (month == 2)
{ 
// check for february 29th
var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
if (day>29 || (day==29 && !isleap)) 
{
alert("February " + year + " doesn't have " + day + " days!");
return false;
}
}
return true; // date is valid
}

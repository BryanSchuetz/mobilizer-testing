function validateZIP(field) {
var valid = "0123456789";
var hyphencount = 0;

if (field.length!=5 && field.length!=10) {
$('#errorZip').html('*5 digits please.');
$('#zip').focus();
return false;
}
for (var i=0; i < field.length; i++) {
temp = "" + field.substring(i, i+1);
if (temp == "-") hyphencount++;
if (valid.indexOf(temp) == "-1") {
$('#errorZip').html('*Invalid Zip Code');
return false;
}
if ((field == "20012") ||(field =="20015") ||(field =="20011") ||(field =="20016") ||(field =="20008") ||(field =="20010") ||(field =="20017") ||(field =="20007") ||(field =="20009") ||(field =="20001") ||(field =="20002") ||(field =="20018") ||(field =="20037") ||(field =="20036") ||(field =="20005") ||(field =="20006") ||(field =="20019") ||(field =="20024") ||(field =="20003") ||(field =="20319") ||(field =="20020") ||(field =="20375") ||(field =="20032")){
$('#errorZip').html('*No representation in the Senate? That\'s sad for you. FYI: Bethesda is 20814');
$('#zip').focus();
return false;
}
if (field.length>5) {
$('#errorZip').html('We only need the 5 digit version');
$('#zip').focus();
return false;
   }
}
return true;
} 

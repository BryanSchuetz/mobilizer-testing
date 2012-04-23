function validateZIP(field) {

var marg = $("#box-2").css("margin-top");
console.log(marg);
if (marg == "245px"){
	$("#box-2").css("margin-top", "276px");
}
if (marg == "223px"){
	$("#box-2").css("margin-top", "256px");
}
function isValidZip(ZIP) {
    var pattern = new RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/);
    return pattern.test(ZIP);
}
if (!isValidZip (field)){
	$('#errorZip').html('*Not A Valid ZIP Code*');
	return false;
}

if ((field == "20012") ||(field =="20015") ||(field =="20011") ||(field =="20016") ||(field =="20008") ||(field =="20010") ||(field =="20017") ||(field =="20007") ||(field =="20009") ||(field =="20001") ||(field =="20002") ||(field =="20018") ||(field =="20037") ||(field =="20036") ||(field =="20005") ||(field =="20006") ||(field =="20019") ||(field =="20024") ||(field =="20003") ||(field =="20319") ||(field =="20020") ||(field =="20375") ||(field =="20032")){
$('#errorZip').html('*No taxation without representation.*');
$('#zip').focus();
return false;
}

if (field.length>5) {
$('#errorZip').html('*We only want the 5 digit version*');
$('#zip').focus();
return false;
   }

return true;
}
$(document).ready(function () {
 $("#focus").click(function () {
     var indx = $("select#selectId").find(":selected").index();
     $('#selectId').animate({
        scrollTop: indx * 14
     }, 500);
 });
});

function showDropDown() {
    document.getElementById("ssid-dropdown").style.display = 'block';
}

function hideDropDown() {
    document.getElementById("ssid-dropdown").style.display = 'none';
}

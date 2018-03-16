window.onload = function () {
    try{
        var xmlhttp = new XMLHttpRequest();
    }
    catch(e){
        var xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    xmlhttp.open('get','header.php',true);
    xmlhttp.onreadystatechange = function () {
        if(xmlhttp.readyState ==4 && xmlhttp.status == 200){
            document.body.innerHTML += xmlhttp.getResponseHeader('Author');
            window.alert(xmlhttp.getAllResponseHeaders());
        }
    }
    xmlhttp.send();
}
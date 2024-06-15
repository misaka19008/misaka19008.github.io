var url = "https://raw.githubusercontent.com/misaka19008/misaka19008-blog-cache/main/manifest/manifest.json";
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        json_data = JSON.parse(xhr.responseText);
        var imglist = new Array();
        Object.values(json_data).forEach(val => {imglist.push(val.webp[0])});
    }
};
function setBgImage(div_name,list) {
        myDiv = document.getElementById(div_name);
        myDiv.style.backgroundImage = "url('https://raw.githubusercontent.com/misaka19008/misaka19008-blog-cache/main/manifest/" + list[0] + "')";
};

let url = prompt("Please enter a URL:");

if (!url.startsWith("http")) {
  url = "http://" + url + ".com";
}

document.getElementById("link").innerHTML = "<a href='" + url + "'>" + url + "</a>";

let url = prompt("Please enter a URL:");

if (!url.startsWith("http")) {
  url = "https://" + url + ".com";
}

document.getElementById("link").innerHTML = "<a href='" + url + "'>" + url + "</a>";
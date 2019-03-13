var myHeading = document.querySelector('h1').textContent = 'Hello world!';
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','foto/End_Version.png');
    } else {
      myImage.setAttribute ('src','foto/batman-312342_640.png');
    }
}

var s1="javascript ";
var s2="concat example";
var s3=s1.concat(s2);
document.write(s3);

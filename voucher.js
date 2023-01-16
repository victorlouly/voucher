var c = document.querySelector('#c');
var ctx = c.getContext('2d');
var maxWidth = 400;
var lineHeight = 50;
var image = new Image();

image.src = "https://i.ibb.co/wcm8khG/Inserir-um-subt-tulo-22.png"


image.onload=function() {
  ctx.drawImage(image, 0, 0, c.width, c.height);
  redrawMeme();
}
  
document.getElementById('submit').onclick = redrawMeme;

function redrawMeme() {
  var topText = document.getElementById('toptext').value;
  var bottomText = document.getElementById('bottomtext').value;
  var meiotext = document.getElementById('meiotext').value;
  
  ctx.drawImage(image, 0, 0, c.width, c.height);
  
  ctx.font = "15pt Arial";
  ctx.textAlign = "center"; ctx.fillStyle="white";ctx.strokeStyle = '#ff000000';

 
  wrapText(ctx, topText, c.width/1.7, 275, maxWidth, lineHeight);
  
  ctx.font = "15pt Arial";

  wrapText(ctx, meiotext, c.width/2, 300, maxWidth, lineHeight);
  
  ctx.font = "15pt Arial";
  
  wrapText(ctx, bottomText, c.width/1.7, 368, maxWidth, lineHeight);
  }

function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            context.strokeText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
        context.strokeText(line, x, y);
      }

var textbox = document.querySelectorAll('.highlight'); 

textbox[0].addEventListener('click', function() {
  this.select();
});
textbox[1].addEventListener('click', function() {
  this.select();
});

const handleSubmit = (event) => {
event.preventDefault();

alert('enviando')
}

document;querySelector('form').addEventListener('submit', handleSubmit);
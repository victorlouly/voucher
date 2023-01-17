var c = document.querySelector('#c');
var ctx = c.getContext('2d');
var maxWidth = 400;
var lineHeight = 50;
var image = new Image();

image.src = "https://i.ibb.co/6WSBLgJ/10-Voucher-parab-ns-Online.png"


image.onload=function() {
  ctx.drawImage(image, 0, 0, c.width, c.height);
  redrawMeme();
}
  
document.getElementById('submit').onclick = redrawMeme;

function redrawMeme() {
  var topText = document.getElementById('toptext').value;
  var bottomText = document.getElementById('bottomtext').value;
  var meiotext = document.getElementById('meiotext').value;
  var indicou = document.getElementById('indicou').value;
  var cpf_indicou = document.getElementById('cpf_indicou').value;
  var cpf_indicado = document.getElementById('cpf_indicado').value;
  
  ctx.drawImage(image, 0, 0, c.width, c.height);
  
  ctx.font = "12pt Arial";
  ctx.textAlign = "center"; ctx.fillStyle="white";ctx.strokeStyle = '#ff000000';

 
  wrapText(ctx, topText, c.width/1.7, 430, maxWidth, lineHeight);
  
  ctx.font = "12pt Arial";

  wrapText(ctx, indicou, c.width/1.9, 258, maxWidth, lineHeight);
  
  ctx.font = "12pt Arial";

  wrapText(ctx, cpf_indicou, c.width/1.5, 310, maxWidth, lineHeight);
  
  ctx.font = "12pt Arial";
  
  wrapText(ctx, cpf_indicado, c.width/1.5, 414, maxWidth, lineHeight);
  
  ctx.font = "12pt Arial";

  wrapText(ctx, meiotext, c.width/2, 275, maxWidth, lineHeight);
  
  ctx.font = "12pt Arial";
  
  wrapText(ctx, bottomText, c.width/1.7, 343, maxWidth, lineHeight);
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


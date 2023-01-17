var c = document.querySelector('#c');
var ctx = c.getContext('2d');
var maxWidth = 400;
var lineHeight = 50;
var image = new Image();

image.src = "https://i.ibb.co/LPkpScx/voucher-2023-Prancheta-1-1.png"


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

 
  wrapText(ctx, topText, c.width/1.4, 408, maxWidth, lineHeight);
  
  ctx.font = "12pt Arial";

  wrapText(ctx, indicou, c.width/1.7, 258, maxWidth, lineHeight);
  
  ctx.font = "12pt Arial";

  wrapText(ctx, cpf_indicou, c.width/2, 286, maxWidth, lineHeight);
  
  ctx.font = "12pt Arial";
  
  wrapText(ctx, cpf_indicado, c.width/2, 380, maxWidth, lineHeight);
  
  ctx.font = "12pt Arial";

  wrapText(ctx, meiotext, c.width/1.15, 287, maxWidth, lineHeight);
  
  ctx.font = "12pt Arial";
  
  wrapText(ctx, bottomText, c.width/1.7, 352, maxWidth, lineHeight);
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

const handleSubmite = (event) => {
  event.preventDefault();

  const responsavel = document.querySelector('input[name=responsavel').value;
  const indicou = document.querySelector('input[name=indicou').value;
  const cpfindicou = document.querySelector('input[name=cpfindicou').value;
  const turma = document.querySelector('input[name=turma').value;
  const indicado = document.querySelector('input[name=indicado').value;
  const cpfindicado = document.querySelector('input[name=cpfindicado').value;
  



  fetch('https://api.sheetmonkey.io/form/hSyYeuSaYmCPVwRGiSkyKn', {

  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ responsavel, indicou, cpfindicou, turma, indicado, cpfindicado}),
  });
}

document.querySelector('form').addEventListener('submit', handleSubmite);

function time()
{
today=new Date();
h=today.getHours();
m=today.getMinutes();
s=today.getSeconds();
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
setTimeout('time()',500);
}

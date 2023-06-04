const objeto = document.getElementById('canvas');
const ctx = objeto.getContext('2d');

//Chão
ctx.beginPath();
ctx.fillStyle="green";
ctx.lineWidth= 2;
ctx.strokeStyle = "green";
ctx.fillRect (0, 600, 5000, 2000);
ctx.stroke();

//Cinza
ctx.fillStyle="grey";
ctx.lineWidth= 2;
ctx.strokeStyle="black";
ctx.fillRect (0,250,250,350);
ctx.strokeRect(0,250,250,350);

//Bandeira
ctx.fillStyle="red";
ctx.lineWidth= 2;
ctx.strokeWidth="red";
ctx.beginPath();
ctx.moveTo(300,75);
ctx.lineTo(225,50);
ctx.lineTo(225,100);
ctx.fill();

//Bandeira
ctx.beginPath();
ctx.moveTo(225, 250);
ctx.lineTo(225, 40);
ctx.stroke();

//Janela
ctx.fillStyle="deepSkyBlue";
ctx.fillRect(170, 325, 50, 50); 
ctx.fillRect(20, 325, 50, 50);

//Linha Janela
ctx.beginPath();
ctx.moveTo(195, 375); 
ctx.lineTo(195, 325); 
ctx.stroke();
ctx.beginPath();
ctx.moveTo(170, 350); 
ctx.lineTo(220, 350);
ctx.stroke();

//Linha janela
ctx.beginPath();
ctx.moveTo(45, 375); 
ctx.lineTo(45, 325); 
ctx.stroke();
ctx.beginPath();
ctx.moveTo(20, 350); 
ctx.lineTo(70, 350); 
ctx.stroke();

//Porta
ctx.fillStyle="Brown"
ctx.fillRect(80, 450, 80, 149);


//Caminho
ctx.fillStyle="Goldenrod"
ctx.rect(60, 600, 1500, 50);
ctx.fill();

//Maçaneta
ctx.beginPath();
ctx.arc(140,520,8,110,Math.PI*2,true);
ctx.stroke();
ctx.fillStyle ="Gold";
ctx.fill();

//Sol
ctx.beginPath();
ctx.arc(950,85,80,110,Math.PI*2,true);
ctx.stroke();
ctx.fillStyle ="Gold";
ctx.fill();

//Cabeça
ctx.beginPath();
ctx.arc(950,500,10,110,Math.PI*2,true);
ctx.stroke();
ctx.fillStyle ="black";
ctx.fill();

//Corpo
ctx.beginPath();
ctx.moveTo(950, 510); 
ctx.lineTo(950, 570); 
ctx.stroke();

//Pernas
ctx.beginPath();
ctx.moveTo(950, 570); 
ctx.lineTo(960, 600); 
ctx.stroke();

ctx.beginPath();
ctx.moveTo(950, 570); 
ctx.lineTo(940, 600); 
ctx.stroke();

//Braços
ctx.beginPath();
ctx.moveTo(950, 530); 
ctx.lineTo(910, 520); 
ctx.stroke();

ctx.beginPath();
ctx.moveTo(950, 530); 
ctx.lineTo(990, 520); 
ctx.stroke();

//Lago
ctx.beginPath();
ctx.arc(600,750,100,110,Math.PI*2,true);
ctx.fillStyle ="Blue";
ctx.fill();





//variaveis
respostaCorreta = 0;
var algarismo1, algarismo2;
quemPergunta = "t1";
quemResponde = "t2";
pontosJogador1 = 0;
pontosJogador2 = 0;

//armazenamento local
jogador1 = localStorage.getItem("jogador1");
jogador2 = localStorage.getItem("jogador2");

document.getElementById("questionador").innerHTML = jogador1;
document.getElementById("respondedor").innerHTML = jogador2;
document.getElementById("jUm").innerHTML = jogador1;
document.getElementById("jDois").innerHTML = jogador2;
document.getElementById("pontuacaoJUm").innerHTML = pontosJogador1;
document.getElementById("pontuacaoJDois").innerHTML = pontosJogador2;

function enviar(){
    algarismo1 = document.getElementById("n1").value;
    algarismo2 = document.getElementById("n2").value;
    respostaCorreta = parseInt(algarismo1)*parseInt(algarismo2);

    questao = "<h4 id = 'quetaoFeita'>" + algarismo1 + "X" + algarismo2 + "</h4>";
    respostaJogador = "<h4> Resposta: <input type= 'text' id='resposta_jogador'> </h4> ";
    checar = "<button id='checado' onclick = 'check()'>Checar</button>";

    parteRespondedor = questao + respostaJogador + checar;
    document.getElementById("output").innerHTML = parteRespondedor;
    document.getElementById("n1").value = " ";
    document.getElementById("n2").value = " ";
}

function check(){
    var resposta = document.getElementById("resposta_jogador").value;
    if(resposta==respostaCorreta){
        if(quemResponde == "t1"){
            pontosJogador1 = pontosJogador1 + 1;
            document.getElementById("pontuacaoJUm").innerHTML = pontosJogador1;
        }
        else{
            pontosJogador2 = pontosJogador2 + 1;
            document.getElementById("pontuacaoJDois").innerHTML = pontosJogador2;
        }
    }
    //quem responde
    if(quemResponde=="t1"){
        quemResponde="t2";
        document.getElementById("respondedor").innerHTML = jogador2;
    }
    else{
        quemResponde="t1";
        document.getElementById("respondedor").innerHTML = jogador1;  
    }

    //quem pergunta
    if(quemPergunta=="t1"){
        quemPergunta="t2";
        document.getElementById("questionador").innerHTML = jogador2;
    }
    else{
        quemPergunta="t1";
        document.getElementById("questionador").innerHTML = jogador1;  
    }
    document.getElementById("output").innerHTML = " ";
}
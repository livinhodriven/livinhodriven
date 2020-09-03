function main (){
    inserirPratos();
    inserirBebidas();
    inserirSobremesas();
}
main();


//botão é ativado quando seleciona 3 itens
function ativarBotao (){
    var combo = document.querySelectorAll('.selecionado');
    combo = combo.length;
    
    if(combo === 3){
        var botaoAtivado = document.querySelector('footer button');
        botaoAtivado.removeAttribute('disabled');
        botaoAtivado.innerText = "Fechar pedido";
        botaoAtivado.style.background = "#32B72F";
        botaoAtivado.style.padding = "15px";
        botaoAtivado.style.fontWeight = "bold";
        botaoAtivado.setAttribute('onclick','confirmaPedido()');
    }
};

//função de confirmação do pedido
function confirmaPedido(){
    var nome = prompt("Qual o seu nome?");
    var endereço = prompt("Qual o endereço de entrega?");

}



//função de seleção do prato
function selecao(item, pos){
    var selecionado = item[pos];
    
    //adiciona estilo ao item selecionado:
    if(item[pos].id == "p1"){
        ativaPrato1();

    } else if(item[pos].id == "p2"){
        ativaPrato2();

    } else if(item[pos].id == "p3"){
        ativaPrato3();

    }else if(item[pos].id == "b1"){
        ativaBebida1();

    }else if(item[pos].id == "b2"){
        ativaBebida2();

    }else if(item[pos].id == "b3"){
        ativaBebida3();

    }else if(item[pos].id == "b4"){
        ativaBebida4();

    }else if(item[pos].id == "b5"){
        ativaBebida5();

    }else if(item[pos].id == "s1"){
        ativaSobremesa1();

    }else if(item[pos].id == "s2"){
        ativaSobremesa2();

    }else if(item[pos].id == "s3"){
        ativaSobremesa3();
    }
    ativarBotao();
};



//----------------------------------------ativação da seleção dos prato e desmarcação dos outros -------------
function ativaPrato1(){
    //prato 1 - ON
    var selecao = document.querySelector(".prato li:nth-child(1)");
    selecao.setAttribute('class','selecionado');
    //prato 2
    var selecao = document.querySelector(".prato li:nth-child(2)");
    selecao.removeAttribute('class');
    //prato 3
    var selecao = document.querySelector(".prato li:nth-child(3)");
    selecao.removeAttribute('class');
};

function ativaPrato2(){
    //prato 1
    var selecao = document.querySelector(".prato li:nth-child(1)");
    selecao.removeAttribute('class');
    //prato 2 - ON
    var selecao = document.querySelector(".prato li:nth-child(2)");
    selecao.setAttribute('class','selecionado');
    //prato 3
    var selecao = document.querySelector(".prato li:nth-child(3)");
    selecao.removeAttribute('class');
};

function ativaPrato3(){
    //prato 1
    var selecao = document.querySelector(".prato li:nth-child(1)");
    selecao.removeAttribute('class');
    //prato 2
    var selecao = document.querySelector(".prato li:nth-child(2)");
    selecao.removeAttribute('class');
    //prato 3 - ON
    var selecao = document.querySelector(".prato li:nth-child(3)");
    selecao.setAttribute('class','selecionado');
};


//----------------------------------------ativação da seleção das bebidas e desmarcação dos outros -------------
function ativaBebida1(){
    //bebida 1 - ON
    var selecao = document.querySelector(".bebida li:nth-child(1)");
    selecao.setAttribute('class','selecionado');
    //bebida 2
    var selecao = document.querySelector(".bebida li:nth-child(2)");
    selecao.removeAttribute('class');
    //bebida 3
    var selecao = document.querySelector(".bebida li:nth-child(3)");
    selecao.removeAttribute('class');
    //bebida 4
    var selecao = document.querySelector(".bebida li:nth-child(4)");
    selecao.removeAttribute('class');
    //bebida 5
    var selecao = document.querySelector(".bebida li:nth-child(5)");
    selecao.removeAttribute('class');
};

function ativaBebida2(){
    //bebida 1
    var selecao = document.querySelector(".bebida li:nth-child(1)");
    selecao.removeAttribute('class');
    //bebida 2 - ON
    var selecao = document.querySelector(".bebida li:nth-child(2)");
    selecao.setAttribute('class','selecionado');
    //bebida 3
    var selecao = document.querySelector(".bebida li:nth-child(3)");
    selecao.removeAttribute('class');
    //bebida 4
    var selecao = document.querySelector(".bebida li:nth-child(4)");
    selecao.removeAttribute('class');
    //bebida 5
    var selecao = document.querySelector(".bebida li:nth-child(5)");
    selecao.removeAttribute('class');
};

function ativaBebida3(){
    //bebida 1
    var selecao = document.querySelector(".bebida li:nth-child(1)");
    selecao.removeAttribute('class');
    //bebida 2
    var selecao = document.querySelector(".bebida li:nth-child(2)");
    selecao.removeAttribute('class');
    //bebida 3 - ON
    var selecao = document.querySelector(".bebida li:nth-child(3)");
    selecao.setAttribute('class','selecionado');
    //bebida 4
    var selecao = document.querySelector(".bebida li:nth-child(4)");
    selecao.removeAttribute('class');
    //bebida 5
    var selecao = document.querySelector(".bebida li:nth-child(5)");
    selecao.removeAttribute('class');
};

function ativaBebida4(){
    //bebida 1
    var selecao = document.querySelector(".bebida li:nth-child(1)");
    selecao.removeAttribute('class');
    //bebida 2
    var selecao = document.querySelector(".bebida li:nth-child(2)");
    selecao.removeAttribute('class');
    //bebida 3
    var selecao = document.querySelector(".bebida li:nth-child(3)");
    selecao.removeAttribute('class');
    //bebida 4 - ON
    var selecao = document.querySelector(".bebida li:nth-child(4)");
    selecao.setAttribute('class','selecionado');
    //bebida 5
    var selecao = document.querySelector(".bebida li:nth-child(5)");
    selecao.removeAttribute('class');
};

function ativaBebida5(){
    //bebida 1
    var selecao = document.querySelector(".bebida li:nth-child(1)");
    selecao.removeAttribute('class');
    //bebida 2
    var selecao = document.querySelector(".bebida li:nth-child(2)");
    selecao.removeAttribute('class');
    //bebida 3
    var selecao = document.querySelector(".bebida li:nth-child(3)");
    selecao.removeAttribute('class');
    //bebida 4
    var selecao = document.querySelector(".bebida li:nth-child(4)");
    selecao.removeAttribute('class');
    //bebida 5 - ON
    var selecao = document.querySelector(".bebida li:nth-child(5)");
    selecao.setAttribute('class','selecionado');
};

//----------------------------------------ativação da seleção das sobremesas e desmarcação dos outros -------------
function ativaSobremesa1(){
    //sobremesa 1 - ON
    var selecao = document.querySelector(".sobremesa li:nth-child(1)");
    selecao.setAttribute('class','selecionado');
    //sobremesa 2
    var selecao = document.querySelector(".sobremesa li:nth-child(2)");
    selecao.removeAttribute('class');
    //sobremesa 2
    var selecao = document.querySelector(".sobremesa li:nth-child(3)");
    selecao.removeAttribute('class');
};

function ativaSobremesa2(){
    //sobremesa 1
    var selecao = document.querySelector(".sobremesa li:nth-child(1)");
    selecao.removeAttribute('class');
    //sobremesa 2 - ON
    var selecao = document.querySelector(".sobremesa li:nth-child(2)");
    selecao.setAttribute('class','selecionado');
    //sobremesa 3
    var selecao = document.querySelector(".sobremesa li:nth-child(3)");
    selecao.removeAttribute('class');
};

function ativaSobremesa3(){
    //sobremesa 1
    var selecao = document.querySelector(".sobremesa li:nth-child(1)");
    selecao.removeAttribute('class');
    //sobremesa 2
    var selecao = document.querySelector(".sobremesa li:nth-child(2)");
    selecao.removeAttribute('class');
    //sobremesa 3 - ON
    var selecao = document.querySelector(".sobremesa li:nth-child(3)");
    selecao.setAttribute('class','selecionado');
};

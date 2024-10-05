let pista = 100;
let superior = 200;
let inferior = 400;
atualizarValores (pista, superior, inferior);


function comprar(){
    let tipoCadeira = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    validarCadeira(tipoCadeira, quantidade)

}

function validarCadeira(tipoDeCadeira, quantidade){
    if(tipoDeCadeira == 'pista' && quantidade>0 && quantidade<=pista){
        pista = pista - quantidade;
    }else if(tipoDeCadeira == 'superior' && quantidade>0 && quantidade<=superior){
        superior = superior - quantidade;
    }else if(tipoDeCadeira == 'inferior' && quantidade>0 && quantidade<=inferior){
        inferior = inferior - quantidade;
    }else{
       alert('Valor de compra inválido!')
    }
    atualizarValores (pista, superior, inferior)
}

function atualizarValores (pista, superior, inferior){
    document.getElementById('qtd-pista').innerHTML = (`${pista}`);
    document.getElementById('qtd-superior').innerHTML = (`${superior}`);
    document.getElementById('qtd-inferior').innerHTML = (`${inferior}`); 
    document.getElementById('qtd').value = ('');
}
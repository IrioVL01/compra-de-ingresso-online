function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtdInput = document.getElementById('qtd');
    let qtd = parseInt(qtdInput.value);

// Validação para ver se a quantidade é um número positivo:
   if(isNaN(qtd) || qtd <= 0){
      alert('Por favor, insira uma quantidade válida.');

     return;
   }
    
   if(tipo.value == 'pista'){
    comprarPista(qtd);

   }

   if(tipo.value == 'superior'){
    comprarCsuperior(qtd);
   }

   if(tipo.value == 'inferior'){
    comprarCinferior(qtd);

   }
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    
    if(qtd > qtdPista){
        alert('Quantidade indisponível do tipo pista');
    }else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarCsuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSuperior){
        alert('Quantidade indisponível do tipo Cadeira superior');

    }else{
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');

    }
}

function comprarCinferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInferior){
        alert('Quantidade indisponível para tipo Cadeira inferior');

    }else{
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}

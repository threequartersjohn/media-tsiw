//jello

//CENAS
//não usar jquery, bootstrap, ou importar o que quer que seja da internet
//isto faz com que seja mt mais pequeno e que funcione localmente sem precisar de internet
//não creditar ninguém, não ter nomes em lado nenhum

//TODO
//mudar as contas para navegar as tables com ciclos for
//isto faria com que qualquer pessoa pudesse mudar o HTML e adaptar a calculadora para qualquer curso sem mudar o JS
//ie mais accessível

//DOC
//1A1S1D quer dizer 1º Ano 1º Semestre 1ª Disciplina
//2A2S2D quer dizer 2º Ano 2º Semestre 2ª Disciplina
//e por aí fora

const CRED_SEM = 30; // Créditos por semestre.

function media1A1S(){
    let soma = 0;
    let peso = 0;
    let nota = 0;
    
    //por cada nota ir buscar a nota e os ECTS
    //vamos buscar os ECTS que estão no html
    //assim pode-se mudar apenas o HTML, mesmo no browser, sem mudar o código JS

    //peso é calculado assim porque ECTS/CRED_SEM devolve a percentagem que corresponde ao peso da nota na média

    nota = parseInt(document.querySelector("#nota1A1S1D").value);
    peso = parseInt(document.querySelector("#ects1A1S1D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota1A1S2D").value);
    peso = parseInt(document.querySelector("#ects1A1S2D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota1A1S3D").value);
    peso = parseInt(document.querySelector("#ects1A1S3D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota1A1S4D").value);
    peso = parseInt(document.querySelector("#ects1A1S4D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota1A1S5D").value);
    peso = parseInt(document.querySelector("#ects1A1S5D").innerText) / CRED_SEM;
    soma += nota * peso;

    document.querySelector("#result1A1S").textContent = Math.round(soma) + " (" + soma.toFixed(4) + ")";    
    return soma;
}

function media1A2S(){
    let soma = 0;
    let peso = 0;
    let nota = 0;
    
    nota = parseInt(document.querySelector("#nota1A2S1D").value);
    peso = parseInt(document.querySelector("#ects1A2S1D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota1A2S2D").value);
    peso = parseInt(document.querySelector("#ects1A2S2D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota1A2S3D").value);
    peso = parseInt(document.querySelector("#ects1A2S3D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota1A2S4D").value);
    peso = parseInt(document.querySelector("#ects1A2S4D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota1A2S5D").value);
    peso = parseInt(document.querySelector("#ects1A2S5D").innerText) / CRED_SEM;
    soma += nota * peso;

    document.querySelector("#result1A2S").textContent = Math.round(soma) + " (" + soma.toFixed(4) + ")";    
    return soma;
}


function media2A1S(){
    let soma = 0;
    let peso = 0;
    let nota = 0;
    
    nota = parseInt(document.querySelector("#nota2A1S1D").value);
    peso = parseInt(document.querySelector("#ects2A1S1D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota2A1S2D").value);
    peso = parseInt(document.querySelector("#ects2A1S2D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota2A1S3D").value);
    peso = parseInt(document.querySelector("#ects2A1S3D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota2A1S4D").value);
    peso = parseInt(document.querySelector("#ects2A1S4D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota2A1S5D").value);
    peso = parseInt(document.querySelector("#ects2A1S5D").innerText) / CRED_SEM;
    soma += nota * peso;
    

    document.querySelector("#result2A1S").textContent = Math.round(soma) + " (" + soma.toFixed(4) + ")";    
    return soma;
}

function media2A2S(){
    let soma = 0;
    let peso = 0;
    let nota = 0;
    
    nota = parseInt(document.querySelector("#nota2A2S1D").value);
    peso = parseInt(document.querySelector("#ects2A2S1D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota2A2S2D").value);
    peso = parseInt(document.querySelector("#ects2A2S2D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota2A2S3D").value);
    peso = parseInt(document.querySelector("#ects2A2S3D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota2A2S4D").value);
    peso = parseInt(document.querySelector("#ects2A2S4D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota2A2S5D").value);
    peso = parseInt(document.querySelector("#ects2A2S5D").innerText) / CRED_SEM;
    soma += nota * peso;

    document.querySelector("#result2A2S").textContent = Math.round(soma) + " (" + soma.toFixed(4) + ")";    
    return soma;
}


function media3A1S(){
    let soma = 0;
    let peso = 0;
    let nota = 0;
    
    nota = parseInt(document.querySelector("#nota3A1S1D").value);
    peso = parseInt(document.querySelector("#ects3A1S1D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota3A1S2D").value);
    peso = parseInt(document.querySelector("#ects3A1S2D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota3A1S3D").value);
    peso = parseInt(document.querySelector("#ects3A1S3D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota3A1S4D").value);
    peso = parseInt(document.querySelector("#ects3A1S4D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota3A1S5D").value);
    peso = parseInt(document.querySelector("#ects3A1S5D").innerText) / CRED_SEM;
    soma += nota * peso;

    document.querySelector("#result3A1S").textContent = Math.round(soma) + " (" + soma.toFixed(4) + ")";    
    return soma;
}


function media3A2S(){
    let soma = 0;
    let peso = 0;
    let nota = 0;
    
    nota = parseInt(document.querySelector("#nota3A2S1D").value);
    peso = parseInt(document.querySelector("#ects3A2S1D").innerText) / CRED_SEM;
    soma += nota * peso;
    

    nota = parseInt(document.querySelector("#nota3A2S2D").value);
    peso = parseInt(document.querySelector("#ects3A2S2D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota3A2S3D").value);
    peso = parseInt(document.querySelector("#ects3A2S3D").innerText) / CRED_SEM;
    soma += nota * peso;

    nota = parseInt(document.querySelector("#nota3A2S4D").value);
    peso = parseInt(document.querySelector("#ects3A2S4D").innerText) / CRED_SEM;
    soma += nota * peso;

    document.querySelector("#result3A2S").textContent = Math.round(soma) + " (" + soma.toFixed(4) + ")";    
    return soma;
}


function media1A(){
    let soma = (media1A1S() + media1A2S())/2;
    document.querySelector("#result1A").value = Math.round(soma) + " (" + soma.toFixed(4) + ")"
    return soma;
}


function media2A(){
    let soma = (media1A() + (media2A1S() + media2A2S()))/3;
    document.querySelector("#result2A").value = Math.round(soma) + " (" + soma.toFixed(4) + ")"
    return soma;
}


function media3A(){
    let soma = (media2A() + (media3A1S() + media3A2S()))/3;
    document.querySelector("#result3A").value = Math.round(soma) + " (" + soma.toFixed(4) + ")"
    return soma;
}
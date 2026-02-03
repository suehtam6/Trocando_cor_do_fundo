'use strict'

    const botaoTrocarCor = document.getElementById("btnTrocar")
    const botaoCorAleatoria = document.getElementById("btnRandom")
    const botaoBeige = document.getElementById("botao-beige")
    const botaoAmarelo = document.getElementById("botao-amarelo")
    const botaoAqua = document.getElementById("botao-aqua")
    const botaoVermelho = document.getElementById("botao-vermelho")
    const botaoVerde = document.getElementById("botao-verde")
    const botaoRoxo = document.getElementById("botao-roxo")
    const botaoRosa = document.getElementById("botao-rosa")
    const botaoCinza = document.getElementById("botao-cinza")
    const botaoAzul = document.getElementById("botao-azul")
    

    function trocaCor(){

        const corUsuario = document.getElementById("cor-usuario").value
        document.documentElement.style.setProperty("--color-bg", corUsuario)
        document.documentElement.style.setProperty("--color-text", "white")

        if(corUsuario == "preto"){
            document.documentElement.style.setProperty("--color-bg", "black")
            document.documentElement.style.setProperty("--color-text", "white")
        }else if(corUsuario == "roxo"){
            document.documentElement.style.setProperty("--color-bg", "purple")
            document.documentElement.style.setProperty("--color-text", "black")
        }else if(corUsuario == "vermelho"){
            document.documentElement.style.setProperty("--color-bg", "red")
            document.documentElement.style.setProperty("--color-text", "black")
        }else if(corUsuario == "verde"){
            document.documentElement.style.setProperty("--color-bg", "green")
            document.documentElement.style.setProperty("--color-text", "black")
        }else if(corUsuario == "black"){
            document.documentElement.style.setProperty("--color-bg", "black")
            document.documentElement.style.setProperty("--color-text", "white")
        }else if( corUsuario == "amarelo"){
            document.documentElement.style.setProperty("--color-bg", "yellow")
            document.documentElement.style.setProperty("--color-text", "black")
        }else if(corUsuario == "azul"){
            document.documentElement.style.setProperty("--color-bg", "blue")
            document.documentElement.style.setProperty("--color-text", "white")
        }else if(corUsuario == "rosa"){
            document.documentElement.style.setProperty("--color-bg", "pink")
            document.documentElement.style.setProperty("--color-text", "black")
        }else if (corUsuario == "branco"){
            document.documentElement.style.setProperty("--color-bg", "white")
            document.documentElement.style.setProperty("--color-text", "black")
        }else if(corUsuario == "marrom"){
            document.documentElement.style.setProperty("--color-bg", "brown")
            document.documentElement.style.setProperty("--color-text", "black")
        }else if(corUsuario == "bege"){
            document.documentElement.style.setProperty("--color-bg", "beige")
            document.documentElement.style.setProperty("--color-text", "black")
        }else if(corUsuario == "blue"){
            document.documentElement.style.setProperty("--color-bg", "blue")
            document.documentElement.style.setProperty("--color-text", "white")
        }else{
            document.documentElement.style.setProperty("--color-text", "black")
        }
        
    }

    function fundoVerde(){
        document.documentElement.style.setProperty("--color-bg", "beige")
        document.documentElement.style.setProperty("--color-text", "black")
    }

    function fundoAmarelo(){
        document.documentElement.style.setProperty("--color-bg", "yellow")
        document.documentElement.style.setProperty("--color-text", "black")
    }

    function fundoAqua(){
        document.documentElement.style.setProperty("--color-bg", "aqua")
        document.documentElement.style.setProperty("--color-text", "black")
    }

        function fundoVermelho(){
        document.documentElement.style.setProperty("--color-bg", "red")
        document.documentElement.style.setProperty("--color-text", "black")
    }

        function fundoVerde(){
        document.documentElement.style.setProperty("--color-bg", "green")
        document.documentElement.style.setProperty("--color-text", "black")
    }

        function fundoRoxo(){
        document.documentElement.style.setProperty("--color-bg", "purple")
        document.documentElement.style.setProperty("--color-text", "black")
    }

        function fundoRosa(){
        document.documentElement.style.setProperty("--color-bg", "pink")
        document.documentElement.style.setProperty("--color-text", "black")
    }

        function fundoCinza(){
        document.documentElement.style.setProperty("--color-bg", "gray")
        document.documentElement.style.setProperty("--color-text", "black")
    }

        function fundoAzul(){
        document.documentElement.style.setProperty("--color-bg", "blue")
        document.documentElement.style.setProperty("--color-text", "white")
    }

function fundoAleatorio() {
    // Com esta function eu posso criar a cor aleatoria sendo hexadecimal e linkando no botão de "Cor Aleatoria"
    const corGerada = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.documentElement.style.setProperty("--color-bg", corGerada);
    document.documentElement.style.setProperty("--color-text", "black");
}
    botaoTrocarCor.addEventListener("click", trocaCor)
    botaoBeige.addEventListener("click", fundoVerde)
    botaoAmarelo.addEventListener("click", fundoAmarelo)
    botaoAqua.addEventListener("click", fundoAqua)
    botaoCorAleatoria.addEventListener("click",fundoAleatorio)
    botaoVermelho.addEventListener("click", fundoVermelho)
    botaoVerde.addEventListener("click", fundoVerde)
    botaoRoxo.addEventListener("click", fundoRoxo)
    botaoRosa.addEventListener("click", fundoRosa)
    botaoCinza.addEventListener("click", fundoCinza)
    botaoAzul.addEventListener("click", fundoAzul)

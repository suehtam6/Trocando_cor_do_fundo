'use strict'

    const botaoTrocarCor = document.getElementById("btnTrocar")
    const botaoCorAleatoria = document.getElementById("btnRandom")
    const botaoBeige = document.getElementById("botao-beige")
    const botaoAmarelo = document.getElementById("botao-amarelo")
    const botaoAqua = document.getElementById("botao-aqua")
    

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
            document.documentElement.style.setProperty("--color-text", "black")
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
        }
        else{
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

    function fundoAleatorio(){
        document.documentElement.style.setProperty("--color-bg", random)
    }

    botaoTrocarCor.addEventListener("click", trocaCor)
    botaoBeige.addEventListener("click", fundoVerde)
    botaoAmarelo.addEventListener("click", fundoAmarelo)
    botaoAqua.addEventListener("click", fundoAqua)
    botaoCorAleatoria.addEventListener("click",fundoAleatorio)

'use strict'

    const botaoTrocarCor = document.getElementById("btnTrocar")
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
        }else if(corUsuario == "vermelho"){
            document.documentElement.style.setProperty("--color-bg", "red")
        }else if(corUsuario == "verde"){
            document.documentElement.style.setProperty("--color-bg", "green")

        }
        
    }

    function fundoVerde(){
        document.documentElement.style.setProperty("--color-bg", "beige")
    }

    function fundoAmarelo(){
        document.documentElement.style.setProperty("--color-bg", "yellow")
    }

    function fundoAqua(){
        document.documentElement.style.setProperty("--color-bg", "aqua")
    }

    botaoTrocarCor.addEventListener("click", trocaCor)
    botaoBeige.addEventListener("click", fundoVerde)
    botaoAmarelo.addEventListener("click", fundoAmarelo)
    botaoAqua.addEventListener("click", fundoAqua)


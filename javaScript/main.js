'use strict'

    const botaoTrocarCor = document.getElementById("btnTrocar")
    
    function trocaCor(){
        const corUsuario = document.getElementById("cor-usuario").value
        document.documentElement.style.setProperty("--color-bg", corUsuario)
    }

    botaoTrocarCor.addEventListener("click", trocaCor)

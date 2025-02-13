function verificar(){
    let opcaoum = document.getElementById("opcaoum").value
    let opcaodois = document.getElementById("opcaodois").value
    
    let escolha = Math.floor(Math.random() * 2)
    
    if (escolha == 0){
    document.write("0 polvo escolheu: " + opcaoum)
    }
    else if(escolha >= 1){
   document.write ("0 polvo escolheu: " + opcaodois)
    }
  }
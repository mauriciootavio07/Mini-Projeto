var count_color = 0

function naoUrgente(){
    var novaNota, nota
    novaNota = document.createElement("li")
    novaNota.id = "listaN"
    nota = document.getElementById("nota").value
    novaNota.innerText = nota 
    
    if (count_color % 3 === 0) {
    novaNota.style.color = "blue"
  } else if (count_color % 3 === 1) {
     novaNota.style.color = "green"
  } else {
    novaNota.style.color = "purple"
  }
  var div = document.getElementById("nUrgente")
    div.appendChild(novaNota)
  count_color++
  document.getElementById("nota").value = ""
}

function Urgente(){
    var novaNota, nota
    novaNota = document.createElement("li")
    novaNota.id = "listaUrgente"
    nota = document.getElementById("nota").value
    novaNota.innerText = nota
    
    if (count_color % 3 === 0) {
    novaNota.style.color = "blue"
  } else if (count_color % 3 === 1) {
    novaNota.style.color = "green"
  } else {
    novaNota.style.color = "purple"
  }
  var div = document.getElementById("Urgente")
    div.appendChild(novaNota)
  count_color++
  document.getElementById("nota").value = ""
}

function removerN(){
    var li = document.getElementById("listaN")
    if(li){
        li.remove()
    }else{
    alert("Não há texto para remover")    
    }
}

function removerUrgente(){
    var li=document.getElementById("listaUrgente")
    if(li){
        li.remove()
    }else{
    alert("Não há texto para remover")    
    }
}

function apagarN(){
    var li=document.getElementById("nUrgente")
    li.innerHTML=""
}

function apagarUrgente(){
    var li=document.getElementById("Urgente")
    li.innerHTML=""
}
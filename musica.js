console.log("Você toca algum instrumento musical ?")

let user = ""

process.stdin.on("data", function(data){
    let user = data.toString().trim().toLowerCase()

    if(user == "sim" || user == "s"){
        console.log("Legal")
        process.exit()
    }else if (user == "não " || user == "nao" || user == "n" || user == "ñ"){
        console.log("É uma pena")
        process.exit()
    }
    else{
    console.log("Não entendi, poderia digitar Sim ou não? ")
    }
})

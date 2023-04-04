// fetch(é a promessa)
// Await só funciona em uma funcionalidade assincrona.

/** 
async function getContent() {

//tente a espera desta promessa   

    try { 
        const response = await fetch('http://brhost.ovh:8888/tasks', // Pega a resposta quando o fetch terminar de fazer o seu processo.
                                        {
                                            method: "GET", 
                                            mode: 'cors',
                                            headers: {
                                                'Content-Type': 'application/json',
                                            }
                                        }
                                    ).then(response => response.json()) // então transforma em json.
        console.log(response)  //coloca no console.
    }catch(error) { 
        console.error(error)
    }
//se não der certo capture o catch error e coloque no console.
}

*/ 
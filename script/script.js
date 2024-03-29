async function getContent(endpoint) {
    try { 
        await fetch(`http://brhost.ovh:8888/${endpoint}`,
                {
                    method: "GET", 
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            ).then(response => response.json()).then(data => {
                show(data)
            })
    }catch(error) {
        console.error(error);
    }
}

async function run(){
    await getContent('clients')
    await getContent('tasks')
}
run()


let output = ''
function show(data){
    let dadosTasks = Object.values(data);
    for(let dados of dadosTasks){
        console.log('esse:'+ dados.task_id)
        if(dados.task_id){
            output = 
            `   <tr> 
                    <h4>Tasks: </h4>
                    <td> Descrição: ${dados.desc}</td><br>
                    <td> Status: ${dados.status}</td><br>
                    <td> Data: Início ${dados.start_date} / Vencimento ${dados.due_date} </td>
                </tr><br>
            `
            document.getElementById(dados.name).innerHTML += output
            continue

        } else if(dados.task_id = undefined){ //concertar
            output = 
            `   
            <tr> 
                <div id='tarefa${dados.name}'>
                    <h4>Tasks: </h4>
                    Sem tasks!
                <div>
            </tr>
            `
            document.getElementById(dados.name).innerHTML += output
            continue

        }else {
            output = 
            `   
            <div id=${dados.name}>
                <tr> 
                    <p>-----------------------------------------------------------------------------------</p>
                    <td> Nome: ${dados.name} ${dados.surname}</td><br>
                    <td> Birthday:${dados.birthday}</td><br>
                    <td> CPF: ${dados.cpf}</td><br>
                    <td> Telefone: ${dados.phone_number}</td><br>
                    <td> E-mail: ${dados.email}</td><br>
                </tr>
            </div>
            `
            document.querySelector('section').innerHTML += output
        }
    }    
}
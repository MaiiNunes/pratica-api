async function getContent(endpoint) {
    try { 
        fetch(`http://brhost.ovh:8888/${endpoint}`,
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
 getContent('clients')
 getContent('tasks')

/**await show(data_clients)
/** mesclar*/
 

function show(data){
    let output = ''

    for(let dados of Object.values(data)){
        output += 
            ` <tr> Nome completo: 
                    <td> ${dados.name} ${dados.surname} </td>
                </tr><br>

                <tr>
                    <td> Birthday:${dados.birthday}</td><br>
                    <td> CPF: ${dados.cpf}</td><br>
                    <td> Telefone: ${dados.phone_number}</td><br>
                    <td> E-mail: ${dados.email}</td>
                </tr><br>
                <br>

                <tr> Cliente: 
                        <td> ${dados.name} ${dados.surname} </td>
                    </tr><br>

                    <tr>
                        <td> Tarefa: ${dados.desc}</td><br>
                        <td> Status: ${dados.status}</td><br>
                        <td> Data: Início ${dados.start_date} / Vencimento ${dados.due_date} </td><br>
                    </tr><br>
                    <br>
            `
    }

    document.querySelector('section').innerHTML = output
}
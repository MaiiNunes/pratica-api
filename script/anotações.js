// fetch(é a promessa)
// Await só funciona em uma funcionalidade assincrona.
//(endpoint) é o nome da variavel, que será definida no final da função chamando a categoria que quero da API
/** 
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
            ).then(response => response.json()).then(data => {     // Pega a resposta quando o fetch terminar de fazer o seu processo e transforma em json, então será o data.
                show(data)
            })
    }catch(error) {
        console.error(error);
    }                                 //se não der certo capture o catch error e coloque no console.
}
getContent('clients') 
getContent('tasks')


function show(data){
    let output = ''             //variavel é output

    for(let dados of Object.values(data)){                      //para cada variavel dados de objetos.values(objeto como o dado vem/ value são os dados) mostre data(dados)
        output += `<ul>${dados.name} ${dados.surname}</ul>      //variavel output atribui em uma lista o dado name
            <li> CPF: ${dados.cpf}</li>
        `
    }

    document.querySelector('main').innerHTML = output         //no documento html na main aprensente as informações do output
}
------------------------------------------------------------------------*/ 


/**
 += é utilizado para atribuir a uma variável o valor desta variável somada ao valor de um operando.(você quer somar na própria variável algum outro valor)
 */

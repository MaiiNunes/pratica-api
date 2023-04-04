
async function getContent() {
    try { 
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                const res = JSON.parse(xhr.responseText);
                console.log(res);

                Object.entries(res).forEach((entry) => {
                    const [key, value] = entry;
                    Object.entries(value).forEach((entry) => {
                        const [key2, value2] = entry;
                        console.log(`${key2}: ${value2}`);
                    });
                });
            }
        };
        xhr.open('GET', 'http://brhost.ovh:8888/tasks', true);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send(null); 

    }catch(error) {
        console.error(error)
    }

}
getContent() /***/ 

/**
function show(tasks){
    let output = ''

    for(let task of tasks){
        console.log(task)
    }

    document.querySelector('main').innerHTML = output
}
*/ 
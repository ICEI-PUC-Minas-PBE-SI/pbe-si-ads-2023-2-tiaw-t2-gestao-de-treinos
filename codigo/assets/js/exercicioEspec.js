const parametros = new URLSearchParams(location.search)
const id = parametros.get('id')

const ctx = document.getElementById('exerciciosInfo');
var chart

var dataInput = $('#data')
var pesoInput = $('#peso')
var btnAdd = $('#btnAdicionar')

const secaoAtual = localStorage.getItem('localSession') && localStorage.getItem('localSession') != 'null' ?
    localStorage.getItem('localSession') :
    sessionStorage.getItem('localSession')

const userDataUrl = 'https://json-login--matheusalvimori.repl.co/userData/' + secaoAtual

const putData = async (url, data) => {
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
        .then(data => {
            console.log('resposta: ')
            console.log(data)
        })
}

var exercicioInfos = async (id) => {
    var userData = await fetchData(userDataUrl)

    userData.allExercises.map(async (e) => {
        if (e.id == id) {
            const exercicioAtualizado = await fetchData('https://dbexercicio--matheushrm614.repl.co/exercicios/' + id)

            $('[ex-title]').text(e.name.charAt(0).toUpperCase() + e.name.slice(1))
            $('[ex-nome]').text(e.name.charAt(0).toUpperCase() + e.name.slice(1))
            $('[ex-img]').prop('src', exercicioAtualizado.gifUrl)

            e.instructions.map(i => $('[ex-instruc]').append(`<li class="list-group-item">${i}<li/>`))

            montarGrafico(e)
        }
    })

}

const montarGrafico = (exercicio) => {
    peso = exercicio.info.peso
    data = exercicio.info.data

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data,
            datasets: [{
                label: 'My First Dataset',
                data: peso,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

const adicionarInfo = async (peso, data) => {
    const userData = await fetchData(userDataUrl)

    userData['allExercises'].map(async (e, i) => {
        if (e.id == id) {

            if (e.info.data.includes(data)) {
                console.log('data repetida')

                userData['allExercises'][i].info.peso.splice(e.info.data.indexOf(data), 1, peso)
            }

            else {
                console.log('nao repetida')
                userData['allExercises'][i].info.peso.push(peso)
                userData['allExercises'][i].info.data.push(data)
            }

            await putData(userDataUrl, userData)
            
            updateData(chart, 
                userData['allExercises'][i].info.data,
                userData['allExercises'][i].info.peso
            )

            return true
        }
    })
}

function updateData(chart, label, peso) {
    chart.data.labels = label
    chart.data.datasets.forEach((dataset) => {
        dataset.data = peso;
    });
    chart.update();
}

btnAdd.on('click', () => {
    var data = dataInput.val()
    var peso = pesoInput.val()

    console.log('clicado')

    if (data && peso)
        adicionarInfo(peso, data)
})



exercicioInfos(id)
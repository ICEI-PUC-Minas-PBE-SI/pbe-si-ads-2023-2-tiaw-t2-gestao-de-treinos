var userData = JSON.parse(localStorage.getItem('userData'))
if (userData == null) {
    console.log("vai limpar: ")
    console.log(userData)
    userData = {
        'allExercises': [],
        'diasDeDescanso': [],
    }

    localStorage.setItem("userData", JSON.stringify(userData))
}

var usuariosUrl = 'https://json-login--matheusalvimori.repl.co/userData/'

const secaoAtual = localStorage.getItem('localSession') && localStorage.getItem('localSession') != 'null' ?
    localStorage.getItem('localSession') :
    sessionStorage.getItem('localSession')

var diaAtual = parseInt(new Date().getDay())
var diaVendo

var bodyPartTemplate = $("[bodyPart-template]")
var exercicioTemplate = $("[exercicio-template]")
var noUserTemplate = $("[noUser-template]")
var diaDescansoTemplate = $("[diaDescanso-template]")
var semTreinoTemplate = $("[semTreino-template]")
var loginTemplate = $("[login-template]")

const parametros = new URLSearchParams(location.search)
const parametroDia = parametros.get('dia')

const redirecionar = (dia, bp) => {
    var paramD = `?dia=${dia}`
    var paramB = bp ? `&bp=${bp}` : ''

    window.location.href = `editarTreino.html${paramD}${paramB}`
}

const bodyPart = (bodyPart) => {
    var textoFormatado = bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1);

    var card = bodyPartTemplate[0].content.cloneNode(true).children[0]
    var title = card.querySelector("[bodyPart-title]")
    var button = card.querySelector("[bodyPart-button]")
    card.querySelector("[bodyPart-table]").setAttribute('id', `table${bodyPart.replace(/\s/g, '')}`);

    title.textContent = textoFormatado
    button.addEventListener('click', () => redirecionar(diaVendo, bodyPart))

    return card
}

const exercicioCard = async ({ name, id, gifUrl }) => {
    const exercicio = await fetchData('https://dbexercicio--matheushrm614.repl.co/exercicios/' + id)
    const urlAtualizada = exercicio.gifUrl

    var card = exercicioTemplate[0].content.cloneNode(true).children[0]

    var nome = card.querySelector("[exercicio-nome]")
    var button = card.querySelector("[exercicioEspec-button]")
    var gif = card.querySelector("[exercicio-gif]")

    nome.textContent = name
    gif.src = urlAtualizada
    button.addEventListener('click', () => { window.location.href = `exercicioSpec.html?id=${id}` })

    return card
}

const theCabaArentMadeOfIron = () => {
    var card = diaDescansoTemplate[0].content.cloneNode(true).children[0]

    card.querySelector('[diaDescanso-button]').addEventListener('click', () => {
        diaDeDescanso(diaVendo);
        verTreino(diaVendo);
    })

    return card
}

const semTreinoNoDia = (dia) => {
    var card = semTreinoTemplate[0].content.cloneNode(true).children[0]

    var criar = card.querySelector('[semTreino-criar]')
    var descansar = card.querySelector('[semTreino-descansar]')

    criar.addEventListener('click', () => { redirecionar(dia, '') })
    descansar.addEventListener('click', () => {
        diaDeDescanso(dia);
    })

    return card
}

const semExercicios = () => {
    var card = noUserTemplate[0].content.cloneNode(true).children[0]

    card.querySelector('[noUser-button]').addEventListener('click', () => { redirecionar(diaVendo, '') })

    return card
}

const loginCard = () => {
    var card = loginTemplate[0].content.cloneNode(true).children[0]

    card.querySelector('[login-button]').addEventListener('click', () => { window.location.href = 'login.html' })

    return card
}

const diaDeDescanso = async (dia) => {
    console.log('descanso')
    var userData = await fetchData(usuariosUrl + secaoAtual)
    console.log(userData.diasDeDescanso)

    if (!userData.diasDeDescanso.includes(dia)) {
        console.log('descanso adicionado')
        userData.diasDeDescanso.push(dia)
    }

    else {
        console.log('descanso removido')
        userData.diasDeDescanso.splice(userData.diasDeDescanso.indexOf(dia), 1)
    }

    await fetch(usuariosUrl + secaoAtual, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).then(response => response.json())
        .then(data => console.log(data.diasDeDescanso))

    await verTreino(dia);
}

const verTreino = async (dia) => {
    console.log('vendo dia: ' + dia)

    $('.weekDay').removeClass('today')
    $(`#weekDay${dia}`).addClass('today')
    diaVendo = dia

    console.log("session " + secaoAtual)
    console.log("local " + secaoAtual)
    if (!secaoAtual && !secaoAtual) {
        console.log('sem usuario')
        $('#treinoDia').html(loginCard())
        return
    }

    var userData = await fetchData(usuariosUrl + secaoAtual)

    var exerciciosUsuario = userData.allExercises
    var exerciciosDia = {}

    exerciciosUsuario.map(exercicio => {
        if (exercicio.dias.includes(dia)) {
            if (!Object.keys(exerciciosDia).includes(exercicio.bodyPart)) {
                exerciciosDia[exercicio.bodyPart] = []
            }
            exerciciosDia[exercicio.bodyPart].push(exercicio)
        }
    })

    console.log('Body part no dia: ')
    console.log(Object.keys(exerciciosDia))


    if (userData == null || userData.allExercises.length == 0) {
        console.log('sem exercicios')
        $('#treinoDia').html(semExercicios())
        return
    }
    if (userData['diasDeDescanso'].includes(dia)) {
        console.log('descanso')
        $('#treinoDia').html(theCabaArentMadeOfIron())
        return
    }
    if (Object.keys(exerciciosDia).length == 0) {
        console.log('sem treino')
        $('#treinoDia').html(semTreinoNoDia(dia))
        return
    }
    $('#treinoDia').html('')

    Object.keys(exerciciosDia).map(bp => {
        console.log('body part card: ' + bp)
        $('#treinoDia').append(bodyPart(bp))
    })

    Object.keys(exerciciosDia).map(async b => {
        await Promise.all(
            exerciciosDia[b].map(async e => $(`#table${b.replace(/\s/g, '')}`).append(await exercicioCard(e)))
            )
    })
}

if (parametroDia) {
    console.log('parametro')
    verTreino(parseInt(parametroDia))
}
else {
    console.log('sem parametro')
    verTreino(diaAtual)
}
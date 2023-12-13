var db = JSON.parse(localStorage.getItem('db'))


// Faz um objeto com os grupos musculares, dentro os musculos especificso desse grupo e os equipamentos usados
var bodyPartList = {}
Object.keys(db).map(bp => {
    db[bp].map(e => {
        if (!bodyPartList[e.bodyPart])
            bodyPartList[e.bodyPart] = {}

        if (!bodyPartList[e.bodyPart].target) {
            bodyPartList[e.bodyPart].target = []
            bodyPartList[e.bodyPart].equipamento = []
        }

        if (!bodyPartList[e.bodyPart].target.includes(e.target))
            bodyPartList[e.bodyPart].target.push(e.target)

        if (!bodyPartList[e.bodyPart].equipamento.includes(e.equipment))
            bodyPartList[e.bodyPart].equipamento.push(e.equipment)
    })
})


// cria um user data caso nao haja
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


// parametros da url
const parametros = new URLSearchParams(location.search)
const parametroDia = parseInt(parametros.get('dia'))
const parametroBP = parametros.get('bp')


// templates
var editarExercicioTemplate = $("[editarExercicio-template]")
var diaDescansoTemplate = $("[diaDescanso-template]")
var footerTemplate = $("[footer-template]")
var verMaisTemplate = $("[verMais-template]")


// selects e inputs
var selectBodyPart = $('#selectBodyPart')
var selectTarget = $('#selectTarget')
var selectEquipamento = $('#selectEquipamento')
var searchInput = $('#editar-seachInput')
var inputExercicio = $('#inputExercicioAtivo')


// dias
var diaEditando

var diaAtual = new Date().getDay()
var diaVendo


// numero de exercicios que aparecem por vez
const exerciciosVisiveis = 6


// redireciona para pagina de ver o treino
const redirecionarVerTreino = (dia) => {
    window.location.href = `verTreino.html?dia=${dia}`
}

/* -------------------------------
 *
 *              CARDS
 *
 * -------------------------------
*/

const editExerciseCard = ({ name, id, gifUrl, bodyPart, target, equipment }) => {
    var userHasThisExercise = false;

    userData['allExercises'].map(exercicio => {
        if (exercicio.id == id && exercicio.dias.includes(diaEditando))
            userHasThisExercise = true;
    })

    var card = editarExercicioTemplate[0].content.cloneNode(true).children[0]

    var nome = card.querySelector("[editarExercicio-nome]")
    var gif = card.querySelector("[editarExercicio-gif]")
    var input = card.querySelector("[editarExercicio-input]")
    input.checked = userHasThisExercise
    var label = card.querySelector("[editarExercicio-label]")

    nome.textContent = name
    gif.src = gifUrl
    input.addEventListener('change', () => adicionarRemoverEmUserData(id, bodyPart))
    label.setAttribute('for', `input${id}`)
    input.setAttribute('id', `input${id}`)

    card.setAttribute('body-part', bodyPart)
    card.setAttribute('target', target)
    card.setAttribute('equipamento', equipment)
    card.setAttribute('editarExercicio', name)
    card.setAttribute('exercicio-ativo', userHasThisExercise)
    card.setAttribute('id-card', id)

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

const footerEditar = () => {
    var card = footerTemplate[0].content.cloneNode(true).children[0]

    var checked = userData['diasDeDescanso'].includes(diaEditando)

    var input = card.querySelector('[footer-input]')
    var button = card.querySelector('[footer-button]')

    input.checked = checked
    input.addEventListener('change', () => { diaDeDescanso(diaEditando) })
    /* button.addEventListener('click', () => {
        verTreino(diaEditando)
        modalCriar.hide()
    }) */

    return card
}

/* -------------------------------
 *
 *              CARDS
 *
 * -------------------------------
*/


// vai para o dia a ser editado e monsta o select de grupos musculares
const editarTreino = async (dia, bp) => {
    console.log('editando dia: ')
    console.log(dia)

    console.log('editando bp: ')
    console.log(bp)

    var htmlBP = '<option value="default">Grupo muscular</option>'

    Object.keys(bodyPartList).map(bodyPart => {
        var bodyPartFormatada = bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1);
        htmlBP +=
            `<option value="${bodyPart}">${bodyPartFormatada}</option>`
    })

    selectBodyPart.html(htmlBP)

    editarDia(dia, bp)
}


// atualiza o footer para o dia selecionado e mostra os exercicios com o grupo selecionado
const editarDia = (dia, bp) => {
    diaEditando = dia ? parseInt(dia) : diaVendo
    console.log('mostrando dia: ')
    console.log(diaEditando)

    bp = bp ? bp : 'default'

    diaEditando = dia

    $('.editDay').removeClass('today')
    $(`#editDay${dia}`).addClass('today')

    selectBodyPart.val(bp)
    console.log('selectBP val: ' + selectBodyPart.val())

    mudarSelectTarget(selectBodyPart.val())

    var card = footerTemplate[0].content.cloneNode(true).children[0]
    var descansar = card.querySelector('[footer-input]')
    var concluir = card.querySelector('[footer-concluir]')

    descansar.checked = userData.diasDeDescanso.includes(dia)
    descansar.addEventListener('change', () => { diaDeDescanso(dia) })
    concluir.addEventListener('click', () => { redirecionarVerTreino(dia) })

    $('[footer]').html(card)

    mostrarExercicios(bp, '')
}


// limita o numero de exercicios visiveis por vez
const limitarVisiveis = (visiveis) => {
    console.log('mostrando: ' + visiveis + ' exercicios')
    var verMais = verMaisTemplate[0].content.cloneNode(true).children[0]
    var divButton = $('#botaoVerMais')
    var filtro = selectFiltro()

    $(`[body-part="${selectBodyPart.val()}"]`).addClass('d-none')
    console.log(selectBodyPart.val() + ' removida')

    var exercicios = $(`${filtro}`)
    console.log('filtro: ' + filtro)

    for (let i = 0; i < exercicios.length; i++) {
        if (i <= visiveis)
            exercicios[i].classList.remove('d-none')
        else
            exercicios[i].classList.add('d-none')
    }

    if (exercicios.length - visiveis > 0) {
        verMais.querySelector('[verMais-button]').addEventListener('click', () => limitarVisiveis(visiveis + exerciciosVisiveis))
        divButton.html(verMais)
    }
    else
        divButton.html('')
}


// mostra os exercicios 
const mostrarExercicios = (bodyPart, target) => {
    if (userData['diasDeDescanso'].includes(diaEditando)) {
        $('#criarTreinoTable').html(theCabaArentMadeOfIron())
        return
    }

    console.log(bodyPart)
    // seleciona o grupo muscular padrao
    if (bodyPart == 'default') {
        /* $('#criarTreinoTable').html('')
        console.log('nenhuma bodyPart')
        return */
        bodyPart = 'chest'
        selectBodyPart.val(bodyPart)
        updateSelect(bodyPart)
    }

    var html = []

    db[bodyPart].map((exercicio) => {
        if (!target || target == exercicio.target)
            card = editExerciseCard(exercicio)

        if (card.getAttribute('exercicio-ativo') == 'true')
            html.unshift(card)
        else
            html.push(card)
    })

    $('#criarTreinoTable').html(html)
    limitarVisiveis(exerciciosVisiveis)
}


// muda o select dos musculos de acordo com o grupo selecionado
const mudarSelectTarget = (bodyPart) => {
    var htmlT = '<option value="none" class="selected">Músculo</option>'

    if (bodyPart != 'default') {
        bodyPartList[bodyPart].target.map(target => {
            var targetFormatada = target.charAt(0).toUpperCase() + target.slice(1);
            htmlT +=
                `<option value="${target}">${targetFormatada}</option>`
        })
    }

    selectTarget.html(htmlT);
}


// muda o select dos equipamentos de acordo com o grupo selecionado
const mudarSelectEquipamento = (bodyPart) => {
    var htmlE = '<option value="none" class="selected">Equipamento</option>'

    if (bodyPart != 'default')
        bodyPartList[bodyPart].equipamento.map(equipamento => {
            var equipamentoFormatada = equipamento.charAt(0).toUpperCase() + equipamento.slice(1);
            htmlE +=
                `<option value="${equipamento}">${equipamentoFormatada}</option>`
        })

    selectEquipamento.html(htmlE);
}


// retorta um selector css baseado no valor dos selects
const selectFiltro = () => {
    var seletor = ''
    var filtros = {
        'body-part': selectBodyPart.val(),
        'target': selectTarget.val(),
        'equipamento': selectEquipamento.val(),
    }

    if (inputExercicio.prop('checked'))
        seletor += "[exercicio-ativo='true']"

    var keys = Object.keys(filtros)

    keys.map(k => {
        if (filtros[k] != 'none')
            seletor += `[${k}="${filtros[k]}"]`
    })

    return seletor
}


// atualiza os selects pelo grupo muscular
const updateSelect = (bodyPart) => {
    mudarSelectTarget(bodyPart)
    mudarSelectEquipamento(bodyPart)
}


// mostra os exercicios de acordo com o grupo selecionado e atualiza os selects
selectBodyPart.on("change", () => {
    var bodyPart = selectBodyPart.val()
    console.log('bodyPart selecionada: ' + bodyPart)
    updateSelect(bodyPart)

    mostrarExercicios(bodyPart, '')
})

selectTarget.on("change", () => {
    limitarVisiveis(exerciciosVisiveis)
})

selectEquipamento.on('change', () => {
    limitarVisiveis(exerciciosVisiveis)
})

inputExercicio.on('change', () => {
    limitarVisiveis(exerciciosVisiveis)
})


// Search bar
searchInput.on('input', (e) => {
    const valor = e.target.value
    var bodyPart = selectBodyPart.val()
    const cards = document.querySelectorAll(`${selectFiltro()}`)
    $(`[body-part="${bodyPart}"]`).addClass('d-none')

    cards.forEach(c => {
        var visivel = c.getAttribute('editarexercicio').includes(valor)

        if (visivel)
            c.classList.remove('d-none')
        else
            c.classList.add('d-none')
    })

    $('#botaoVerMais').html('')

    if (valor.length <= 0)
        limitarVisiveis(exerciciosVisiveis)
})


// adiciona o dia no array de exercicios do usuario caso nao haja e adiciona o dia selecionado no array de dias do exercicio
const adicionarDia = (id, bodyPart) => {
    db[bodyPart].some(exercicioDB => {
        if (exercicioDB.id == id) {
            if (!userData.allExercises.includes(exercicioDB))
                userData.allExercises.push(exercicioDB)

            if (!exercicioDB.dias)
                exercicioDB.dias = []

            if (!exercicioDB.info)
                exercicioDB.info = {
                    "peso": [0],
                    "data": [0]
                }

            userData.allExercises.some(exercicioUsuario => {
                if (exercicioUsuario.id == id) {
                    if (!exercicioUsuario.dias.includes(diaEditando))
                        exercicioUsuario.dias.push(diaEditando)

                    return true
                }
            })

            console.log('adicionado')
            return true;
        }
    })

    localStorage.setItem('userData', JSON.stringify(userData))
}


// remove o dia selecionado do array de dias do exercicio
const removerDia = (id) => {
    userData.allExercises.some(exercicio => {
        if (exercicio.id == id) {
            var indexDia = exercicio.dias.indexOf(diaEditando)
            if (indexDia != -1) {
                exercicio.dias.splice(indexDia, 1)

                console.log('removido')
                return true
            }
        }
    })

    localStorage.setItem("userData", JSON.stringify(userData))
    return
}


// adiciona/remove o exercicio e dia ao array do user
const adicionarRemoverEmUserData = (id, bodyPart) => {
    var input = $(`#input${id}`)
    var card = document.querySelector(`[id-card='${id}']`)

    if (input.prop("checked")) {
        card.setAttribute('exercicio-ativo', 'true')
        adicionarDia(id, bodyPart);
        return
    }

    card.setAttribute('exercicio-ativo', 'false')
    removerDia(id)
    return
}


// adiciona/remove o dia selecionado do array de dias de descanso do ususario
const diaDeDescanso = (dia) => {
    if (!userData['diasDeDescanso'].includes(dia))
        userData['diasDeDescanso'].push(dia)

    else
        userData['diasDeDescanso'].splice(userData['diasDeDescanso'].indexOf(dia), 1)

    mostrarExercicios('', '')
    localStorage.setItem("userData", JSON.stringify(userData))
}


// pontapé inicial do site dado pelos parametros
console.log('parametro dia: ' + parametroDia)
console.log('parametro BP: ' + parametroBP)
editarTreino(parametroDia, parametroBP)
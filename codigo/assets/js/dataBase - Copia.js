var db = JSON.parse(localStorage.getItem("db"))
const reloadPage = new CustomEvent("reloadPage") // Custom event para atualizar a página quando dados forem atualizados

var lastUpdate = JSON.parse(localStorage.getItem('lastUpdate'))
const diaHoje = new Date().getDay()
const horaAgora = new Date().getHours()


const urlExercicios = 'https://dbexercicio--matheushrm614.repl.co/exercicios/'
const urlData = 'https://exercisedb.p.rapidapi.com/exercises?limit=2000'
const urlBodyPart = 'https://dbexercicio--matheushrm614.repl.co/gruposMuscularesEN';
const optionsData = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b382a3f0dfmsh01b2d65ce2bc88ep184ae7jsnce83c069e266',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}



// funcção de busca
const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}



//monta o db com o arr separado pelos bodyParts e salva no localStorage
const buildData = async () => {
    var bodyPart = await fetchData(urlBodyPart, optionsData)
    var db = {}

    await Promise.all(
        bodyPart.map(async bp => {
            db[bp] = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bp}?limit=2000`, optionsData)
        })
    )

    localStorage.setItem("db", JSON.stringify(db));
    document.dispatchEvent(reloadPage);
}



// atualiza os gifs do DB e salva no localStorage
const updateGifUrl = async () => {
    var exercises = await fetchData(urlData, optionsData);
    
    await Promise.all(
        exercises.map(async e => {
            var exercicicio = await fetchData(urlExercicios + e.id);

            exercicicio.gifUrl = e.gifUrl;

            fetch(urlExercicios + e.id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(exercicicio)
            });
        })
    )

    console.log('gif atualizados')
    //document.dispatchEvent(reloadPage);
}



if (localStorage.getItem("db") == null) {
    buildData();
    var lastUpdate = {
        dia: diaHoje,
        hora: horaAgora,
    }
    localStorage.setItem('lastUpdate', JSON.stringify(lastUpdate))
}

if (localStorage.getItem("db") != null &&
    (lastUpdate.hora < 15 && horaAgora >= 15) ||
    lastUpdate.dia != diaHoje) {
    updateGifUrl()

    var lastUpdate = {
        dia: diaHoje,
        hora: horaAgora,
    }
    localStorage.setItem('lastUpdate', JSON.stringify(lastUpdate))
}

document.addEventListener("reloadPage", () => {
    location.reload();
})
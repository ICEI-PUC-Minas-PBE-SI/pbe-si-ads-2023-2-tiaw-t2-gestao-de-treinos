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
}
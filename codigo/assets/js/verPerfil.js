const postData = async (url, data) => {
    const postResponse = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const responseData = await postResponse.json()
    console.log('resposta: ')
    console.log(responseData)
    return
}

const carregarPerfil = async () => {
    const usuario = await fetchUsuario(usuarios + secaoLogada)

    nome = usuario.nome
    email = usuario.email
    img = usuario.img

    $('#nome').text(nome)
    $('#email').text(email)
    $('#img').prop('src', img != null ? img : 'assets/img/login.png')
}

const mudarImagem = async () => {
    var link = prompt('Digite o link da imagem')

    const usuario = await fetchUsuario(usuarios + secaoLogada)
    
    usuario.img = link

    await postData(usuarios + secaoLogada, usuario)

    window.location.reload()
}

carregarPerfil()
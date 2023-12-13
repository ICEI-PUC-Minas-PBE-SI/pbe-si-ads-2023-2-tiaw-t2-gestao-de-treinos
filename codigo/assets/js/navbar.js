const secaoLogada = localStorage.getItem('localSession') && localStorage.getItem('localSession') != 'null' ?
    localStorage.getItem('localSession') :
    sessionStorage.getItem('localSession')

console.log(secaoLogada)

const usuarios = 'https://json-login--matheusalvimori.repl.co/usuarios/';

const fetchUsuario = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const deslogar = () => {
    sessionStorage.setItem('localSession', null)
    localStorage.setItem('localSession', null)

    window.location.href = 'login.html'
}

const logado = async () => {
    const usuario = await fetchUsuario(usuarios + secaoLogada)

    const nome = usuario.nome
    const img = usuario.img ? usuario.img : 'assets/img/login.png'
    console.log(img)

    $('.loginOffCanvas').html(
        `<div class="d-block rounded p-1 m-1 mb-3 justify-content-center"
            id="usuarioLogin">
            <div class="d-flex no-wrap">
                <div>
                    <img src="" alt="nao" class='loginImg'>
                </div>
                <div class="nav-text d-inline-block ps-1">
                    <span class="">
                        ${nome}
                        <i class="fa-solid fa-caret-down icon" id="arrow"></i>
                    </span>
                    <ul>
                        <li class="border rounded m-1 calc-item"><a
                            href="verPerfil.html">Ver Perfil</a></li>
                        <li class="border rounded m-1 calc-item" onClick="deslogar()"><a href="#">Sair</a></li>
                    </ul>
                </div>
            </div>
        </div>`)

    $('.loginUpBar').html(`
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <img src="" alt="nao" class="pe-1 loginImg">
                ${nome}
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item calc-item border rounded"
                    href="verPerfil.html">Ver perfil</a></li>
                <li onClick="deslogar()"><a class="dropdown-item calc-item border rounded"
                    href="#">Sair</a></li>
            </ul>
        </li>`)

    $('.loginSideBar').html(`
        <img src="" alt="" class="loginImg" width="35px">`)

    $(".loginImg").prop('src', img)
}

console.log('nao logado')
if (secaoLogada) {
    console.log('logado')
    logado()
}
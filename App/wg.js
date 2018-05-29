
function onSessionOpened()
{
    var reg = document.getElementById( 'register' );
    var login = document.getElementById( 'login' );

    var perfil = document.getElementById( 'perfil' );
    var cerrar = document.getElementById( 'cerrar' );
   
    reg.classList.add('d-none');
    login.classList.add('d-none');

    perfil.classList.remove('d-none');
    cerrar.classList.remove('d-none');
    
}

function onSessionClosed()
{
    var reg = document.getElementById( 'register' );
    var login = document.getElementById( 'login' );

    var perfil = document.getElementById( 'perfil' );
    var cerrar = document.getElementById( 'cerrar' );
   
    reg.classList.remove('d-none');
    login.classList.remove('d-none');

    perfil.classList.add('d-none');
    cerrar.classList.add('d-none');
}

function hideAll()
{
    var reg = document.getElementById( 'register' );
    var login = document.getElementById( 'login' );

    var perfil = document.getElementById( 'perfil' );
    var cerrar = document.getElementById( 'cerrar' );

    reg.classList.add('d-none');
    login.classList.add('d-none');

    perfil.classList.add('d-none');
    cerrar.classList.add('d-none');
}

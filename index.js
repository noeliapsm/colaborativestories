document.getElementById('signinButton').addEventListener('click', function() {
    document.getElementById('loader').style.display = 'block'; // Muestra el loader
    setTimeout(function() {
        window.location.href = 'signin.html'; // Redirige después de 1 segundo (simula carga)
    }, 1000);
});

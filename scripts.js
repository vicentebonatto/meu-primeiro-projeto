document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'admin' && password === 'admin') {
        alert('Login bem-sucedido!');
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos.';
    }
});

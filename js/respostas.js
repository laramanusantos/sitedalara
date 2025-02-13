// Obtém os parâmetros da URL.
const urlParams = new URLSearchParams(window.location.search);

// Define os valores nos elementos HTML correspondentes.
document.getElementById('response-name').innerText = urlParams.get('name');
document.getElementById('response-email').innerText = urlParams.get('email');
document.getElementById('response-whatsapp').innerText = urlParams.get('whatsapp');
document.getElementById('response-message').innerText = urlParams.get('message');

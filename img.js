// Obtener referencia al botón de inscripción y a la ventana emergente
const signupButton = document.getElementById('submit-button');
const modal = document.getElementById('myModal');

// Manejar el clic en el botón de inscripción
signupButton.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Verificar si el formulario está completo
    if (isFormComplete()) {
        // Si el formulario está completo, mostrar la ventana emergente
        showModal();
        // Aquí podrías enviar el formulario si es necesario
    } else {
        // Si el formulario no está completo, mostrar un mensaje de error o hacer algo más
        console.log('Por favor, completa todos los campos del formulario.');
    }
});

// Función para verificar si el formulario está completo
function isFormComplete() {
    const name = document.getElementById('name').value;
    const school = document.getElementById('school').value;
    const average = document.getElementById('average').value;
    const phone = document.getElementById('phone').value;
    const curp = document.getElementById('curp').value;
    const personType = document.getElementById('person-type').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const colony = document.getElementById('colony').value;
    const extNumber = document.getElementById('ext-number').value;
    const state = document.getElementById('state').value;
    const municipality = document.getElementById('municipality').value;
    const locality = document.getElementById('locality').value;
    const postalCode = document.getElementById('postal-code').value;
    const email = document.getElementById('email').value;

    // Verificar si todos los campos obligatorios están completos
    if (name && school && average && phone && curp && personType && gender && address && colony && extNumber && state && municipality && locality && postalCode && email) {
        return true;
    } else {
        return false;
    }
}

// Manejar el clic en el botón de cerrar
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
    // Ocultar la ventana emergente al hacer clic en el botón de cerrar
    modal.style.display = 'none';
    // Reiniciar la página
    window.location.reload();
});

// Función para mostrar la ventana emergente
function showModal() {
    // Obtener la ventana emergente
    const modal = document.getElementById('myModal');
    // Mostrar la ventana emergente
    modal.style.display = 'block';
}


// Obtener la fecha actual y formatearla
const mostrarFecha = () => {
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = new Date().toLocaleDateString('es-ES', opciones);
    
    // Insertar la fecha en el HTML
    document.getElementById('fecha-actual').textContent = fecha;
}

// Ejecutar la función cuando la página cargue
mostrarFecha();
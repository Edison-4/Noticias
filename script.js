// Función para mostrar la fecha (la que ya tenías)
const mostrarFecha = () => {
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = new Date().toLocaleDateString('es-ES', opciones);
    document.getElementById('fecha-actual').textContent = fecha;
}
mostrarFecha();

// --- NUEVA FUNCIÓN PARA FILTRAR NOTICIAS ---

// 1. Seleccionamos todos los enlaces del menú y todas las noticias
const enlacesMenu = document.querySelectorAll('#menu-categorias a');
const todasLasNoticias = document.querySelectorAll('.item-noticia');

// 2. Le decimos a cada enlace del menú qué hacer cuando le hagan clic
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', (evento) => {
        evento.preventDefault(); // Evita que la página salte hacia arriba de golpe
        
        // Obtenemos qué categoría se hizo clic (ej: "tecnologia")
        const filtroSeleccionado = evento.target.getAttribute('data-filtro');

        // 3. Revisamos noticia por noticia
        todasLasNoticias.forEach(noticia => {
            const categoriaNoticia = noticia.getAttribute('data-categoria');

            // Si tocaste "Inicio" (todas) o si la categoría coincide con lo que tocaste, la mostramos
            if (filtroSeleccionado === 'todas' || filtroSeleccionado === categoriaNoticia) {
                noticia.style.display = ''; // Lo deja con su estilo normal
            } else {
                // Si no coincide, la ocultamos
                noticia.style.display = 'none'; 
            }
        });
    });
});
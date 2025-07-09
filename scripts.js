// Contenido HTML para cada sección
const secciones = {
  "inicio": `
    <h2 class="text-3xl font-semibold text-blue-600 mb-4">Bienvenido a Servicios Personales</h2>
    <p class="text-gray-700 mb-6">Tu empresa financiera de confianza, comprometida con tus metas y bienestar económico.</p>
    <img src="https://images.unsplash.com/photo-1521790366324-7f3b98ab7b68?auto=format&fit=crop&w=800&q=80" alt="Finanzas" class="rounded shadow mx-auto max-w-full h-auto" />
  `,
  "sobre-nosotros": `
    <h2 class="text-3xl font-semibold text-blue-600 mb-4">Sobre Nosotros</h2>
    <p class="text-gray-700 mb-6">
      Somos una empresa financiera con más de 10 años de experiencia en el mercado,
      ofreciendo soluciones personalizadas y confiables para cada cliente.
    </p>
    <p class="text-gray-700">
      Nuestro equipo está conformado por expertos que se dedican a brindarte la mejor asesoría.
    </p>
  `,
  "servicios": `
    <h2 class="text-3xl font-semibold text-blue-600 mb-4">Nuestros Servicios</h2>
    <ul class="list-disc list-inside text-gray-700 space-y-2">
      <li>Préstamos personales con tasas competitivas</li>
      <li>Asesoría financiera personalizada</li>
      <li>Inversiones seguras y rentables</li>
      <li>Planes de ahorro flexibles</li>
    </ul>
  `,
  "contacto": `
    <h2 class="text-3xl font-semibold text-blue-600 mb-4">Contacto</h2>
    <form class="max-w-md mx-auto space-y-4" onsubmit="return enviarFormulario(event)">
      <div>
        <label class="block text-gray-700 mb-1" for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" required
               class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label class="block text-gray-700 mb-1" for="email">Correo electrónico</label>
        <input type="email" id="email" name="email" required
               class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label class="block text-gray-700 mb-1" for="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows="4" required
                  class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>
      <button type="submit"
              class="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
        Enviar
      </button>
    </form>
    <div id="respuesta" class="mt-4 text-green-600 font-semibold"></div>
  `
};

// Función para cargar contenido en el main
function cargarSeccion(nombre) {
  const main = document.getElementById("main-content");
  main.innerHTML = secciones[nombre] || "<p>Sección no encontrada.</p>";
}

// Función para manejar el envío del formulario (simulado)
function enviarFormulario(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !email || !mensaje) {
    alert("Por favor, llena todos los campos.");
    return false;
  }

  document.getElementById("respuesta").textContent = `Gracias, ${nombre}. Hemos recibido tu mensaje.`;
  event.target.reset();
  return false;
}

// Evento para los botones de navegación
document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    cargarSeccion(btn.getAttribute("data-section"));
  });
});

// Carga la sección 'inicio' por defecto al abrir la página
window.onload = () => {
  cargarSeccion("inicio");
};


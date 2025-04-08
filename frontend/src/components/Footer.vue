<template>
  <footer class="bg-notarial-subtext text-notarial-bg">
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div class="space-y-6">
          <div class="flex items-center">
            <img :src="logo" alt="Logo" class="h-12 w-auto bg-white rounded-full" />
            <span class="ml-3 text-xl font-bold">Estudio Notarial</span>
          </div>
          <p class="text-notarial-bg/80 text-sm leading-relaxed">
            Comprometidos con la excelencia en servicios notariales y asesoría legal personalizada.
          </p>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Enlaces Rápidos</h3>
          <ul class="space-y-3">
            <li>
              <a href="#hero-section" class="text-notarial-bg/80 hover:text-notarial-primary transition-colors flex items-center">
                <span class="w-1.5 h-1.5 bg-notarial-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Inicio
              </a>
            </li>
            <li>
              <a href="#services-section" class="text-notarial-bg/80 hover:text-notarial-primary transition-colors flex items-center">
                <span class="w-1.5 h-1.5 bg-notarial-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Servicios
              </a>
            </li>
            <li>
              <a href="#about-section" class="text-notarial-bg/80 hover:text-notarial-primary transition-colors flex items-center">
                <span class="w-1.5 h-1.5 bg-notarial-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#contact" class="text-notarial-bg/80 hover:text-notarial-primary transition-colors flex items-center">
                <span class="w-1.5 h-1.5 bg-notarial-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Contacto</h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <div class="flex-shrink-0 w-5 h-5 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-notarial-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <a href="https://www.google.com/maps/place/Escribana+Publica+Mary+Iglesias+Sosa/@-34.904794,-56.189369,15z/data=!4m6!3m5!1s0x959f812cc812a93b:0x3a3d475c5682f183!8m2!3d-34.9046979!4d-56.1893796!16s%2Fg%2F11tx4ydwky?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank" class="ml-3 text-notarial-bg/80 hover:text-notarial-primary transition-colors">Colonia 1245, Ap 201</a>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 w-5 h-5 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-notarial-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span class="ml-3 text-notarial-bg/80">+598 999 438 24</span>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 w-5 h-5 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-notarial-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="ml-3 text-notarial-bg/80">maryiglesiassosa@gmail.com</span>
            </li>
          </ul>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Síguenos</h3>
          <div class="flex space-x-4">
            <a href="#" class="bg-notarial-bg/10 hover:bg-notarial-bg/20 p-3 rounded-full transition-colors group">
              <svg class="h-6 w-6 text-notarial-bg/80 group-hover:text-notarial-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" class="bg-notarial-bg/10 hover:bg-notarial-bg/20 p-3 rounded-full transition-colors group">
              <svg class="h-6 w-6 text-notarial-bg/80 group-hover:text-notarial-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" class="bg-notarial-bg/10 hover:bg-notarial-bg/20 p-3 rounded-full transition-colors group">
              <svg class="h-6 w-6 text-notarial-bg/80 group-hover:text-notarial-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-notarial-bg/20">
      <div class="max-w-7xl mx-auto px-6 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-sm text-notarial-bg/60">© 2025 Estudio Notarial. Todos los derechos reservados.</p>
          <div class="flex space-x-6">
            <a href="#" class="text-sm text-notarial-bg/60 hover:text-notarial-primary transition-colors">Política de Privacidad</a>
            <a href="#" class="text-sm text-notarial-bg/60 hover:text-notarial-primary transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const logo = new URL('@/assets/notarial-logo.png', import.meta.url).href;
</script>

/* ==================================================
   FILTRO DE PRODUCTOS
================================================== */

const botonesFiltro = document.querySelectorAll(".boton-filtro");

const tarjetasProducto = document.querySelectorAll(".tarjeta-producto");


botonesFiltro.forEach(function (boton) {

    boton.addEventListener("click", function () {

        // Obtener categoría seleccionada

        const filtroSeleccionado =
            boton.getAttribute("data-filtro");


        // Cambiar botón activo

        botonesFiltro.forEach(function (botonActual) {

            botonActual.classList.remove("activo");

        });


        boton.classList.add("activo");


        // Mostrar u ocultar productos

        tarjetasProducto.forEach(function (tarjeta) {

            const categorias =
                tarjeta.getAttribute("data-categoria");


            if (
                filtroSeleccionado === "todos" ||
                categorias.includes(filtroSeleccionado)
            ) {

                tarjeta.classList.remove("oculto");

            } else {

                tarjeta.classList.add("oculto");

            }

        });

    });

});
// ENTREGABLE TAREA 1

//  Seleccionamos el elemento con ID "contenedorCartas"

const contenedorCartas = document.querySelector('#contenedorCartas');

// 1.Su primer hijo. El primer elemento que hay dentro del contenedor

const primer_hijo = contenedorCartas.firstElementChild;
console.log('Primer hijo:', primer_hijo);

// 2.Su tercer hijo. El segundo elemento que hay dentro del contenedor

const tercer_hijo = contenedorCartas.children[2];
console.log('Tercer hijo:', tercer_hijo);

// 3.El siguiente hermano del tercer hijo. El cuarto hermano.

const siguiente_hermano_tercer_hijo = tercer_hijo.nextElementSibling;
console.log('Siguiente hermano del tercer hijo:', siguiente_hermano_tercer_hijo);

// 4.Su último hijo. El cuarto hermano. En este caso coinciden la consulta 3 y la 4, ya que hay cuatro hermanos.

const ultimo_hijo = contenedorCartas.lastElementChild;
console.log('Último hijo:', ultimo_hijo);

// 5.Su padre.Sería el contenedor

const padre = contenedorCartas.parentElement;
console.log('Padre:', padre);

// 6.El padre del padre. Sería el body

const padre_del_padre = padre.parentElement;
console.log('Padre del padre:', padre_del_padre);

// 7.Su hermano anterior. Sería el título.

const hermano_anterior = contenedorCartas.previousElementSibling;
console.log('Hermano anterior:', hermano_anterior);

// 8.Las clases del último hijo.

const clases_ultimo_hijo = ultimo_hijo.classList;
console.log('Clases del último hijo:', clases_ultimo_hijo);  
  
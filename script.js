function crearCorazon() {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(corazon);
  
    setTimeout(() => {
      corazon.remove();
    }, 4000);
  }
  
  
  setInterval(crearCorazon, 500);


  window.onload = function() {
    const modal = document.getElementById("miModal");
    const btnCerrar = document.getElementById("cerrarModal");
    const contenido = document.getElementById("contenidoPagina");
  
    // Mostrar modal y aplicar blur al cargar
    document.body.classList.add("no-scroll");
    contenido.classList.add("blur");
  
    btnCerrar.onclick = function() {
      modal.style.display = "none";
      document.body.classList.remove("no-scroll");
      contenido.classList.remove("blur");
    }
  }



//para la musica


const audios = document.querySelectorAll("audio");
const contenedores = document.querySelectorAll(".cancion");

// Función para quitar la clase a todos
function limpiarAnimaciones() {
  contenedores.forEach(c => c.classList.remove("reproduciendo"));
}

// Añadir evento de reproducción a cada audio

audios.forEach(audio => {
  audio.addEventListener("play", function() {
    limpiarAnimaciones();
    this.parentElement.classList.add("reproduciendo");
    
    audios.forEach(a => {
      if (a !== this) a.pause();
      a.currentTime = 0;
    });
  });
});


const mensajes = [
    "Eres mi persona favorita en el mundo 🌍💖",
    "Gracias por cada sonrisa que me regalas 😊",
    "Contigo todo es mejor, siempre ✨",
    "No dejo de pensar en ti ni un segundo 🥰",
  ];
  let indice = 0;
  const mensajeElemento = document.getElementById('mensajeEspecial');
  
  setInterval(() => {
    indice = (indice + 1) % mensajes.length;
    mensajeElemento.style.opacity = 0;
    setTimeout(() => {
      mensajeElemento.textContent = mensajes[indice];
      mensajeElemento.style.opacity = 1;
    }, 500);
  }, 5000);
  

  document.getElementById("btnDetalle").addEventListener("click", function() {
    fetch("carta/index2.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("contenidoModal1").innerHTML = data;
        document.getElementById("modal1").style.display = "flex";
      })
      .catch(error => console.error('Error cargando la carta:', error));
  });
  
  



  const fechaObjetivo = new Date("2025-06-15T22:44:00").getTime();
  const cuentaElem = document.getElementById("cuenta");
  const pantallaBloqueo = document.getElementById("pantallaBloqueo");
  const preguntaPersonal = document.getElementById("preguntaPersonal");
  
  const intervalo = setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;
  
    if (diferencia <= 0) {
      clearInterval(intervalo);
      pantallaBloqueo.style.display = "none";
      preguntaPersonal.style.display = "flex";  // Mostrar pregunta personal
    } else {
      const horas = Math.floor((diferencia / (1000 * 60 * 60)));
      const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
      cuentaElem.textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }
  }, 1000);


  function continuar() {
    const respuesta = document.getElementById("nombreInput").value.trim().toLowerCase();
    if(respuesta === "7 cruces") {
      preguntaPersonal.style.display = "none";
      // Aquí puedes poner un mensaje bonito o animación si quieres
      alert("Parece que sabes 💖");
    } else {
      alert("Mmm no es esa 😏");
    }
  }
  
  
  

  
  
  
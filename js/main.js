document.getElementById("year").textContent = new Date().getFullYear();

// Fecha mínima: hoy
const fecha = document.getElementById("fecha");
fecha.min = new Date().toISOString().split("T")[0];

document.getElementById("booking-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));

  // TODO: conectar con el backend, Formspree, Google Sheets o Calendly.
  console.log("Nueva solicitud de cita:", data);

  document.getElementById("success-name").textContent = data.nombre.split(" ")[0];
  document.getElementById("form-wrap").style.display = "none";
  document.getElementById("success").classList.add("show");
});

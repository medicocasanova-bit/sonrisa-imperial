// Número de WhatsApp de la clínica: código de país + número, sin espacios ni "+".
// Ejemplo para España: 34612345678
const WHATSAPP_NUMERO = "34655466888";

document.getElementById("year").textContent = new Date().getFullYear();

// Fecha mínima: hoy
const fecha = document.getElementById("fecha");
fecha.min = new Date().toISOString().split("T")[0];

document.getElementById("booking-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));

  const fechaLegible = new Date(data.fecha + "T12:00:00").toLocaleDateString("es", {
    weekday: "long", day: "numeric", month: "long",
  });

  const mensaje = [
    "Hola, quiero agendar una cita en Sonrisa Imperial.",
    "",
    `*Nombre:* ${data.nombre}`,
    `*Teléfono:* ${data.telefono}`,
    `*Correo:* ${data.email}`,
    `*Motivo:* ${data.servicio}`,
    `*Fecha preferida:* ${fechaLegible}`,
    `*Horario:* ${data.hora}`,
    `*Prefiere que lo contacten por:* ${data.contacto}`,
  ].join("\n");

  window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`, "_blank");

  document.getElementById("success-name").textContent = data.nombre.split(" ")[0];
  document.getElementById("form-wrap").style.display = "none";
  document.getElementById("success").classList.add("show");
});

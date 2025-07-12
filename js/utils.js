// Capitaliza la primera letra y pone el resto en minúscula
export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Muestra notificación estilo Toastify
export const notification = (text, color, duration = 3000) => {
  Toastify({
    text,
    duration,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      borderRadius: "8px",
      padding: "15px",
      background: color,
    },
  }).showToast();
};

// Devuelve una fecha en formato: "06-Jul-2025"
export const formatDate = (inputDate) => {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  const [year, month, day] = inputDate.split("-");
  const monthAbbr = months[parseInt(month, 10) - 1];

  return `${day}-${monthAbbr}-${year}`;
};

// Convierte una fecha en formato: "06-Jul-2025" → "2025-07-06" para input type="date"
export const formatDateForInput = (dateStr) => {
  const [day, monthAbbr, year] = dateStr.split("-");

  const months = {
    Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
    Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
  };

  const month = months[monthAbbr];
  const paddedDay = day.padStart(2, "0");

  return `${year}-${month}-${paddedDay}`;
};

// Genera número aleatorio de 14 dígitos
export const random14Digits = () => {
  return Math.floor(Math.random() * 9e13 + 1e13).toString();
};

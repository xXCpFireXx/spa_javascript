// =================== SERVICIOS PARA API (json-server) ===================
// Estas funciones permiten la comunicación con una base de datos simulada mediante JSON Server

// URL base para la colección de usuarios (estudiantes)
const BASE_URL_STUDENTS = "http://localhost:3000/users";

// URL base para los usuarios del sistema (usado en el login)
const BASE_URL_SYSTEM = "http://localhost:3000/user";


// =================== FUNCIONES CRUD PARA USUARIOS ===================

// GET: Obtener todos los usuarios registrados en la "base de datos"
export const getUsers = async () => {
  try {
    const res = await fetch(BASE_URL_STUDENTS); // Realiza la solicitud GET
    return await res.json(); // Convierte la respuesta en formato JSON
  } catch (error) {
    console.error("Error getting users:", error);
    return []; // Retorna arreglo vacío si ocurre error
  }
};

// POST: Agregar nuevo usuario a la base de datos
export const addUser = async (user) => {
  try {
    const res = await fetch(BASE_URL_STUDENTS, {
      method: "POST", // Método HTTP para crear recurso
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user), // Convierte el objeto usuario a JSON
    });
    return await res.json(); // Retorna la respuesta procesada
  } catch (error) {
    console.error("Error adding user:", error);
    throw error; // Lanza el error para manejarlo externamente
  }
};

// PUT: Actualizar un usuario existente según su ID
export const updateUser = async (id, updatedUser) => {
  try {
    const res = await fetch(`${BASE_URL_STUDENTS}/${id}`, {
      method: "PUT", // Método para reemplazar por completo el recurso
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });
    return await res.json();
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// DELETE: Eliminar un usuario específico por su ID
export const deleteUser = async (id) => {
  try {
    const res = await fetch(`${BASE_URL_STUDENTS}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete user");
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};


// =================== USUARIOS DEL SISTEMA (Login) ===================

// GET: Obtener todos los usuarios del sistema que tienen acceso (usado para validación de login)
export const getUsersSystem = async () => {
  try {
    const res = await fetch(BASE_URL_SYSTEM); // Consulta GET
    return await res.json(); // Devuelve arreglo de usuarios con sus credenciales
  } catch (error) {
    console.error("Error getting system's users:", error);
    return []; // En caso de error, retorna arreglo vacío
  }
};

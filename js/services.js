const BASE_URL_STUDENTS = "http://localhost:3000/users";
const BASE_URL_SYSTEM = "http://localhost:3000/user";

// GET: Obtener todos los usuarios
export const getUsers = async () => {
  try {
    const res = await fetch(BASE_URL_STUDENTS);
    return await res.json();
  } catch (error) {
    console.error("Error getting users:", error);
    return [];
  }
};

// POST: Agregar nuevo usuario
export const addUser = async (user) => {
  try {
    const res = await fetch(BASE_URL_STUDENTS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

// PUT: Actualizar usuario
export const updateUser = async (id, updatedUser) => {
  try {
    const res = await fetch(`${BASE_URL_STUDENTS}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });
    return await res.json();
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// DELETE: Eliminar usuario
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


// API usuarios del sistema

// GET: Obtener todos los usuarios del sistema
export const getUsersSystem = async () => {
  try {
    const res = await fetch(BASE_URL_SYSTEM);
    return await res.json();
  } catch (error) {
    console.error("Error getting system's users:", error);
    return [];
  }
};
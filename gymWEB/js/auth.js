// Autenticación del sistema
function doLogin() {
  const email = EL("#loginEmail").value.trim();
  const pass = EL("#loginPass").value.trim();
  if (email === "admin@gym.com" && pass === "admin123") {
    sessionStorage.setItem("auth", "ok");
    EL("#loginView").classList.add("hidden");
    EL("#appView").classList.remove("hidden");
    initApp();
  } else {
    alert("Credenciales incorrectas");
  }
}

function logout() {
  sessionStorage.removeItem("auth");
  location.reload();
}

// Verificar autenticación al cargar la página
function checkAuth() {
  const isAuth = sessionStorage.getItem("auth");
  if (isAuth === "ok") {
    EL("#loginView").classList.add("hidden");
    EL("#appView").classList.remove("hidden");
    initApp();
  }
}

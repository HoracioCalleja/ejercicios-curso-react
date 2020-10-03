const obtenerPersonaFake = require("./library");

const buildAndLogPersona = (data) => {
  const { gender, email, name, location, login } = data.results[0];
  const persona = {
    genero: gender,
    email,
    nombre: name.first,
    pais: location.country,
    estado: location.state,
    ciudad: location.city,
    codigoPostal: location.postcode,
    calle: location.street,
    nombreUsuario: login.username,
    contrasena: login.password,
  };
  console.log(persona);
};

obtenerPersonaFake(buildAndLogPersona);

const obtenerPersonaFake = require("./library");

const buildPersona = (data) => {
  const { gender, email, name, location, login } = data.results[0];
  const persona = {
    genero: gender,
    email,
    nombre: name.first,
    pais: location.country,
    estado: location.state,
    ciudad: location.city,
    codigoPostal: location.postcode,
    calle: location.street.name,
    numero: location.street.number,
    nombreUsuario: login.username,
    contrasena: login.password,
  };
  console.log(persona);
};

obtenerPersonaFake().then((data) => buildPersona(data));

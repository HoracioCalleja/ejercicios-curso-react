
const obtenerChiste = require("./library");

const decirChiste = chisteData => {
  const {setup , punchline} = chisteData[0];
  console.log("Setup: ",setup)
  console.log("Punch: ",punchline)
}

obtenerChiste().then((chiste) => decirChiste(chiste));

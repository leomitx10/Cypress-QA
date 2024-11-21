const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true, // Relatórios individuais em HTML serão desativados; usaremos o consolidado
    json: true, // JSON necessário para combinar relatórios
    timestamp: "mmddyyyy_HHMMss"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Configurações adicionais podem ser feitas aqui
    },
    testIsolation: false,
  },
});

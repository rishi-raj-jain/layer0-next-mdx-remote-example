// This file was automatically added by layer0 deploy.
// You should commit this file to source control.
const { Router } = require('@layer0/core/router')

module.exports = new Router().fallback(({ renderWithApp }) => {
  renderWithApp()
})

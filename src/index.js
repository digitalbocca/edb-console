'use strict'

/**
 * edb-console
 *
 * @file index.js
 * @description Emite mensagens no console que podem ser desativadas em produção.
 * @since v0.1.0
 *
 * @copyright (c)2019 - Estúdio Digital Bocca - https://estudiodigitalbocca.com.br/
 * @author Gabriel Bertola Bocca - gabriel at estudiodigitalbocca.com.br
 *
 * @version v1.0.0
 */

const edbConsole = {
  edbConsoleActive: false,
  config (status) {
    this.edbConsoleActive = status
  },
  log (msg) {
    if (this.edbConsoleActive) {
      console.log(msg)
    }
  },
  error (msg) {
    if (this.edbConsoleActive) {
      console.error(msg)
    }
  },
  warn (msg) {
    if (this.edbConsoleActive) {
      console.warn(msg)
    }
  },
  info (msg) {
    if (this.edbConsoleActive) {
      console.info(msg)
    }
  },
  trocar () {
    this.edbConsoleActive = !this.edbConsoleActive
    console.log(`EDB Console - Active: ${this.edbConsoleActive}`)
  }
}

export default edbConsole

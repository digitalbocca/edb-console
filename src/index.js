'use strict'

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

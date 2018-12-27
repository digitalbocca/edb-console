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
  trocar () {
    this.edbConsoleActive = !this.edbConsoleActive
    console.log(`EDB Console - Active: ${this.edbConsoleActive}`)
  }
}

export default edbConsole
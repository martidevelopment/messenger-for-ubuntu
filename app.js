const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'messenger-logo.png'),
  })

  win.loadURL('https://messenger.com')
  win.removeMenu(true)
}

app.whenReady().then(() => {
    createWindow()
})

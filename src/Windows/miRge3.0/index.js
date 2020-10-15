const electron = require('electron')
const {app, BrowserWindow} = electron


app.on('ready',() => {
	let win = new BrowserWindow({width:1400, height:600, icon: __dirname + './build/mirge_icon.png',
	})
	win.loadURL(`file://${__dirname}/index.html`)
	//win.setMenu(null);
})

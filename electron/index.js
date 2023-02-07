const {app, BrowserWindow, ipcMain, dialog} = require('electron');
const path = require('path');
const url = require('url');
const { testTeradata } = require('./fetch');

app.commandLine.appendSwitch('ignore-connections-limit');

function createWindow() {
    const startUrl =
        process.env.ELECTRON_START_URL ||
        url.format({
            pathname: path.join(__dirname, '../index.html'),
            protocol: 'file:',
            slashes: true,
        });
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preloader.js'),
        },
    });
    win.loadURL(startUrl);
    win.webContents.openDevTools();
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    ipcMain.on('fetch-from-main', async event => {
        console.log('Start Teradata');
        const res = await testTeradata();
        console.log('response from main => ');
    });
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

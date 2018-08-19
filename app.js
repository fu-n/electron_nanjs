"use strct";
const electron      = require("electron");
const BrowserWindow = electron.BrowserWindow;
const app           = electron.app;
const dotenv        = require('dotenv').config();

let browserWindow = null;

app.on("ready", () => {
    browserWindow = new BrowserWindow({width: 1280, height: 720, useContentSize: true});
    //browserWindow.loadURL(`file://${__dirname}/Builds/index.html`);
    browserWindow.loadURL(`file://${__dirname}/Debug/debug.html`);
    browserWindow.on("closed", () => {
        browserWindow = null;
    });
});

app.on("window-all-closed", () => {
    if (process.platform != "darwin") {
        app.quit();
    }
});

var electron = require('electron');
var remote   = electron.remote;
var enanjs   = remote.require('./electron_nanjs');

function getEnv() {
    var env      = enanjs.getEnv()
    var clientId = enanjs.getClientId()
    var response = '';
    if (!env || !clientId) {
        response = 'no .env file? nanjs work in default config maybe.';
    } else {
        response = "ENV=" + env + ", CLIENT_ID=" + clientId;
    }
    setResponse("getEnvResponse", response);
}

function generateMnemonic() {
    var mnemonic = enanjs.generateMnemonic()
    setValue("createWallet.mnemonic", mnemonic);
    setResponse("generateMnemonicResponse", mnemonic);
}

function createWallet() {
    var mnemonic = getValue("createWallet.mnemonic");
    var password = getValue("createWallet.password");
    enanjs.createWallet(mnemonic, password).then((response) => {
        setResponse("createWalletResponse", JSON.stringify(response));
    }).catch((err) => {
        setResponse("createWalletResponse", JSON.stringify(err));
    });
}

function importWallet() {
    var keystore = getValue("importWallet.keystore");
    var password = getValue("importWallet.password");
    enanjs.importWallet(keystore, password).then((response) => {
        setResponse("importWalletResponse", JSON.stringify(response));
    }).catch((err) => {
        setResponse("importWalletResponse", JSON.stringify(err));
    });
}

function generateAddress() {
    var address    = getValue("generateAddress.address");
    var privateKey = getValue("generateAddress.privateKey");
    enanjs.generateAddress(address, privateKey).then((response) => {
        setResponse("generateAddressResponse", JSON.stringify(response));
    }).catch((err) => {
        setResponse("generateAddressResponse", JSON.stringify(err));
    });
}

function generateQRCode() {
    var address = getValue("generateQRCode.address");
    enanjs.generateQRCode(address).then((response) => {
        setResponse("generateQRCodeResponse", "<img src=\"" + response + "\">");
    }).catch((err) => {
        setResponse("generateQRCodeResponse", JSON.stringify(err));
    });
}

function transfer() {
    var from       = getValue("transfer.from");
    var to         = getValue("transfer.to");
    var amount     = getValue("transfer.amount");
    var message    = getValue("transfer.message");
    var privateKey = getValue("transfer.privateKey");
    enanjs.transfer(from, to, amount, message, privateKey).then((response) => {
        setResponse("transferResponse", JSON.stringify(response));
    }).catch((err) => {
        setResponse("transferResponse", JSON.stringify(err));
    });
}

function history() {
    var address = getValue("history.address");
    var page    = getValue("history.page");
    enanjs.history(address, page).then((response) => {
        setResponse("historyResponse", JSON.stringify(response));
    }).catch((err) => {
        setResponse("historyResponse", JSON.stringify(err));
    });
}

function rate() {
    var currency = getValue("rate.currency");
    enanjs.rate(currency).then((response) => {
        setResponse("rateResponse", JSON.stringify(response));
    }).catch((err) => {
        setResponse("rateResponse", JSON.stringify(err));
    });
}

function balance() {
    var address = getValue("balance.address");
    enanjs.balance(address).then((response) => {
        setResponse("balanceResponse", JSON.stringify(response));
    }).catch((err) => {
        setResponse("balanceResponse", JSON.stringify(err));
    });
}

function getValue(id) {
    var element = document.getElementById(id);
    return element.value;
}

function setValue(id, value) {
    var element = document.getElementById(id);
    element.value = value;
}

function setResponse(id, value) {
    var element = document.getElementById(id);
    element.innerHTML = value;
}

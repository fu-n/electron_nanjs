const nanjs = require("nanjs");
class ElectronNanjs {
    generateMnemonic() {
        var response = nanjs.wallet.generateMnemonic();
        console.log('generateMnemonic', response);
        return response;
    }

    async createWallet(mnemonic, password) {
        var response = await nanjs.wallet.createWallet(mnemonic, password);
        console.log('createWallet', response);
        return response;
    }

    async importWallet(keystore, password) {
        var response = await nanjs.wallet.importWallet(keystore, password);
        console.log('importWallet', response);
        return response;
    }

    async generateAddress(address, privateKey) {
        var response = await nanjs.wallet.generateAddress(address, privateKey);
        console.log('generateAddress', response)
        return response;
    }

    async generateQRCode(address) {
        var response = await nanjs.wallet.QRCodeAddress(address);
        console.log('generateQRCode', response);
        return response;
    }

    async transfer(from, to, amount, message, privateKey) {
        var txHash = await nanjs.transaction.getRelayerTxHash(from, to, amount, message);
        console.log('transferResponse', txHash);
        let data = txHash.data
        let hash = txHash.hash
        let addr = txHash.destinationAddress
        var dataHash = await nanjs.transaction.getHashSign(data, hash, privateKey, addr);
        console.log('transferResponse', dataHash);
        var response = await nanjs.transaction.send(dataHash);
        console.log('transferResponse', response);
        return response;
    }

    async history(address, page) {
        var response = await nanjs.transaction.history(address, page);
        console.log('history', response)
        return response;
    }

    async rate(currency) {
        var response = await nanjs.transaction.nanjRate(currency);
        console.log('rate', response)
        return response;
    }

    async balance(address) {
        var response = await nanjs.transaction.nanjBalance(address);
        console.log('balance', response)
        return response;
    }
}
module.exports = new ElectronNanjs();

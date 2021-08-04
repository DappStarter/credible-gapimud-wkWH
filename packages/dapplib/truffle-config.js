require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom nasty flip spot chat crater remain umbrella idea enter front simple'; 
let testAccounts = [
"0xe3c28d7b3e3149b73ccc6cf469dabc8f9f3c5033dee3db87e9b1a44e00b3ef5a",
"0xccee7cbf1e23380ce075966773e042a075b2508439d1240769d9458c2a8bbd5e",
"0xbbe36beebb0452aa0d593a69b2889009c898b069e684e25cbe26dbc3cb24f4be",
"0xbef0d0b10223c84b5768f2a308b162ac6c64d3bde79b0e11be30f0f1275f3d73",
"0x4767bce39d319c98629355b9b27170db0cc5d160220764f0bb185f6a25f5f945",
"0xb86075e15de60837fa4aab4500d6dfe68ac24185531e40ddc40a92f80ed16f3e",
"0xe77f91c5fe8ab3a18021d885de655d4cafec85965408ad155c5165a7cfdb7178",
"0x227b665c472f3e84dca5073c6df788d24bc0ebe06664980f874047790130b99f",
"0x4a6afdfe98fb8c359e692c0a11a2a26989cb7c0efd914560dd0afbf7b3f58a67",
"0x5ae74ab447d8de7a1a535a1aefacbd5ffbf9d0f80d3d503d4a66fcd593680035"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


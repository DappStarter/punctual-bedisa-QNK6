require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remain erosion good entire success gas'; 
let testAccounts = [
"0x4c2af639971421b79b28f50cd3f199263208b00df01c28158ef78a4f5abca845",
"0x8ca378a202e373dae5d96b4dd593d65d29376c9c44e15fc434d6f678e347737a",
"0x6570c303d8676c7756d7e98e9a5a825240967399775fc1faf90437731bf9d116",
"0x910758a2eeb2fd76d43ee580b58b859b04330f62c830efc2c26dc61aa35aa964",
"0x2bc83647756425c12712919376e22917a7a66ae8d8eff4ebc0c5896122cd7b57",
"0x2c097161c3d005f4158309319b2415745adbdbfa50dcaaf1d33f735e8a8caeae",
"0xfa5e2c9720f163445c5b7f361f92b61230dc46586c402b0a4a7cd23ca5ae58f6",
"0x29c3911a5c2ad394acb3397686a4ce8b17e096e6f4e27e8e0512461f8025739f",
"0x1ac40624caf3034be70e607bd9f549d1aaa8817bbc873a101390b46dc728ba6e",
"0x327334ae22318fbcb08d019264261e060e3ef6017da2099fb2f8c0a000b0abaa"
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


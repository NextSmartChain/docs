---
titleTemplate: NEXT Blockchain
description: Register a validator name and icon to help NEXT delegators find you.
head:
   - - meta
     - property: og:image
       content: /next-logo.png
   - - meta
     - property: twitter:image
       content: /next-logo.png
---

# Register a Validator

Register a validator name and icon to help NEXT delegators find you.

> Mainnet contract

```solidity
TBD
```

## Config File

Create a config file using `JSON` format that contains the following parameters (you can also leave any parameters empty):

| Name    | Description                                               |
|---------|-----------------------------------------------------------|
| name    | Name of the validator                                     |
| logoUrl | Validator logo (PNG, JPEG, SVG) - 100px x 100px is enough |
| website | Website URL                                               |
| contact | Contact URL such as Telegram or Discord                   |

```json
{
  "name": "VALIDATOR_NAME",
  "logoUrl": "LOGO_URL",
  "website": "WEBSITE_URL",
  "contact": "CONTACT_URL"
}
```

::: details Example JSON

```json
{
  "name": "next-token",
  "logoUrl": "https://nextsmartchain.com/next-logo-512x512.png",
  "website": "https://nextsmartchain.com",
  "contact": "https://t.me/nextsmartchain"
}
```

:::

Then host the file somewhere, so it is publicly accessible! Ex: [some IPFS]

## Update your info in the smart contract

:::tabs

== From Console

1. Connect to your validator node
2. Open up a NEXT console session via `next attach`
3. Load the ValidatorInfo contract ABI and instantiate the contract

   ```solidity
   abi = JSON.parse('[{"type":"constructor","stateMutability":"nonpayable","inputs":[]},{"type":"error","name":"AddressEmptyCode","inputs":[{"type":"address","name":"target","internalType":"address"}]},{"type":"error","name":"ERC1967InvalidImplementation","inputs":[{"type":"address","name":"implementation","internalType":"address"}]},{"type":"error","name":"ERC1967NonPayable","inputs":[]},{"type":"error","name":"FailedInnerCall","inputs":[]},{"type":"error","name":"InvalidInitialization","inputs":[]},{"type":"error","name":"NotInitializing","inputs":[]},{"type":"error","name":"OwnableInvalidOwner","inputs":[{"type":"address","name":"owner","internalType":"address"}]},{"type":"error","name":"OwnableUnauthorizedAccount","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"error","name":"UUPSUnauthorizedCallContext","inputs":[]},{"type":"error","name":"UUPSUnsupportedProxiableUUID","inputs":[{"type":"bytes32","name":"slot","internalType":"bytes32"}]},{"type":"event","name":"InfoUpdated","inputs":[{"type":"uint256","name":"stakerID","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Initialized","inputs":[{"type":"uint64","name":"version","internalType":"uint64","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Upgraded","inputs":[{"type":"address","name":"implementation","internalType":"address","indexed":true}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"UPGRADE_INTERFACE_VERSION","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"getInfo","inputs":[{"type":"uint256","name":"validatorId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"initialize","inputs":[{"type":"address","name":"initialOwner","internalType":"address"},{"type":"address","name":"sfcContractAddress_","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"proxiableUUID","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"sfcContractAddress","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateInfo","inputs":[{"type":"string","name":"configUrl","internalType":"string"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateSfcContractAddress","inputs":[{"type":"address","name":"sfcContractAddress_","internalType":"address"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"upgradeToAndCall","inputs":[{"type":"address","name":"newImplementation","internalType":"address"},{"type":"bytes","name":"data","internalType":"bytes"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"validatorInfos","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]}]')
   validatorInfoContract = web3.next.contract(abi).at("0x")
   ```

4. Unlock your account

   ```solidity
   next.personal.unlockAccount("WALLET_ADDRESS")
   ```

5. Call the `updateInfo` function of the ValidatorInfo contract (make sure you have enough XN on your wallet to cover the transaction fee)

   ```solidity
   validatorInfoContract.updateInfo("CONFIG_URL", { from: "WALLET_ADDRESS" })
   // e.g.: validatorInfoContract.updateInfo("https://ipfs.com/nextsmartchain.json", { from: "0x0" })
   ```

   :::

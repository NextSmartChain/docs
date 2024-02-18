---
titleTemplate: NEXT Blockchain
description: How to become a validator on the NEXT Network
head:
  - - meta
    - property: og:image
      content: /next-logo.png
  - - meta
    - property: twitter:image
      content: /next-logo.png
---

# Become a Validator

Validator nodes are a crucial component of the NEXT network.
These nodes operate as full nodes and contribute to consensus,
thereby enhancing the network's security and facilitating the creation of new blocks.

::: info Requirements

- Minimum stake requirement: 25,000 NEXT
- Maximum stake: 15x the minimum stake amount
- Earn staking rewards and a 15% fee on delegator's rewards
- Minimum hardware requirements: Ubuntu 20.04 LTS (64 bit), 1 vCPUs (3.1 GHz+), 1 GB memory and at least 40 GB of SSD storage (or equivalent), 1 Gbps network, 24/7 up and running.
:::

## Step 1: Run A Full Node

Following the [Developer Docs](./getting-started) guide to install and run a full node. 

::: danger DO NOT SKIP THIS STEP!
Allow the node to **fully sync** before proceeding to the next steps.
:::

## Step 2: Create a Validator Wallet

The node running and syncing the network in your current console, so you need to open up a new console window, connect via SSH to the server and enter the following commands to create a wallet:

```shell
# Create validator wallet
$ ./next account new
```

After entering the command, you will get prompted to enter a password for the account (= wallet) — use a strong one! You can e.g. use a password manager to generate a 20+ digit password to secure your wallet. It will look something like this:

> Please remember the public address (started with 0x), you need this further in this tutorial where we add 'YOUR\_VALIDATOR\_ADDRESS'.
>
> NEVER share your private key or keystore with anyone!
>
> **_By the way:_** _The wallet above is not a real wallet we use, it’s just for demonstration purposes only._

## Step 3: Fund the Validator Wallet

The next step is to fund your validator wallet with enough NEXT to become a validator. That means you need to have at least 25,000 NEXT (+1 NEXT to cover the gasfees) in the wallet you just created (send a little more to cover transaction fees).

::: warning
For enhanced security, the use of a hardware wallet is strongly recommended.
:::

Check your balance after sending the collateral:

```shell
# Attach to the console
$ next attach

# In the console
next.getBalance('YOUR_VALIDATOR_ADDRESS')
2.5e+22 

# 2.5e+22 is equal to 25000 NEXT
```

After successfully swapping NEXT to your newly created wallet, you can continue. Make sure you wait for your node to be fully synced, otherwise your NEXT will not show up in your wallet!


## Step 4: Create a Validator Key

Generate a validator key using NEXT. Remember to note down the validator public key, as it will be needed later. 
Set a strong password when prompted.

::: tabs key:os

== Linux Service

```shell [Linux Service]
next validator new
```

== MacOS Service

```shell [MacOS Service]
next validator new
```

== With Command Flags

```shell [With Command Flags]
next validator new
```

:::

> Write down the public key, you need it in the NEXT step.
>
> NEVER share your private key or keystore with anyone!

## Step 5: Save the Validator Password

> Securely store your validator password in a file using the given command:
```shell
echo "MY_STRONG_PASSWORD" > ~/.next/.password
chmod 600 ~/.next/.password
```

## Step 6: Start the Validator

Open up the console where you entered the commands to create the validator wallet previously and attach to the NEXT Smart Chain node console:


```bash
# Attach to NEXT Smart Chain console
$ ./next attach
```

By doing so, you will get a JavaScript console where you can directly interact with the Next Smart Chain node:

- img

Now initializing the Validator smart contract to interact as a validator.

```bash
sfcc = next.sfcContract()
```

After initializing both variables, you can now interact with the network’s SFC. Enter the following command to check that everything works as expected:

```bash
// Sanity check
sfcc.lastValidatorID() // if everything is all right, will return a non-zero value
```

Next, try to get your `validatorID` from the SFC using your previously generated validator wallet address:

```bash
# Get your validator id
sfcc.getValidatorID("YOUR_VALIDATOR_ADDRESS")
```

This should return `0`, as you are not registered as a validator yet.

Next, unlock your validator wallet to be able to execute the registration transaction (make sure to use the password you set before):

```bash
# Unlock validator wallet
personal.unlockAccount("YOUR_VALIDATOR_ADDRESS", undefined, 300)
```

This will return `true` if unlocking the wallet was successful.

Next, send the `createValidator` transaction to register your validator (the value is the representation of the smallest NEXT unit, so dividing it be 1e18 will result in 25000 NEXT. Alternatively, you can use web3.toWei("25000", "next")). Use quotes for "0xYOUR_PUBKEY" and "0xYOUR_ADDRESS":

```bash
# Register your validator
tx = sfcc.createValidator("YOUR_PUBKEY", {from:"YOUR_VALIDATOR_ADDRESS", value: web3.toWei("25000", "next")}) // 25000 NEXT
```

If everything goes okey a transaction ID will be presented:

- img

Make sure to check your registration transaction (could take a few moments to be confirmed):

```bash
# Check your registration transaction
next.getTransactionReceipt(tx)
```

Look for the status: `0x1` at the bottom, which means the transaction was successful:

- img

You can also copy the transactionHash and go the Next Smart Chain Explorer and check your transaction there:

https://explorer.nextsmartchain.com/tx/[YOURTX]

- img

Finally, execute the following command again to check your `validatorID`:


```bash
# Get your validator id
sfcc.getValidatorID("VALIDATOR_WALLET_ADDRESS")
```

It should now return something higher than `0`.


## Step 7: Run the NEXT Validator as a Service

Before you run off celebrating, you need to restart your node in validator mode!

Close the Next Smart Chain console window by typing “exit”. Then head back to the console window where you started your node with the following command:


::: tabs key:os
== Linux Service

```shell [Linux Service]
# Kill previous running NEXT
killall next

# Example command line flags for a validator node.
# Replace `YOUR_VALIDATOR_ID` with your validator ID and
# `YOUR_VALIDATOR_PUBKEY` with your validator's public key.
nohup ./next --genesis mainnet.g \
   --validator.id YOUR_VALIDATOR_ID \
   --validator.pubkey YOUR_VALIDATOR_PUBKEY \
   --validator.password ~/.next/.password &
```

== MacOS Service

The following commands assume you have installed NEXT using Homebrew.

```shell
# Kill previous running NEXT
killall next

# Example command line flags for a validator node.
# Replace `YOUR_VALIDATOR_ID` with your validator ID and
# `YOUR_VALIDATOR_PUBKEY` with your validator's public key.
nohup ./next --genesis mainnet.g \
   --validator.id YOUR_VALIDATOR_ID \
   --validator.pubkey YOUR_VALIDATOR_PUBKEY \
   --validator.password ~/.next/.password &
```

== With Command Flags

```shell [With Command Flags]
# Kill previous running NEXT
killall next

# Example command line flags for a validator node.
# Replace `YOUR_VALIDATOR_ID` with your validator ID and
# `YOUR_VALIDATOR_PUBKEY` with your validator's public key.
nohup ./next --genesis mainnet.g \
   --validator.id YOUR_VALIDATOR_ID \
   --validator.pubkey YOUR_VALIDATOR_PUBKEY \
   --validator.password ~/.next/.password &
```

:::

*   `YOUR_VALIDATOR_ID` is your validator ID (e.g. 25)
*   `YOUR_VALIDATOR_PUBKEY` is your validator public key. You've generated your key with `next validator new`.
*   `~/.next/.password` is a path to a file which contains the password to decrypt the validator key (optional). If you omitted the `--validator.password` flag, then you will be prompted for the password in terminal.


::: tip 🎉 Awesome!
Congrats! You are now running a NEXT Validator. Make sure to keep your node up and running.
:::

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

# Validator Commands

## Check if your validator is up and running

Sometimes it's good to check if the validator is up and running, otherwise you will miss some of your NEXT rewards. To check go to the console:

```shell
$ ./next attach
sfc.getStaker(YOUR_VALIDATOR_ID)
```

The following will return:

- img

As you can see, the validator isActive, but the isValidator is false. No worries! You properly just started your validator. It will be accepted as a validator after the next epoch (which can take up to 4 hours).

## Request a full withdraw

A validator can withdraw the full amount of NEXT.

```js
sfcc.withdraw({from: "0xAddress"})
```

## Lock a validator (optional)

Reward for a non-locked stake is 30% (base rate) of the full reward for a locked stake.

If a withdrawal is made before the lockup period expires, a penalty of 42,5% will be applied.

```js
sfcc.lockStake(validatorID, lockupDuration, web3.toWei("amount", "next"), {from: "0xAddress"})
```

`lockupDuration` is lockup duration in seconds. Must be >= 14 days (1209600 seconds), <= 365 days (31536000 seconds).

## ReLock a validator (optional)

Extend lockup period or increase lockup up stake. 

```js
sfcc.relockStake(validatorID, newLockupDuration, web3.toWei("amount", "next"), {from: "0xAddress"})
```

## Unlock a validator (optional)

Unlock the stake before lockup duration has elapsed.

:::danger Penalty

The following penalty will be withheld from the unlocked amount:

(base rate = 30%)/2 + lockup rate of rewards received for epochs during the lockup period

:::

```js
sfcc.unlockStake(validatorID, web3.toWei("amount", "next"), {from: "0xAddress"})
```



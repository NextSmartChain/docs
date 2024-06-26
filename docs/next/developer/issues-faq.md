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

# Issues

### Node not syncing

Q: My node is not syncing with the NEXT Smart Chain, what should i do?

A: You need to sync with the bootstrap node, this is how to connect to this node:

```bash
$ ./next attach ./mainnet/next.ipc

admin.addPeer('enode://aac81830e98def8d0133f552bbe07241480634bd0475a9c05315618268e90febb4dd4109351f06cf019976c5e52d92f9fc68af0a90e2c21251db8b113441873b@95.179.128.108:9920')
```

Q: How to see if my node is syncing?
A: Run the command `next.syncing` in the next console.

```bash
next.syncing
{
  currentBlock: 16590,
  currentBlockHash: "0x000003210000039f868800780ad9523114361fa903cc17b5c24137c529394877",
  currentBlockTime: "0x172034d588915b4b",
  currentEpoch: "0x321",
  highestBlock: 78138,
  highestEpoch: "0xf31",
  knownStates: 0,
  pulledStates: 0,
  startingBlock: 0
}
```

### Cannot unzip the zip file

Q: After the download, I tried to unzip the file, but it is not working.

A: You need to install the required package.

```bash
$ apt install unzip
```

### The NEXT binary is not working/loading

Q: I download and unzip the file, but NEXT is not working.

A: The file don't have execution permissions.

```bash
$ chmod 777 ./next
```
---
titleTemplate: NEXT Blockchain
description: How to run a NEXT Blockchain interactively
head:
  - - meta
    - property: og:image
      content: /next-logo.png
  - - meta
    - property: twitter:image
      content: /next-logo.png
---

# Run Node Interactively

While running a node interactively is not recommended for production, it is a great way to get started with NEXT.
Continue to [Running Node Service](./run-a-node-service.md) for a production ready solution.
<br><br>

> See the common command line flags for each node type:

:::code-group

```shell [Full Node]
next --genesis mainnet.g
```

```shell [API Node]
next --genesis mainnet.g \
   --http \
   --http.port 8545 \
   --http.addr 0.0.0.0 \
   --http.vhosts "*" \
   --http.corsdomain "*" \
   --ws \
   --ws.addr 0.0.0.0 \
   --ws.port 8546 \
   --ws.origins "*"
```

```shell [Validator Node]
next --genesis mainnet.g \
   --validator.id YOUR_VALIDATOR_ID \
   --validator.pubkey YOUR_VALIDATOR_PUBKEY \
   --validator.password ~/.next/.password
```

:::

> See a full list of command line flags:

```shell
next --help
```

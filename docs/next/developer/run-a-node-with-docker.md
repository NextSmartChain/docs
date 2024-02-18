---
titleTemplate: NEXT Blockchain
description: How to run a NEXT Blockchain a node with Docker
head:
  - - meta
    - property: og:image
      content: /next-logo.png
  - - meta
    - property: twitter:image
      content: /next-logo.png
---

# Running with Docker

See the Docker packages [here](https://github.com/NextSmartChain/docker).

> Pull the latest image

```shell
docker pull nextsmartchain.com/go-next:latest
```

> Create the data directory

```shell
mkdir -p $HOME/.next
```

> Run the container

::: code-group

```shell [Full Node]
docker run -d --name next \
  -p 5120:5120 \
  -v $HOME/.next:/root/.next \
  nextsmartchain.com/go-next:latest \
      --genesis mainnet.g
```

```shell [API Node]
docker run -d --name next \
  -p 5120:5120 \
  -p 8545:8545 \
  -p 8546:8546 \
  -v $HOME/.next:/root/.next \
  nextsmartchain.com/go-next:latest \
      --genesis mainnet.g \
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
docker run -d --name next \
  -p 5120:5120 \
  -v $HOME/.next:/root/.next \
  nextsmartchain.com/go-next:latest \
      --genesis mainnet.g \
      --validator.id YOUR_VALIDATOR_ID \
      --validator.pubkey YOUR_VALIDATOR_PUBKEY \
      --validator.password ~/.next/.password
```

:::

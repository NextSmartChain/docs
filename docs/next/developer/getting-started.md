---
titleTemplate: NEXT Blockchain
description: Getting started with NEXT is easy. This guide will walk you through the process of installing NEXT on your system.
head:
  - - meta
    - property: og:image
      content: /next-logo.png
  - - meta
    - property: twitter:image
      content: /next-logo.png
---

# Getting Started

Whether you're interested in running an API node for a decentralized application, acting as a validator to stake NEXT, or operating a full node, contributing to the NEXT Network is a rewarding endeavor. Embarking on this journey is straightforward. Simply adhere to the guidelines provided below.

## Installation

### Set up Non-Root User (Linux)
For security reasons it is always safer to create a non-root user in your Linux environment. Instructions can be found [here](https://www.digitalocean.com/community/tutorials/how-to-create-a-new-sudo-enabled-user-on-ubuntu-20-04-quickstart).

We recommend using the provided system packages to install NEXT and run it as a service on your system.

:::tabs key:os

== Ubuntu (x86)

```shell [Ubuntu (x86)]
# Install dependencies
sudo apt update -y
sudo apt install -y wget

# Download and install the package
wget -O next-ubuntu20.04.zip https://github.com/NextSmartChain/next-binary/raw/main/next-ubuntu20.04.zip
unzip next-ubuntu20.04.zip

# Download the mainnet parameters
wget -O mainnet.g https://github.com/NextSmartChain/next-binary/raw/main/mainnet.g
```

== Ubuntu (arm64)

```shell [Ubuntu (arm64)]
# Install dependencies
sudo apt update -y
sudo apt install -y wget

# Download and install the package
wget -O next-ubuntu20.04.zip https://github.com/NextSmartChain/next-binary/raw/main/next-ubuntu20.04.zip
unzip next-ubuntu20.04.zip

# Download the mainnet parameters
wget -O mainnet.g https://github.com/NextSmartChain/next-binary/raw/main/mainnet.g
```

== MacOS

```shell [MacOS]
# Install dependencies
sudo apt update -y
sudo apt install -y wget

# Download and install the package
wget -O next-mac-m1.zip https://github.com/NextSmartChain/next-binary/raw/main/next-mac-m1.zip
unzip next-mac-m1.zip

# Download the mainnet parameters
wget -O mainnet.g https://github.com/NextSmartChain/next-binary/raw/main/mainnet.g
```

== Source

```shell [Source]
# Install dependencies (ex: ubuntu)
apt update -y
apt install -y golang wget git make

# Redhat/Centos
# dnf install -y git wget sudo golang make

# Clone and build the NEXT binary
git clone --branch next https://github.com/NextSmartChain/go-next
cd go-next
make next

# Install the binary, config, and systemd service file
sudo make install
```
:::

::: info 🥳 Congratulations!
You now have NEXT installed on your system. You can verify the installation by running `next version`.
:::

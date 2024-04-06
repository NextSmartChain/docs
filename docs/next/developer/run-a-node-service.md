---
titleTemplate: NEXT Blockchain
description: How to run a NEXT Blockchain as a system service
head:
  - - meta
    - property: og:image
      content: /next-logo.png
  - - meta
    - property: twitter:image
      content: /next-logo.png
---

# Run Node as a System Service

We recommend running NEXT as a system service.
It offers control over starting, stopping, and restarting, runs in the background, and starts automatically on boot,
ensuring availability and reliability.

## Configuration

:::tabs key:os

== Linux

Rather than providing command line flags, the system service uses a config file at `/etc/next/config.toml`.

We provide ready-to-use example config files for each node type.

> Run the following command to copy the example config file

::: code-group

```bash [Full Node]
cp /usr/local/share/next/configs/testnet/full-node.toml \
  /etc/next/config.toml
```

```bash [API Node]
cp /usr/local/share/next/configs/testnet/api-node.toml \
  /etc/next/config.toml
```

```bash [Validator]
cp /usr/local/share/next/configs/testnet/validator-node.toml \
  /etc/next/config.toml
```

== MacOS
Rather than providing command line flags, the system service uses a config file at `$HOMEBREW_PREFIX/etc/next/config.toml`.

We provide ready-to-use example config files for each node type.

> Run the following command to copy the example config file

::: code-group

```bash [Full Node]
cp $HOMEBREW_PREFIX/share/next/configs/testnet/full-node.toml \
  $HOMEBREW_PREFIX/etc/next/config.toml
```

```bash [API Node]
cp $HOMEBREW_PREFIX/share/next/configs/testnet/api-node.toml \
  $HOMEBREW_PREFIX/etc/next/config.toml
```

```bash [Archive Node]
cp $HOMEBREW_PREFIX/share/next/configs/testnet/archive-node.toml \
  $HOMEBREW_PREFIX/etc/next/config.toml
```

```bash [Validator Node]
cp $HOMEBREW_PREFIX/share/next/configs/testnet/validator-node.toml \
  $HOMEBREW_PREFIX/etc/next/config.toml
```

:::

### User/Group

:::tabs key:os

== Linux

By default, the systemd service will run as the user and group `next` with the home directory `/var/lib/next`.

> You may change the user to your needs by running the following command.

```shell
# Edit the service file
sudo systemctl edit next.service

# Add the following lines with an existing
# user and group of your choice.
[Service]
User=<user>
Group=<group>
```

== MacOS

The service on MacOS operates under the current user.

:::

## Running the Node

:::tabs key:os

== Linux

> Start the service and enable it on boot

```shell
sudo systemctl start next.service
sudo systemctl enable next.service
```

> Stop the service

```shell
sudo systemctl stop next.service
```

> Restart the service

```shell
sudo systemctl restart next.service
```

== MacOS

> Start the service and enable it on boot

```shell
brew services start next
```

> Stop the service

```shell
brew services stop next
```

> Restart the service

```shell
brew services restart next
```

:::

## Logging

:::tabs key:os

== Linux

By default, logging is handled by the system's logging service.

> Tail the logs

```shell
journalctl -t next -f
```

> See the last 1000 lines of logs

```shell
journalctl -t next -n 1000
```

Optionally, you can configure NEXT to log to a file.

```shell
# Edit the service file
sudo systemctl edit next.service

# Add the following lines
[Service]
StandardOutput=append:/var/log/next.log
StandardError=append:/var/log/next.log
```

== MacOS

> Tail the logs

```shell
tail -f /opt/homebrew/var/log/next.log
```

:::

## Console Access

:::tabs key:os

== Linux

```shell
# Become the next user
sudo su next

# Attach to the console
./next attach
```

== MacOS

```shell
# Attach to the console
./next attach
```

:::

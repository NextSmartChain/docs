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
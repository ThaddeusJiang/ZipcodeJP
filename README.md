# Welcome to zipcodejp 👋

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/ThaddeusJiang/ZipcodeJP#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/ThaddeusJiang/ZipcodeJP/graphs/commit-activity)
[![License: AGPL--3.0](https://img.shields.io/github/license/ThaddeusJiang/zipcodejp)](https://github.com/ThaddeusJiang/ZipcodeJP/blob/main/LICENSE)
[![Twitter: ThaddeusJiang](https://img.shields.io/twitter/follow/ThaddeusJiang.svg?style=social)](https://twitter.com/ThaddeusJiang)

> A RESTful API for searching Japan Address by Zipcode
> (日本郵便番号検索 API)

## [👉 Playground](https://zipcodejp.fly.dev)

## Data

Download from [Japan Post](https://www.post.japanpost.jp/zipcode/dl/kogaki-zip.html)

## Prerequisites



## Install

```sh
bun install
```

## Usage

```sh
bun start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Deploying

```sh
docker run -p 3000:3000 zipcodejp
```

## Update Data

1. download latest data from [Japan Post](https://www.post.japanpost.jp/zipcode/dl/kogaki-zip.html)
2. run update-data script

```sh
$ cd data
$ node update-data.js
```

## Author

👤 **ThaddeusJiang**

- Website: https://thaddeusjiang.com/
- Twitter: [@ThaddeusJiang](https://twitter.com/ThaddeusJiang)
- Github: [@ThaddeusJiang](https://github.com/ThaddeusJiang)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [ThaddeusJiang](https://github.com/ThaddeusJiang).

This project is [AGPL--3.0](https://github.com/ThaddeusJiang/ZipcodeJP/blob/main/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

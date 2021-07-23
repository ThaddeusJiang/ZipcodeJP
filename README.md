<h1 align="center">Welcome to jp-post-api 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-12.x-blue.svg" />
  <a href="https://github.com/ThaddeusJiang/jp-post-api#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/ThaddeusJiang/jp-post-api/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/ThaddeusJiang/jp-post-api/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/ThaddeusJiang/jp-post-api" />
  </a>
</p>

> A RESTful API for searching Japan Address by zip-code
> (日本郵便番号検索API)

## Data
Download from [Japan Post](https://www.post.japanpost.jp/zipcode/dl/kogaki-zip.html)

## Prerequisites

- node 12.x

## Install

```sh
yarn
```

## Usage

```sh
yarn start
```
Your app should now be running on [localhost:5000](http://localhost:5000/).


## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku ps:scale web=1
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Update Data
1. download latest data from [Japan Post](https://www.post.japanpost.jp/zipcode/dl/kogaki-zip.html)
2. run update-data script
```sh
$ cd data
$ node update-data.js
```

## Author

* Website: https://twitter.com/ThaddeusJiang
* Github: [@ThaddeusJiang](https://github.com/ThaddeusJiang)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

This project is [MIT](https://github.com/ThaddeusJiang/jp-post-api/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
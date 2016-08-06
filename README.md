<p align="center">
  <br><strong>get-instagram-photo</strong><br> helps you get Instagram photo by URL.
</p>

<p align="center">
  <a href="https://npmjs.com/package/get-instagram-photo"><img src="https://img.shields.io/npm/v/get-instagram-photo.svg?style=flat-square" alt="NPM version"></a>
  <a href="https://npmjs.com/package/get-instagram-photo"><img src="https://img.shields.io/npm/dm/get-instagram-photo.svg?style=flat-square" alt="NPM downloads"></a>
  <a href="https://circleci.com/gh/egoist/get-instagram-photo"><img src="https://img.shields.io/circleci/project/egoist/get-instagram-photo/master.svg?style=flat-square" alt="Build Status"></a>
</p>

## Install

```bash
$ npm install --save get-instagram-photo
```

## Usage

```js
const getInstagramPhoto = require('get-instagram-photo')

getInstagramPhoto('https://www.instagram.com/p/BItduURBUpF/')
  .then(image => {
    console.log(image)
    //=> https://scontent.cdninstagram.com/t51.2885-15/e35/13735878_229794197415635_1137269208_n.jpg?ig_cache_key=MTMwOTgzMzc5MjgzOTgzMDA4NQ%3D%3D.2
  })
```

## API

### getInstagramPhoto(url)

#### url

Type: `string`

The URL to the sharable link of an Instagram photo.

## License

MIT © [EGOIST](https://github.com/egoist)

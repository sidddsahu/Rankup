const sharp = require('sharp');

const imgs = [

//    'public/deepak.png',
//   'public/deepak3.png',
//   'public/fav.png',

  'public/upsc.jpg',






];

imgs.forEach(p => {
  const out = p.replace('.jpg', '.webp');
  sharp(p)
    .webp({ quality: 80 })
    .toFile(out)
    .then(() => console.log('Converted:', out))
    .catch(err => console.error(err));
});

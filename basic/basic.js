var cloudinary = require('cloudinary').v2;
var Airtable = require('airtable');
var dotenv = require('dotenv');
dotenv.load();

cloudinary.config({
  cloud_name: 'jbrindisi',
  api_key: '248492961274869',
  api_secret: 'PSxW5XxfLFATdWyVC_mu18Q8Z8g'
});

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);
const table = base('Images');
const view = 'Grid view';

cloudinary.uploader.upload('pizza.jpg', { tags: 'basic_sample' }, function (err, image) {
  var url = image.url;

  const picture = [
    {
      "url": url
    }
  ];

  table.create({
    "columns": 'C1',
    "text": 'image1',
    "pictures": picture,
    "links": url
  }, function(err, record) {
    if (err) { console.error(err); return; }
  });
});

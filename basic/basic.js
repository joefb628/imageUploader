var cloudinary = require('cloudinary').v2;
var Airtable = require('airtable');
var dotenv = require('dotenv');
dotenv.load();

cloudinary.config({
  cloud_name: '',
  api_key: '',
  api_secret: ''
});

var imageName = '';
var tableName = '';

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);
const table = base(tableName);
const view = 'Grid view';

cloudinary.uploader.upload(imageName, { tags: 'basic_sample' }, function (err, image) {
  var url = image.url;

  const picture = [
    {
      "url": url
    }
  ];

  table.create({
    "ATTACHMENTS_COLUMN": picture,
    "URLS_COLUMN": url
  }, function(err, record) {
    if (err) { console.error(err); return; }
  });
});

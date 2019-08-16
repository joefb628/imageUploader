# imageUploader

This program will take a local file in the project folder, upload it to your cloudinary account, and create a new AirTable record with the image and the url.

To run the program, you need to install node.js in the project folder using: npm install
Once installed, airtable, cloudinary, and dotenv also need to be installed in the project folder:
npm install airtable
npm install cloudinary
npm install dotenv

In .env, it is required to put your AirTable Base ID and AirTable API Key.
Both of which can be found by going to your account on AirTable and looking at the API section.

It is also required to put your Cloudinary URL in .env, which you can find on your Cloudinary dashboard.

Finally, use "node basic.js" to run program.

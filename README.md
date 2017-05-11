# Some React Thing

### Development

All development should preferably be done on the dev branch and squashed merged with a PR for easier historical reference of changes

$ npm install

$ npm run build

$ npm start

### serving website for others too see

Recommend using ngrok for opening secure connection to your port (https://ngrok.com)

After ngrok is installed and added to your $PATH make sure the app
is running with

$ npm start

then use

$ ngrok http 8080

to make port available over the interwebs


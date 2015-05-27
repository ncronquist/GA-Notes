sails new bloggy
sudo npm install sails-mongo --save

sails generate api post
sails generate controller pages

Place this in routes.js

  '/': 'PagesController.index'

  "get *":{
    controller:"PagesController",
    action:"index",
    skipAssets: true,
    skipRegex: /^\/api\/.*$/
  }

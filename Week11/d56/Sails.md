sails new bloggy
sudo npm install sails-mongo --save

sails generate api post
sails generate controller pages

sails generate api comment
  - generates 2 files

Place this in routes.js

  '/': 'PagesController.index'

  "get *":{
    controller:"PagesController",
    action:"index",
    skipAssets: true,
    skipRegex: /^\/api\/.*$/
  }

$rootScope can be used to create app level variables.

sails generate api user
sails generate controller auth

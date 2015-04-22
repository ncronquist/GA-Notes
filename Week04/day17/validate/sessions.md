- Install exress-session

  ```
  npm install --save express-session
  ```

- Inside your index.js

  ```
  router.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000}, resave: false, saveUninitialized: true}))
  ```

- Anytime you get to a new page app.get or router.get, set the session

  ```
  req.session.lastPage = "/?q="+query;
  ```

# Overview  ([`angular-seed`](https://github.com/angular/angular-seed.git)) 
This Project is a simple webStore (SALES APP), for selling products. It will list templates with details including price and category. We using a simple paypal buy button nothing too fancy. Main goal is to obtain experience on angularjs application & website development.

Project contains Angular Seed boiler plate, angular-route, controllers & views, $http service to fetch simple json files.

## Experience in full SDLC
* AngularJS (1.0, 2.0) Apps
* PHP webstites
* JavaScript (ECMA Script 5|6)
* Flash | Flex | flexsdk
* Frameworks | Wordpress | Magento 
* Mobile (Android | Window | IPHONE), Desktop Application
* Databases (Relational Databases | MySQL, NoSQL | MongoDB )
## `Contact Us`
SKYPE : ssorabh.ssharma

email : ssorabh.ssharma@hotmail.com

github : https://github.com/sorabh86

-----------

© copyright to expertcodedesign.com on 2016 

-----------

### Install Dependencies

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`angular-seed` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application

```
npm start
```
Now browse to the app at [`localhost:8000/index.html`][local-app-url].



## Testing


### Running Unit Tests


```
npm test
```

```
npm run test-single-run
```
### Running End-to-End Tests

* The configuration is found at `e2e-tests/protractor-conf.js`.
* The end-to-end tests are found in `e2e-tests/scenarios.js`.

**Before starting Protractor, open a separate terminal window and run:**

```
npm start
```

```
npm run update-webdriver
```

```
npm run protractor
```

## Updating Angular

script:

```
npm run update-deps
```

### Running the App during Development

The `angular-seed` project comes preconfigured with a local development web server. It is a Node.js
tool called [http-server][http-server]. You can start this web server with `npm start`, but you may
choose to install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own web server, such as Apache or Nginx. Just
configure your server to serve the files under the `app/` directory.
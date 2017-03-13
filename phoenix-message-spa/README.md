# Phoenix Message SPA

## Dependencies
* [Npm (ships with Node.js)](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager)

## Install
`npm install`

## Commands
> Please run below commands at root folder of the project (phoenix-message/)

### Watch change and re-bundle
`npm run watch`

> Use this command to bundle front-end resources `automatically` for your rails application server

This command will
* watch for JSX & JS file changes in phoenix-message/phoenix-message/
* re-bundle front-end resource
* copy to `app/assets/phoenix-message/` directory.

### Front-end development
`npm start`

> * Use this command to start-up front-end development server with hot reload.
> * Your phoenix-message rails application must run first at port 3000

This command will
* start browser-sync with webpack middleware
* watch for JSX & JS file changes in phoenix-message/phoenix-message/
* re-bundle front-end resource
* reload browser

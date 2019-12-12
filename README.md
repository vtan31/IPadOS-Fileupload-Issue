# IPadOS-Fileupload-Issue
When using https/ssl html5 input type file for camera use, as soon as you take a picture and use it on IPadOS 13.x, it refreshes the page and kills the Ionic 4 Angular PWA.  Apple rejects the app when wrapping it with cordova for app submission because it fails on the ipad.

# To reproduce unwanted page reload on IPadOS 13.x
**In your terminal...**  
npm install  
npm start  

**Browse to url with safari on IPadOS 13.x**
https://localhost:8100

use file input and take a picture.

page reloads shortly after.  
**why? How do I resolve?**

# Works when not using https
**In your terminal**  
npm run start-nossl  

**Browse to url with safari on IPadOS 13.x**  
http://localhost:8102  

use file input and take a picture.  

page does not reload and is what I would expect.



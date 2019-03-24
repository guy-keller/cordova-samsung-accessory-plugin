# Cordova Samsung Accessory Plugin

Simple plugin that establishes a session with a Samsung Watch and helps exchange of messages between a hybrid application and its Samsung Watch application and vice-versa.

## Installation

### With cordova-cli

If you are using [cordova-cli](https://github.com/apache/cordova-cli), install
with:

    cordova plugin add https://github.com/guikeller/cordova-samsung-accessory-plugin.git

### With ionic

With ionic:

    ionic cordova plugin add https://github.com/guikeller/cordova-samsung-accessory-plugin.git

## Use from Javascript
Edit `www/js/index.js` and add the following code inside `onDeviceReady`
```js
    // Receiving messages from Watch
    var receiveMessageSuccess = function(message){
        // Either from a sendMessage (with or without handlers) or updateApplicationContext
        var value = JSON.stringify(message);
        alert("Received message from Watch : "+value);
    };
    var receiveMessageFailure = function(){
        alert("Could not receive message from Watch");
    };

    // Sending Messages to Watch
    var sendMessageSuccess = function() {
        alert("Message sent successfully!");
    };
    var sendMessageFailure = function(){
        alert("Could not send message to Watch.");
    };
    
    // Initialised a Session successfully
    var initWatchSuccess = function() {
        // Sends a message through 'sendMessage'
        var message = {message: "hello from phone", value: "1234", foo: "bar"};
        SamsungAccessoryPlugin.sendMessage(message, sendMessageSuccess, sendMessageFailure);    
	    // Register to receive messages
        SamsungAccessoryPlugin.registerMessageListener(receiveMessageSuccess, receiveMessageFailure);
    };
    var initWatchFailure = function() {
        alert("Could not connect to Watch.");
    };
    
    // Starts things up
    SamsungAccessoryPlugin.init(initWatchSuccess, initWatchFailure);
```
## Use from Samsung Watch

https://developer.samsung.com/galaxy/accessory#samples
<br>
https://developer.samsung.com/galaxy-watch/develop/samples/companion/
<br>

```js
// Tizen Conf (JS) - res/xml/accessoryservices.xml
serviceProfile#id: '/samsung/accessory/provider/cordova/plugin'
serviceProfile#role: 'consumer'
serviceChannel#id: '7219'
```

## Credits
[Gui Keller](https://www.github.com/guikeller)

## More Info
TODO: The plugin is very simple and short without much error handling, yet functional. 

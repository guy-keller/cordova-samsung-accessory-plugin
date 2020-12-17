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
    // Receiving messages from Watch - callbacks
    var receiveMessageSuccess = function(message){
        var value = JSON.stringify(message);
        alert("Received message from Watch : "+value);
    };
    var receiveMessageFailure = function() {
        alert("Could not receive message from Watch");
    };

    // Sending Messages to Watch - callbacks
    var sendMessageSuccess = function() {
        alert("Message sent successfully!");
    };
    var sendMessageFailure = function(){
        alert("Could not send message to Watch.");
    };

    var findPeerSuccess = function() {
        // Wait for 2secs, SAP 'should have' found all peers after that..
        window.setTimeout( () => {
            // Sends a message to the Watch
            var message = {message: "hello from phone", value: "1234", foo: "bar"};
            SamsungAccessoryPlugin.sendMessage(sendMessageSuccess, sendMessageFailure, message);    
	}, 2000);
    };
    var findPeerFailure = function() {
        alert("Could not find any peers.");
    };
    
    // Initialised a Session successfully
    var initWatchSuccess = function() {
        // Wait for 6secs, SAP 'should have' initialised after that..
        window.setTimeout( () => {
            // Tries to find the peer / watch
            SamsungAccessoryPlugin.findPeer(findPeerSuccess, findPeerFailure);
	    // Register to receive messages
            SamsungAccessoryPlugin.registerMessageListener(receiveMessageSuccess, receiveMessageFailure);
	}, 6000);
    };
    var initWatchFailure = function() {
        alert("Could not connect to Watch.");
    };
    
    // Starting things up - PS: SAP = Samsung Accessory Protocol
    SamsungAccessoryPlugin.init(initWatchSuccess, initWatchFailure);
```
## Use from Samsung Watch

https://developer.samsung.com/galaxy/accessory#samples
<br>
https://developer.samsung.com/galaxy-watch/develop/samples/companion/
<br>

```xml
// Tizen Conf (Watch) - res/xml/accessoryservices.xml
<?xml version="1.0" encoding="UTF-8"?>
<resources>
    <application name="CordovaSamsungPluginApp" >
        <serviceProfile
            id="/cordova/samsung/accs/plugin"
            name="CordovaSamsungPlugin"
            role="provider"
            version="1.0" >
            <supportedTransports>
                <transport type="TRANSPORT_BT" />
                <transport type="TRANSPORT_WIFI"/>
            </supportedTransports>
            <serviceChannel
                id="7219"
                dataRate="high"
                priority="high"
                reliability="enable" >
            </serviceChannel>
        </serviceProfile>
    </application>
</resources>
```

<br>
https://medium.com/@lahtela/writing-a-tizen-watch-application-with-angular-6-cd7d788fef95
<br>
Note: The *Routing Issue* gets resolved by using the *HashLocationStrategy* instead of the default implementation.

## Source Code for AAR
https://github.com/guikeller/cordova-samsung-accessory-plugin-source

## Credits
[Gui Keller](https://www.github.com/guikeller)

## More Info
TODO: The plugin is very simple and short without much error handling, yet functional. 

## Project supported by JetBrains
<p>
 Many thanks to Jetbrains for kindly providing a license for me to work on this and other open-source projects.
 <br>
 <a href="https://www.jetbrains.com/?from=7505-idea-jetty-runner">
   <img alt="Jetbrains" src="https://raw.githubusercontent.com/guikeller/blob/master/jetbrains.png" width="250" height="250">
 </a>
 <br>
 <a href="https://www.jetbrains.com/?from=7505-idea-jetty-runner">
   https://www.jetbrains.com
 </a>
 <br>
</p>


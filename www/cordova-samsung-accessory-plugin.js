module.exports = {
    init: function(successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "CordovaSamsungAccessoryPlugin", "init", []);
    },
    shutdown: function(onNewMessageCallback, errorCallback) {
        cordova.exec(onNewMessageCallback, errorCallback, "CordovaSamsungAccessoryPlugin", "messageReceiver", []);
    },
    sendMessage: function(successCallback, errorCallback, message) {
        cordova.exec(successCallback, errorCallback, "CordovaSamsungAccessoryPlugin", "sendMessage", [message]);
    },
    registerMessageListener: function(successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "CordovaSamsungAccessoryPlugin", "registerMessageListener", []);
    }
};

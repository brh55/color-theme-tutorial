import { settingsStorage } from "settings";
import * as messaging from "messaging";

// Settings have been changed
settingsStorage.onchange = function(evt) {
    if (evt.key === 'theme') {
        console.log(evt)
        if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
            messaging.peerSocket.send({
                key: evt.key,
                value: JSON.parse(evt.newValue)
            });
        } else {
            console.log("No peerSocket connection");
        }
    }
}
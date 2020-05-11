import * as messaging from "messaging";
import document from "document";

let labels = document.getElementsByClassName('label');
let values = document.getElementsByClassName('value');

const theme = {
  // themeName: 'label hex1,value hex2'
  'warm': '#ff4757,#ff7f50',
  'cool': '#1e90ff,#a4b0be',
  'bright': '#f7b731,#fed330'
};

messaging.peerSocket.onmessage = function(evt) {
    const data = evt.data;

    if (data.key === 'theme') {
        const colors = theme[data.value].split(',');

        labels.forEach(element => element.style.fill = colors[0]);
        values.forEach(element => element.style.fill = colors[1]);
    }
}
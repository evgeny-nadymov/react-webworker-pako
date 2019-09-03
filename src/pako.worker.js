/* eslint-disable */
import pako from 'pako';

self.addEventListener('message', (event) => {
    if (event.data) {

        console.log('[worker] pako.deflate', event.data);
        const binaryString = pako.deflate(JSON.stringify(event.data), { to: 'string' });

        console.log('[worker] pako.inflate', binaryString);
        const data = JSON.parse(pako.inflate(binaryString, { to: 'string' }));

        self.postMessage(data);
    }
});
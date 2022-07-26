import { syncedStore, getYjsValue } from '@syncedstore/core';
import { WebrtcProvider } from 'y-webrtc';
// Create your SyncedStore store
export const store = syncedStore({
	calculations: [],
	fragment: 'xml',
});

// Create a document that syncs automatically using Y-WebRTC
const doc = getYjsValue(store);
export const webrtcProvider = new WebrtcProvider('syncedstore-calc', doc);

export const disconnect = () => webrtcProvider.disconnect();
export const connect = () => webrtcProvider.connect();

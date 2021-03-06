import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    shouldReloadRecord() {
        return false;
    },

    shouldBackgroundReloadRecord(store, snapshot) {

        const loadedAt = snapshot.record.get('loadedAt');

        // if it was loaded more than an hour ago
        if (Date.now() - loadedAt > 3600000) {
            return true;
        } else {
            return false;
        }
    }
});

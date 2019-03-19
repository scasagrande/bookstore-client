import Component from '@ember/component';

export default Component.extend({
    keyPress(event) {
        if ((event.keyCode === 13) || (event.keyCode === 32)) {
            this.showModal(true);
        }
        else if (event.keyCode === 27) {
            this.showModal(false);
        }
    },
    showModal(showModal) {
        if (showModal) {
            this.get('book').reload().then(() => {
                this.set('isShowingModal', true);
                this.get('blurBackground')(true);
            });
        }
        else {
            this.set('isShowingModal', false);
            this.get('blurBackground')(false);
        }
    },
    actions: {

        showModal(state) {
            this.showModal(state);
        }
    
    }
});

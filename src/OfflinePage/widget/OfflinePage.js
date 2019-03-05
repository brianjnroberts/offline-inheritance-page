import {
    defineWidget,
    log,
    runCallback,
} from 'widget-base-helpers';

import template from './OfflinePage.template.html';

export default defineWidget('OfflinePage', template, {

    _obj: null,

    constructor() {
        this.log = log.bind(this);
        this.runCallback = runCallback.bind(this);
    },

    postCreate() {
        log.call(this, 'postCreate', this._WIDGET_VERSION);
    },

    update(mxobj, callback) {
        // render a page with the new context
        const ctx = new mendix.lib.MxContext();
        ctx.setTrackObject(mxobj);
        mx.ui.openForm(this.form, {
            domNode: this.inheritanceFormNode,
            context: ctx,
            callback: () => {
                callback();
            },
        });
    }
});

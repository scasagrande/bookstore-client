import DS from 'ember-data';
import Publisher from './publisher';
import { on } from '@ember/object/evented';

export default Publisher.extend({
  books: DS.hasMany('book'),

  loadedAt: on('didLoad', function() {
    this.set('loadedAt', new Date());
  })
});

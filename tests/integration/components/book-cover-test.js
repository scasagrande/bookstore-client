import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('book-cover', 'Integration | Component | book cover', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('book', {
    title: "foobar",
    author: {
      id: 1,
      name: "John Smith"
    }
  });

  this.render(hbs`{{book-cover book=book}}`);

  assert.equal(this.$().text().trim(), 'foobar\n  by\n  John Smith');

});

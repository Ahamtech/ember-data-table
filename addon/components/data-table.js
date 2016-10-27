import Ember from 'ember';
import layout from '../templates/components/data-table';

export default Ember.Component.extend({
  layout: layout,
  noDataMessage: 'No data',
  selection: Ember.computed.filterBy('rows', 'isSelected', true),
  hasMenu: false, // set from inner component, migth fail with nested if
  enableSelection: Ember.computed.oneWay('hasMenu'),
  parsedFields: Ember.computed('fields', function() {
    const fields = this.get('fields');
    if( Ember.typeOf( fields ) == 'string' ) {
      return fields.split(' ');
    } else {
      return fields || []
    }
  }),
});

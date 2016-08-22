import Ember from 'ember';
import moment from 'moment';

export function date(params/*, hash*/) {
  return moment(params[0]).format("MMM DD");
}

export default Ember.Helper.helper(date);

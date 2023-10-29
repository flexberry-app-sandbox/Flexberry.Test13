import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test13-город-l');
  this.route('i-i-s-test13-город-e',
  { path: 'i-i-s-test13-город-e/:id' });
  this.route('i-i-s-test13-город-e.new',
  { path: 'i-i-s-test13-город-e/new' });
  this.route('i-i-s-test13-дом-l');
  this.route('i-i-s-test13-дом-e',
  { path: 'i-i-s-test13-дом-e/:id' });
  this.route('i-i-s-test13-дом-e.new',
  { path: 'i-i-s-test13-дом-e/new' });
  this.route('i-i-s-test13-комната-l');
  this.route('i-i-s-test13-комната-e',
  { path: 'i-i-s-test13-комната-e/:id' });
  this.route('i-i-s-test13-комната-e.new',
  { path: 'i-i-s-test13-комната-e/new' });
  this.route('i-i-s-test13-улица-l');
  this.route('i-i-s-test13-улица-e',
  { path: 'i-i-s-test13-улица-e/:id' });
  this.route('i-i-s-test13-улица-e.new',
  { path: 'i-i-s-test13-улица-e/new' });
});

export default Router;

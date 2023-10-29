import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTest13ГородLForm from './forms/i-i-s-test13-город-l';
import IISTest13ДомLForm from './forms/i-i-s-test13-дом-l';
import IISTest13КомнатаLForm from './forms/i-i-s-test13-комната-l';
import IISTest13УлицаLForm from './forms/i-i-s-test13-улица-l';
import IISTest13ГородEForm from './forms/i-i-s-test13-город-e';
import IISTest13ДомEForm from './forms/i-i-s-test13-дом-e';
import IISTest13КомнатаEForm from './forms/i-i-s-test13-комната-e';
import IISTest13УлицаEForm from './forms/i-i-s-test13-улица-e';
import IISTest13ГородModel from './models/i-i-s-test13-город';
import IISTest13ДомModel from './models/i-i-s-test13-дом';
import IISTest13КомнатаModel from './models/i-i-s-test13-комната';
import IISTest13УлицаModel from './models/i-i-s-test13-улица';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test13-город': IISTest13ГородModel,
    'i-i-s-test13-дом': IISTest13ДомModel,
    'i-i-s-test13-комната': IISTest13КомнатаModel,
    'i-i-s-test13-улица': IISTest13УлицаModel
  },

  'application-name': 'Test13',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test13',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test13',
          title: 'Test13'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        test13: {
          caption: 'Test13',
          title: 'Test13',
          'i-i-s-test13-город-l': {
            caption: 'Город',
            title: ''
          },
          'i-i-s-test13-комната-l': {
            caption: 'Комната',
            title: ''
          },
          'i-i-s-test13-улица-l': {
            caption: 'Улица',
            title: ''
          },
          'i-i-s-test13-дом-l': {
            caption: 'Дом',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test13-город-l': IISTest13ГородLForm,
    'i-i-s-test13-дом-l': IISTest13ДомLForm,
    'i-i-s-test13-комната-l': IISTest13КомнатаLForm,
    'i-i-s-test13-улица-l': IISTest13УлицаLForm,
    'i-i-s-test13-город-e': IISTest13ГородEForm,
    'i-i-s-test13-дом-e': IISTest13ДомEForm,
    'i-i-s-test13-комната-e': IISTest13КомнатаEForm,
    'i-i-s-test13-улица-e': IISTest13УлицаEForm
  },

});

export default translations;

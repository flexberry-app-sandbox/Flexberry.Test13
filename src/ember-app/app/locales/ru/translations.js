import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test13',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test13',
          title: 'Test13'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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

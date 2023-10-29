import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.test13.caption'),
          title: i18n.t('forms.application.sitemap.test13.title'),
          children: [{
            link: 'i-i-s-test13-город-l',
            caption: i18n.t('forms.application.sitemap.test13.i-i-s-test13-город-l.caption'),
            title: i18n.t('forms.application.sitemap.test13.i-i-s-test13-город-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-test13-комната-l',
            caption: i18n.t('forms.application.sitemap.test13.i-i-s-test13-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.test13.i-i-s-test13-комната-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-test13-улица-l',
            caption: i18n.t('forms.application.sitemap.test13.i-i-s-test13-улица-l.caption'),
            title: i18n.t('forms.application.sitemap.test13.i-i-s-test13-улица-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-test13-дом-l',
            caption: i18n.t('forms.application.sitemap.test13.i-i-s-test13-дом-l.caption'),
            title: i18n.t('forms.application.sitemap.test13.i-i-s-test13-дом-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})
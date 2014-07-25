$.register({
  rule: [
    {
      host: /^imgmega\.com$/,
      path: /^\/([^\/]+)\/.+\.jpg\.html$/,
    },
    {
      host: /^pic\.re$/,
      path: /^\/([^\/]+)$/,
    },
    {
      host: /^imagebucks\.biz$/,
      path: /^\/([^\/]+)\/.+\.jpg$/,
    },
  ],
  ready: function (m) {
    'use strict';

    var i = $.$('form');
    if (i) {
      // first stage
      $.openLinkByPost('', {
        id: m.path[1],
        next: '',
        op: 'view',
        pre: 1,
      });
      return;
    }
    i = $('img.pic');
    $.openImage(i.src);
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;

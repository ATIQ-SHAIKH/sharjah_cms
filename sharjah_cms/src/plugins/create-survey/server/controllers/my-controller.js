'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('create-survey')
      .service('myService')
      .getWelcomeMessage();
  },
});

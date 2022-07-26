'use strict';

/**
 * coffee-machine service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::coffee-machine.coffee-machine');

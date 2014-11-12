(function(angular, debug){
  'use strict';

  if (!angular)
    throw new Error('fir.init(); angular.js is required');

  var log;

  if (debug) 
    log = debug('fir');

  angular
    .module('fir', ['ngResource'])
    .constant('API_HOST', 'http://fir.im/api/v2/app/')
    .constant('INSTALL_URI', 'itms-services://?action=download-manifest&url=')
    .provider('fir', ['API_HOST', '$httpProvider', provider]);

  function provider(API_HOST, $httpProvider) {
    var self = this;

    // Use X-Domain to request cross domain
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    this.config = config;
    this.$get = ['$resource', firService];

    if (log) log('Init SDK, host [%s]', API_HOST);

    function config(configs) {
      if (!configs)
        throw new Error('fir.config(); configs object is required')
      if (!configs.token)
        throw new Error('fir.config(); configs.token is required');
      if (!configs.appId)
        throw new Error('fir.config(); configs.appId is required');

      self.configs = configs;

      return configs;
    }

    function firService($resource) {
      var apiMap = {
        // Private
        'mime': 'mime',
        'app': ':appId',
        'version': 'version/:appId',
        'checkUpdate': 'version/:appId', // alias
        'versions': ':appId/versions',
        'members': ':appId/members',
        // Public
        'recent': 'recent'
      };

      // create `$resource` instance
      var sdk = {};
      angular.forEach(apiMap, function(endpoint, key) {
        var extraMethods = {
          'post': {
            method: 'POST'
          },
          'update': {
            method: 'PUT'
          },
          'put': {
            method: 'PUT'
          }
        };
        sdk[key] = $resource(
          API_HOST + endpoint, null, extraMethods
        );
      });

      return sdk;
    }
  }

})(window.angular, window.debug);
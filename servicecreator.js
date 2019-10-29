function createAWSMailerService(execlib, ParentService) {
  'use strict';
  

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')) 
    };
  }

  function AWSMailerService(prophash) {
    ParentService.call(this, prophash);
  }
  
  ParentService.inherit(AWSMailerService, factoryCreator);
  
  AWSMailerService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
  };
  
  return AWSMailerService;
}

module.exports = createAWSMailerService;

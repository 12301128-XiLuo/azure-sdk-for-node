/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ApiErrorBase class.
 * @constructor
 * Api error base.
 * @member {string} [code] Gets or sets the error code.
 * 
 * @member {string} [target] Gets or sets the target of the particular error.
 * 
 * @member {string} [message] Gets or sets the error message.
 * 
 */
function ApiErrorBase(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.code !== undefined) {
      this.code = parameters.code;
    }
    if (parameters.target !== undefined) {
      this.target = parameters.target;
    }
    if (parameters.message !== undefined) {
      this.message = parameters.message;
    }
  }    
}


/**
 * Validate the payload against the ApiErrorBase schema
 *
 * @param {JSON} payload
 *
 */
ApiErrorBase.prototype.serialize = function () {
  var payload = {};
  if (this['code'] !== null && this['code'] !== undefined) {
    if (typeof this['code'].valueOf() !== 'string') {
      throw new Error('this[\'code\'] must be of type string.');
    }
    payload['code'] = this['code'];
  }

  if (this['target'] !== null && this['target'] !== undefined) {
    if (typeof this['target'].valueOf() !== 'string') {
      throw new Error('this[\'target\'] must be of type string.');
    }
    payload['target'] = this['target'];
  }

  if (this['message'] !== null && this['message'] !== undefined) {
    if (typeof this['message'].valueOf() !== 'string') {
      throw new Error('this[\'message\'] must be of type string.');
    }
    payload['message'] = this['message'];
  }

  return payload;
};

/**
 * Deserialize the instance to ApiErrorBase schema
 *
 * @param {JSON} instance
 *
 */
ApiErrorBase.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['code'] !== undefined) {
      this['code'] = instance['code'];
    }

    if (instance['target'] !== undefined) {
      this['target'] = instance['target'];
    }

    if (instance['message'] !== undefined) {
      this['message'] = instance['message'];
    }
  }

  return this;
};

module.exports = ApiErrorBase;
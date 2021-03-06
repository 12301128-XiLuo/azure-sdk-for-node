/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the RequestsBasedTrigger class.
 * @constructor
 * Trigger based on total requests.
 *
 * @member {number} [count] Count.
 *
 * @member {string} [timeInterval] Time interval.
 *
 */
class RequestsBasedTrigger {
  constructor() {
  }

  /**
   * Defines the metadata of RequestsBasedTrigger
   *
   * @returns {object} metadata of RequestsBasedTrigger
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RequestsBasedTrigger',
      type: {
        name: 'Composite',
        className: 'RequestsBasedTrigger',
        modelProperties: {
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          timeInterval: {
            required: false,
            serializedName: 'timeInterval',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RequestsBasedTrigger;

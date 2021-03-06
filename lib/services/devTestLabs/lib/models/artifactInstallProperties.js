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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the ArtifactInstallProperties class.
 * @constructor
 * Properties of an artifact.
 *
 * @member {string} [artifactId] The artifact's identifier.
 *
 * @member {array} [parameters] The parameters of the artifact.
 *
 */
class ArtifactInstallProperties {
  constructor() {
  }

  /**
   * Defines the metadata of ArtifactInstallProperties
   *
   * @returns {object} metadata of ArtifactInstallProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ArtifactInstallProperties',
      type: {
        name: 'Composite',
        className: 'ArtifactInstallProperties',
        modelProperties: {
          artifactId: {
            required: false,
            serializedName: 'artifactId',
            type: {
              name: 'String'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ArtifactParameterPropertiesElementType',
                  type: {
                    name: 'Composite',
                    className: 'ArtifactParameterProperties'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ArtifactInstallProperties;

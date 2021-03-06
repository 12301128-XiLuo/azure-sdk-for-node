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
 * Initializes a new instance of the VirtualMachineScaleSet class.
 * @constructor
 * Describes a Virtual Machine Scale Set.
 *
 * @member {object} [sku] The virtual machine scale set sku.
 *
 * @member {string} [sku.name] The sku name.
 *
 * @member {string} [sku.tier] The sku tier.
 *
 * @member {number} [sku.capacity] The sku capacity.
 *
 * @member {object} [plan] The purchase plan when deploying a virtual machine
 * scale set from VM Marketplace images.
 *
 * @member {string} [plan.name] The plan ID.
 *
 * @member {string} [plan.publisher] The publisher ID.
 *
 * @member {string} [plan.product] The offer ID.
 *
 * @member {string} [plan.promotionCode] The promotion code.
 *
 * @member {object} [upgradePolicy] The upgrade policy.
 *
 * @member {string} [upgradePolicy.mode] The upgrade mode. Possible values
 * include: 'Automatic', 'Manual'
 *
 * @member {object} [recoveryPolicy] The recovery policy.
 *
 * @member {string} [recoveryPolicy.mode] The recovery mode. Possible values
 * include: 'None', 'OverProvision', 'Reprovision'
 *
 * @member {object} [virtualMachineProfile] The virtual machine profile.
 *
 * @member {object} [virtualMachineProfile.osProfile] The virtual machine scale
 * set OS profile.
 *
 * @member {string} [virtualMachineProfile.osProfile.computerNamePrefix] The
 * computer name prefix.
 *
 * @member {string} [virtualMachineProfile.osProfile.adminUsername] The admin
 * user name.
 *
 * @member {string} [virtualMachineProfile.osProfile.adminPassword] The admin
 * user password.
 *
 * @member {string} [virtualMachineProfile.osProfile.customData] A base-64
 * encoded string of custom data.
 *
 * @member {object} [virtualMachineProfile.osProfile.windowsConfiguration] The
 * Windows Configuration of the OS profile.
 *
 * @member {boolean}
 * [virtualMachineProfile.osProfile.windowsConfiguration.provisionVMAgent]
 * Indicates whether the virtual machine agent should be provisioned on the
 * Virtual Machine. If not specified, then the default behavior is to set it to
 * true.
 *
 * @member {boolean}
 * [virtualMachineProfile.osProfile.windowsConfiguration.enableAutomaticUpdates]
 * Indicates whether Windows updates are automatically installed on the VM.
 *
 * @member {string}
 * [virtualMachineProfile.osProfile.windowsConfiguration.timeZone] The time
 * zone of the VM
 *
 * @member {array}
 * [virtualMachineProfile.osProfile.windowsConfiguration.additionalUnattendContent]
 * Additional base-64 encoded XML formatted information that can be included in
 * the Unattend.xml file.
 *
 * @member {object}
 * [virtualMachineProfile.osProfile.windowsConfiguration.winRM] The Windows
 * Remote Management configuration of the VM
 *
 * @member {array}
 * [virtualMachineProfile.osProfile.windowsConfiguration.winRM.listeners] The
 * list of Windows Remote Management listeners
 *
 * @member {object} [virtualMachineProfile.osProfile.linuxConfiguration] The
 * Linux Configuration of the OS profile.
 *
 * @member {boolean}
 * [virtualMachineProfile.osProfile.linuxConfiguration.disablePasswordAuthentication]
 * Specifies whether password authentication should be disabled.
 *
 * @member {object} [virtualMachineProfile.osProfile.linuxConfiguration.ssh]
 * The SSH configuration for linux VMs.
 *
 * @member {array}
 * [virtualMachineProfile.osProfile.linuxConfiguration.ssh.publicKeys] The list
 * of SSH public keys used to authenticate with linux based VMs.
 *
 * @member {array} [virtualMachineProfile.osProfile.secrets] The List of
 * certificates for addition to the VM.
 *
 * @member {object} [virtualMachineProfile.storageProfile] The virtual machine
 * scale set storage profile.
 *
 * @member {object} [virtualMachineProfile.storageProfile.imageReference] The
 * image reference.
 *
 * @member {string}
 * [virtualMachineProfile.storageProfile.imageReference.publisher] The image
 * publisher.
 *
 * @member {string} [virtualMachineProfile.storageProfile.imageReference.offer]
 * The image offer.
 *
 * @member {string} [virtualMachineProfile.storageProfile.imageReference.sku]
 * The image SKU.
 *
 * @member {string}
 * [virtualMachineProfile.storageProfile.imageReference.version] The image
 * version. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor
 * and Build are decimal numbers. Specify 'latest' to use the latest version of
 * the image.
 *
 * @member {object} [virtualMachineProfile.storageProfile.osDisk] The OS disk.
 *
 * @member {string} [virtualMachineProfile.storageProfile.osDisk.name] The disk
 * name.
 *
 * @member {string} [virtualMachineProfile.storageProfile.osDisk.caching] The
 * caching type. Possible values include: 'None', 'ReadOnly', 'ReadWrite'
 *
 * @member {string} [virtualMachineProfile.storageProfile.osDisk.createOption]
 * The create option. Possible values include: 'fromImage', 'empty', 'attach'
 *
 * @member {string} [virtualMachineProfile.storageProfile.osDisk.osType] The
 * Operating System type. Possible values include: 'Windows', 'Linux'
 *
 * @member {object} [virtualMachineProfile.storageProfile.osDisk.image] The
 * Source User Image VirtualHardDisk. This VirtualHardDisk will be copied
 * before using it to attach to the Virtual Machine. If SourceImage is
 * provided, the destination VirtualHardDisk should not exist.
 *
 * @member {string} [virtualMachineProfile.storageProfile.osDisk.image.uri] The
 * virtual hard disk's URI. Must be a valid URI to a virtual hard disk.
 *
 * @member {array} [virtualMachineProfile.storageProfile.osDisk.vhdContainers]
 * The list of virtual hard disk container uris.
 *
 * @member {object} [virtualMachineProfile.storageProfile.osDisk.managedDisk]
 * The managed disk parameters.
 *
 * @member {string}
 * [virtualMachineProfile.storageProfile.osDisk.managedDisk.storageAccountType]
 * The Storage Account type. Possible values include: 'Standard_LRS',
 * 'Premium_LRS'
 *
 * @member {array} [virtualMachineProfile.storageProfile.dataDisks] The data
 * disks.
 *
 * @member {object} [virtualMachineProfile.networkProfile] The virtual machine
 * scale set network profile.
 *
 * @member {array}
 * [virtualMachineProfile.networkProfile.networkInterfaceConfigurations] The
 * list of network configurations.
 *
 * @member {object} [virtualMachineProfile.diagnosticsProfile] The virtual
 * machine scale set diagnostics profile.
 *
 * @member {object} [virtualMachineProfile.diagnosticsProfile.bootDiagnostics]
 * Boot Diagnostics is a debugging feature which allows the user to view
 * console output and/or a screenshot of the virtual machine from the
 * hypervisor.
 *
 * @member {boolean}
 * [virtualMachineProfile.diagnosticsProfile.bootDiagnostics.enabled] Whether
 * boot diagnostics should be enabled on the Virtual Machine.
 *
 * @member {string}
 * [virtualMachineProfile.diagnosticsProfile.bootDiagnostics.storageUri] URI of
 * the storage account to use for placing the console output and screenshot.
 *
 * @member {object} [virtualMachineProfile.extensionProfile] The virtual
 * machine scale set extension profile.
 *
 * @member {array} [virtualMachineProfile.extensionProfile.extensions] The
 * virtual machine scale set child extension resources.
 *
 * @member {string} [virtualMachineProfile.licenseType] The license type, which
 * is for bring your own license scenario.
 *
 * @member {string} [provisioningState] The provisioning state, which only
 * appears in the response.
 *
 * @member {boolean} [overprovision] Specifies whether the Virtual Machine
 * Scale Set should be overprovisioned.
 *
 * @member {string} [uniqueId] Specifies the ID which uniquely identifies a
 * Virtual Machine Scale Set.
 *
 * @member {boolean} [singlePlacementGroup] When true this limits the scale set
 * to a single placement group, of max size 100 virtual machines.
 *
 * @member {object} [identity] The identity of the virtual machine scale set,
 * if configured.
 *
 * @member {string} [identity.principalId] The principal id of virtual machine
 * scale set identity.
 *
 * @member {string} [identity.tenantId] The tenant id associated with the
 * virtual machine scale set.
 *
 * @member {string} [identity.type] The type of identity used for the virtual
 * machine scale set. Currently, the only supported type is 'SystemAssigned',
 * which implicitly creates an identity. Possible values include:
 * 'SystemAssigned'
 *
 */
class VirtualMachineScaleSet extends models['Resource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VirtualMachineScaleSet
   *
   * @returns {object} metadata of VirtualMachineScaleSet
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualMachineScaleSet',
      type: {
        name: 'Composite',
        className: 'VirtualMachineScaleSet',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'Sku'
            }
          },
          plan: {
            required: false,
            serializedName: 'plan',
            type: {
              name: 'Composite',
              className: 'Plan'
            }
          },
          upgradePolicy: {
            required: false,
            serializedName: 'properties.upgradePolicy',
            type: {
              name: 'Composite',
              className: 'UpgradePolicy'
            }
          },
          recoveryPolicy: {
            required: false,
            serializedName: 'properties.recoveryPolicy',
            type: {
              name: 'Composite',
              className: 'RecoveryPolicy'
            }
          },
          virtualMachineProfile: {
            required: false,
            serializedName: 'properties.virtualMachineProfile',
            type: {
              name: 'Composite',
              className: 'VirtualMachineScaleSetVMProfile'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          overprovision: {
            required: false,
            serializedName: 'properties.overprovision',
            type: {
              name: 'Boolean'
            }
          },
          uniqueId: {
            required: false,
            serializedName: 'properties.uniqueId',
            type: {
              name: 'String'
            }
          },
          singlePlacementGroup: {
            required: false,
            serializedName: 'properties.singlePlacementGroup',
            type: {
              name: 'Boolean'
            }
          },
          identity: {
            required: false,
            serializedName: 'identity',
            type: {
              name: 'Composite',
              className: 'VirtualMachineScaleSetIdentity'
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualMachineScaleSet;

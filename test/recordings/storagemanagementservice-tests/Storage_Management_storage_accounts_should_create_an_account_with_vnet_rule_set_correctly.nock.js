// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup457/providers/Microsoft.Storage/storageAccounts/testacc5558?api-version=2017-06-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/eastus2euap/asyncoperations/4d8d8053-72a1-4db2-bcda-1ab9414f6857?monitor=true&api-version=2017-06-01',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '598d0d59-7088-461b-8842-f5d1384b844c',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': '598d0d59-7088-461b-8842-f5d1384b844c',
  'x-ms-routing-request-id': 'JAPANEAST:20170907T024143Z:598d0d59-7088-461b-8842-f5d1384b844c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Sep 2017 02:41:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup457/providers/Microsoft.Storage/storageAccounts/testacc5558?api-version=2017-06-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/eastus2euap/asyncoperations/4d8d8053-72a1-4db2-bcda-1ab9414f6857?monitor=true&api-version=2017-06-01',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '598d0d59-7088-461b-8842-f5d1384b844c',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': '598d0d59-7088-461b-8842-f5d1384b844c',
  'x-ms-routing-request-id': 'JAPANEAST:20170907T024143Z:598d0d59-7088-461b-8842-f5d1384b844c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Sep 2017 02:41:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/eastus2euap/asyncoperations/4d8d8053-72a1-4db2-bcda-1ab9414f6857?monitor=true&api-version=2017-06-01')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodetestgroup457/providers/Microsoft.Storage/storageAccounts/testacc5558\",\"kind\":\"Storage\",\"location\":\"eastus2euap\",\"name\":\"testacc5558\",\"properties\":{\"creationTime\":\"2017-09-07T02:41:43.3636537Z\",\"networkAcls\":{\"bypass\":\"Logging, AzureServices\",\"defaultAction\":\"Deny\",\"ipRules\":[{\"action\":\"Allow\",\"value\":\"23.45.67.90\"},{\"action\":\"Allow\",\"value\":\"23.45.67.91\"}],\"virtualNetworkRules\":[]},\"primaryEndpoints\":{\"blob\":\"https://testacc5558.blob.core.windows.net/\",\"file\":\"https://testacc5558.file.core.windows.net/\",\"queue\":\"https://testacc5558.queue.core.windows.net/\",\"table\":\"https://testacc5558.table.core.windows.net/\"},\"primaryLocation\":\"eastus2euap\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '926',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'ac88ca31-ce76-484f-bce0-f83088b918c7',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14924',
  'x-ms-correlation-request-id': 'ac88ca31-ce76-484f-bce0-f83088b918c7',
  'x-ms-routing-request-id': 'JAPANEAST:20170907T024215Z:ac88ca31-ce76-484f-bce0-f83088b918c7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Sep 2017 02:42:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/eastus2euap/asyncoperations/4d8d8053-72a1-4db2-bcda-1ab9414f6857?monitor=true&api-version=2017-06-01')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodetestgroup457/providers/Microsoft.Storage/storageAccounts/testacc5558\",\"kind\":\"Storage\",\"location\":\"eastus2euap\",\"name\":\"testacc5558\",\"properties\":{\"creationTime\":\"2017-09-07T02:41:43.3636537Z\",\"networkAcls\":{\"bypass\":\"Logging, AzureServices\",\"defaultAction\":\"Deny\",\"ipRules\":[{\"action\":\"Allow\",\"value\":\"23.45.67.90\"},{\"action\":\"Allow\",\"value\":\"23.45.67.91\"}],\"virtualNetworkRules\":[]},\"primaryEndpoints\":{\"blob\":\"https://testacc5558.blob.core.windows.net/\",\"file\":\"https://testacc5558.file.core.windows.net/\",\"queue\":\"https://testacc5558.queue.core.windows.net/\",\"table\":\"https://testacc5558.table.core.windows.net/\"},\"primaryLocation\":\"eastus2euap\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '926',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'ac88ca31-ce76-484f-bce0-f83088b918c7',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14924',
  'x-ms-correlation-request-id': 'ac88ca31-ce76-484f-bce0-f83088b918c7',
  'x-ms-routing-request-id': 'JAPANEAST:20170907T024215Z:ac88ca31-ce76-484f-bce0-f83088b918c7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Sep 2017 02:42:15 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['testacc5558'];};
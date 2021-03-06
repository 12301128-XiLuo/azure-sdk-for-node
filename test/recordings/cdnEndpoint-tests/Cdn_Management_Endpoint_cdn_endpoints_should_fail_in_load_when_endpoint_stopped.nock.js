// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup2266/providers/Microsoft.Cdn/profiles/cdnTestProfile6758/endpoints/cdnTestEndpoint4987/load?api-version=2016-10-02', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"The requested operation cannot be executed on the entity in the current state.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '147',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': 'b66c7f45-4df5-46bf-858c-e68c747f4eed',
  'x-ms-client-request-id': '49e8914b-5109-4177-8ce6-6124a40e9dd4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'bfa58c18-8a86-427e-bd1f-4f0008861c70',
  'x-ms-routing-request-id': 'WESTUS2:20161028T014525Z:bfa58c18-8a86-427e-bd1f-4f0008861c70',
  date: 'Fri, 28 Oct 2016 01:45:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup2266/providers/Microsoft.Cdn/profiles/cdnTestProfile6758/endpoints/cdnTestEndpoint4987/load?api-version=2016-10-02', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"The requested operation cannot be executed on the entity in the current state.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '147',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': 'b66c7f45-4df5-46bf-858c-e68c747f4eed',
  'x-ms-client-request-id': '49e8914b-5109-4177-8ce6-6124a40e9dd4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'bfa58c18-8a86-427e-bd1f-4f0008861c70',
  'x-ms-routing-request-id': 'WESTUS2:20161028T014525Z:bfa58c18-8a86-427e-bd1f-4f0008861c70',
  date: 'Fri, 28 Oct 2016 01:45:24 GMT',
  connection: 'close' });
 return result; }]];
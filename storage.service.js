const azure = require('azure-storage');
const Promise = require('bluebird');

module.exports = {
  name: 'storage',
  actions: {
    readStream: {
      visibility: 'public',
      params: {
        filename: { type: 'string' },
      },
      handler(ctx) {
        return this.blobService.createReadStream('storage', ctx.params.filename);
      },
    },
    writeStream: {
      visibility: 'public',
      handler(ctx) {
        const s = this.blobService.createWriteStreamToBlockBlob(this.blobContainer.name, ctx.meta.filename);
        ctx.params.pipe(s);
      },
    },
  },
  async started() {
    this.blobService = azure.createBlobService('BlobEndpoint=http://127.0.0.1:10000/devstoreaccount1;');
    this.blobService = Promise.promisifyAll(this.blobService);
    this.blobContainer = await this.blobService.createContainerIfNotExistsAsync('storage');
  },
};
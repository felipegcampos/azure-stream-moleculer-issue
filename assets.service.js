const fs = require('fs');

module.exports = {
  name: 'assets',
  dependencies: ['storage'],
  actions: {
    get: async function(ctx) {
      const stream = await ctx.call('storage.readStream', { filename: 'picture.png' });
      const s = fs.createWriteStream('./download/test.png');
      stream.pipe(s);
      s.on('close', () => this.logger.info("File has been received"));
    },
  },
  async started() {
    const stream = fs.createReadStream('./resources/picture.png');
    await this.broker.call('storage.writeStream', stream, { meta: { filename: 'picture.png' } });
  }
};
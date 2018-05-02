class Config {
    constructor(args) {
      this.redisUrl = process.env.RACCOON_REDIS_URL || '127.0.0.1';
      this.redisPort = process.env.RACCOON_REDIS_PORT || 6379;
      this.redisAuth = process.env.RACCOON_REDIS_AUTH || '';
      this.numUsersToTest = 100;
      // PMA Dataset --> configure this to Firebase
      this.PMADataset = 'hackathonseed-export.json';
    }
  }
  
  module.exports = exports = new Config();  
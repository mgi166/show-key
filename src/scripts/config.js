export default class Config {
  async load() {
    return await new Promise((resolve, reject) => {
      chrome.storage.sync.get(null, (config) => {
        resolve(config);
      });
    });
  }
}

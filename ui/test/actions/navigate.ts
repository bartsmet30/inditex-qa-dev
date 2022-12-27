export const Navigate = {
  expectReaching: async (partialUrl: string) => {
    await browser.waitUntil(
      async () => {
        const pageUrl = await browser.getUrl();
        return pageUrl.includes(partialUrl)
      },
      {
        interval: 1000,
        timeout: 10000,
        timeoutMsg: `The expected URL "${partialUrl}" has not been loaded. Instead, we got "${await browser.getUrl()}"`
      }
    );
  },

  toUrl: async (url: string) => await browser.url(url),
};

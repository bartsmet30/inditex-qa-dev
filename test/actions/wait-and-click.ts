export const WaitAndClick = (
  waitBeforeClick = 250,
  waitAfterClick = 250
) => ({
  on: async (
    element: WebdriverIO.Element
  ) => {
    await element.waitForDisplayed();
    await browser.pause(waitBeforeClick);
    await element.click();
    await browser.pause(waitAfterClick);
  }
});

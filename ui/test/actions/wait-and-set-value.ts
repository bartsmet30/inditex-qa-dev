export const WaitAndSetValue = (
  value: string,
  waitBeforeSetValue = 250,
  waitAfterSetValue = 250
) => ({
  in: async (
    element: WebdriverIO.Element
  ) => {
    await element.waitForDisplayed();
    await browser.pause(waitBeforeSetValue);
    await element.setValue(value);
    await browser.pause(waitAfterSetValue);
  }
});

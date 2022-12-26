import { Then } from "@wdio/cucumber-framework";
import WikipediaPage from "page-objects/wikipedia-page";

Then(
  'I can see that the first automation process was described in the year {string}',
  async function (expectedYear: string) {
    await WikipediaPage.earlyHistoryParagraph.waitForDisplayed()
    const earlyHistoryText = await WikipediaPage.earlyHistoryParagraph.getText();

    expect(earlyHistoryText).toHaveTextContaining(expectedYear);
  }
);

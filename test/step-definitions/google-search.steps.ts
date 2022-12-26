import { When } from '@wdio/cucumber-framework';
import GooglePage from 'page-objects/google-page';
import { WaitAndClick } from "actions/wait-and-click";
import { WaitAndSetValue } from "actions/wait-and-set-value";
import { Navigate } from "actions/navigate";

When(
  'I navigate to the url {word}',
  async function (url: string) {
    await Navigate.toUrl(url);
  }
);

When(
  'I accept all cookies',
  async function () {
    await WaitAndClick().on(await GooglePage.acceptAllCookies);
  }
);

When(
  'I type the "{word}" in the search field and hit "search"',
  async function (searchParameter: string) {
    await WaitAndSetValue(searchParameter).in(await GooglePage.searchInputField);
    await WaitAndClick().on(await GooglePage.searchButton);
  }
);

When(
  'I open the wikipedia link in the search results',
  async function () {
    await WaitAndClick().on(await GooglePage.wikipediaLink)
    await Navigate.expectReaching('es.wikipedia');
  }
);

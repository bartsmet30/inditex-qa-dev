class WikipediaPage {
  get earlyHistoryParagraph() {
    return $('a=Ctesibius').parentElement();
  }
}

export default new WikipediaPage()

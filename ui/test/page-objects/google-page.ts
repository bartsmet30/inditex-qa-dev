class GooglePage {
  get acceptAllCookies() {
    return $('div=Aceptar todo')
  }

  get searchInputField() {
    return $('[title="Buscar"]');
  }

  get searchButton() {
    return $('[value="Buscar con Google"]');
  }

  get wikipediaLink() {
    return $('a*=es.wikipedia');
  }
}

export default new GooglePage()

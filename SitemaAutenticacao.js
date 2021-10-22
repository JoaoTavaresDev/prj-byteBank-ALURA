/*
Ser autenticavel significa ter o metodo "autenticar"

ducky type
*/

export class SitemaAutenticacao {
  static login(autenticavel, senha) {
    if (SitemaAutenticacao.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  static ehAutenticavel(autenticavel) {
    return (
      "autenticar" in autenticavel &&
      autenticavel.autenticar instanceof Function
    );
  }
}

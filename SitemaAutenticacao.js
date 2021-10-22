/*
Ser autenticavel significa ter o metodo "autenticar"
*/

export class SitemaAutenticacao {
  static login(autenticavel, senha) {
    return autenticavel.autenticar(senha);
  }
}

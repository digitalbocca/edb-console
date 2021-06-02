<p align="center">
  <img src="https://estudiodigitalbocca.com.br/edb-logo.svg" width="200px">
  <p align="center">Ultima Atualização na v0.13.0</p>
  <h1 align="center">edb-console</h1>
  <h4 align="center">
    Habilita e desabilita mensagens no console. Ferramenta de desenvolvimento EDB.
  </h4>
  <p align="center">
    <img src="https://badgen.net/badge/version/v0.13.0/orange">
  </p>
  <p align="center">(c)2018-2020 Estúdio Digital Bocca</p>
</p>

---

# EDB Console - README

---

## ATENÇÃO

- Esta implementação suporta apenas browers. O suporte a Node será implementado em versões futuras.

- Temos planos para implementar a gravação da configuração em algum banco de dados local do browser.

## INSTALAÇÃO

```bash
npm install --save edb-console
```

## USO

- Importe o módulo:

```js
import edbConsole from 'edb-console'
```

- Iniciar ligado:

```js
edbConsole.config(true)
```

> Por padrão ele inicia a execução desativado.

- Mudando o status via javascript:

```js
edbConsole.trocar()
```

- Recomendamos que utilize uma referência do objeto no window:

```js
window.edbConsole = edbConsole
```

- Desta forma você poderá facilmente ligar e desligar os logs pelo console do navegador:

```bash
window.edbConsole.trocar()
```

- Opções de saída:

```javascript
edbConsole.log(String) // Uma mensagem de log comum.
edbConsole.info(String) // Uma mensagem com formatação informativa.
edbConsole.warn(String) // Uma mensagem com formatação de alerta.
edbConsole.error(String) // Uma mensagem com formatação de erro.
```

## REGISTRO DE ALTERAÇÕES

Veja no arquivo [CHANGELOG](CHANGELOG.md)

> (c)2018-2020 Estúdio Digital Bocca

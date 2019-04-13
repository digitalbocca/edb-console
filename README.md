# Estúdio Digital Bocca

## edb-console

### v0.5.0

> Habilita e desabilita mensagens no console. Ferramenta de desenvolvimento EDB.

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

## CHANGELOG

Veja no arquivo [CHANGELOG](CHANGELOG.md)

> (c)2018-2019 Estúdio Digital Bocca

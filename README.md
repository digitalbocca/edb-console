# Estúdio Digital Bocca

## edb-console

### v0.4.0

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

### Mudanças na v0.4.0

- Adicionado comando .warn()
- Adicionado comando .info()
- Adicionado comando .error()
- Melhoria na documentação.

### Mudanças na v0.3.0

- Melhoria na documentação.

### Mudanças na v0.2.0

- Mostra mudança de estado.

### Mudanças na v0.1.0

- Recebido o código legado.
- Iniciado o Controle de Versão.

> (c)2018-2019 Estúdio Digital Bocca

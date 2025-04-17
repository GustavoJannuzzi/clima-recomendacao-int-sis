# Clima e Recomendações

Este projeto consiste em duas APIs que se comunicam entre si para fornecer recomendações baseadas na temperatura de uma cidade.

- **API B**: Fornece a temperatura de uma cidade.
- **API A**: Consome a API B para gerar uma recomendação baseada na temperatura.

## Funcionalidade

- **API B** tem um endpoint `GET /weather/{city}` que retorna a temperatura de uma cidade.
- **API A** tem um endpoint `GET /recommendation/{city}` que, ao receber uma cidade, consulta a API B para obter a temperatura e, com base no valor, gera uma recomendação.

### Recomendação:

- Se a temperatura for **acima de 30°C**, recomenda-se **hidratação e protetor solar**.
- Se a temperatura for **entre 15°C e 30°C**, é recomendado que o clima está **agradável**.
- Se a temperatura for **igual ou abaixo de 15°C**, a recomendação é **usar um casaco**.

## Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/GustavoJannuzzi/clima-recomendacao-int-sis.git
   
Navegue até a pasta do projeto e entre nas pastas api-a e api-b para instalar as dependências:
   ```bash
  cd clima-recomendacao-int-sis/api-a
  npm install
```
E para a API B:

```bash
cd ../api-b
npm install
```

Rode ambas as APIs em terminais separados:

Para a API A (Recomendação):

```bash
cd api-a
node index.js
```
Para a API B (Clima):

```bash
cd api-b
node index.js
```

# Croct Challenge CS

## Desafio

O desafio consiste em criar uma aplicação através do software da croct, com o objetivo de conseguir personalizar uma página com as necessidades do cliente e sem ter que dar deploy toda vez que for necessário fazer uma alteração.

---

## Tecnologias

- [React](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Croct](https://croct.com/)
- [Vite](https://vitejs.dev/)

---

## Como rodar o projeto

- Clone o repositório
- Instale as dependências com `npm install`
- Crie um arquivo `.env` na raiz do projeto e adicione a variável `VITE_CLIENT_ID=[CHAVE-DA-APLICAÇÃO-CROCT]`, por questões de segurança, essa chave não foi adicionada ao repositório e será enviada por email.
- Rode o projeto com `npm run dev`
- Após rodar o projeto, teste as experiências criadas no painel da croct
- Clique [aqui]((http://localhost:5173/?croct-preview=eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6ImMwM2VlOGY0LWM0ZWYtNGZlYy04NzQxLTFhZmIzOTk4ZjViMSJ9.eyJleHAiOjE3MDExMDI1NDYsImlhdCI6MTcwMTA5ODk0NiwibmJmIjoxNzAxMDk4OTQ2LCJpc3MiOiJjcm9jdC5jb20iLCJhdWQiOiJjcm9jdC5jb206YWRtaW4iLCJzY29wZSI6WyJQUkVWSUVXIl0sInN1YiI6IjVhNjQ2ZmY3LTE5ZDEtNGQ0MS1iNzk2LTM5YmZhMjEwNGI5NSIsIm1ldGFkYXRhIjp7InByZXZpZXdNb2RlIjoicHVibGlzaGVkQ29udGVudCIsImV4cGVyaWVuY2VJZCI6IjNkYjY5MjE1LTIzMjYtNDJjYi1hNzVkLWMwYTk2MzU5YjA2YSIsImV4cGVyaWVuY2VOYW1lIjoiUGFyaXMgRXhwZXJpZW5jZSIsImF1ZGllbmNlSWQiOiI3ZjM1NTk2MC1iZGExLTRkMGQtOTk0OS1kMTc0OTE5M2Y5OGYiLCJhdWRpZW5jZU5hbWUiOiJVc2VycyBmcm9tIFBhcmlzIiwibG9jYWxlIjoicHQtYnIifX0.lxi1SPe7bBkZMCiYu5XbLEE3kdvGnKl3ebw2ZxX_HjjDIKH2SnilZJsR4QVdK7Bh-jxbzMetWAkuS941EnQaOQ)) para ter acesso a preview da experiência Paris
- Clique [aqui](http://localhost:5173/?croct-preview=eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6ImMwM2VlOGY0LWM0ZWYtNGZlYy04NzQxLTFhZmIzOTk4ZjViMSJ9.eyJleHAiOjE3MDExMDI3NTMsImlhdCI6MTcwMTA5OTE1MywibmJmIjoxNzAxMDk5MTUzLCJpc3MiOiJjcm9jdC5jb20iLCJhdWQiOiJjcm9jdC5jb206YWRtaW4iLCJzY29wZSI6WyJQUkVWSUVXIl0sInN1YiI6IjVhNjQ2ZmY3LTE5ZDEtNGQ0MS1iNzk2LTM5YmZhMjEwNGI5NSIsIm1ldGFkYXRhIjp7InByZXZpZXdNb2RlIjoicHVibGlzaGVkQ29udGVudCIsImV4cGVyaWVuY2VJZCI6IjJkNzI1MjNkLTAxMmYtNGU2ZC04NjkxLTUwMDAxMDFhNGFjMyIsImV4cGVyaWVuY2VOYW1lIjoiTWlhbWkgRXhwZXJpZW5jZSIsImF1ZGllbmNlSWQiOiJjOGQxY2Y2ZS02MjE5LTRiMTctODg1YS05OTFiZTM5MTAyZjkiLCJhdWRpZW5jZU5hbWUiOiJVc2VycyBmcm9tIE1pYW1pIiwibG9jYWxlIjoicHQtYnIifX0.Bnw8cE8k0sQwdYzK4aTLFfHi_OhVDHI4-SPK3aabx2iS2PzLjBI4TCfaqcZIgBDM1vRhoR8CsxSzavqSZs8T7A) para ter acesso a preview da experiência Miami
- Obs: Caso não consiga acessar o preview, verifique se o servidor está rodando na porta 5173.
___

## Observações

- O projeto foi criado utilizando o [Vite](https://vitejs.dev/), pois é um bundler mais rápido que o webpack e o parcel, além de ser mais simples de configurar.
- O projeto foi criado utilizando o [Tailwind](https://tailwindcss.com/), pois é um framework css que utiliza classes utilitárias, o que facilita a criação de componentes e a estilização dos mesmos.
- Como o projeto é pequeno e bem direto, não foi feito uso do [Cypress](https://www.cypress.io/), mas caso fosse necessário, seria utilizado para fazer os testes e2e.
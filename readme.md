# Teste API

## Sobre o Projeto
- Este é um projeto que visa validar e retornar as informações do boleto, através das linhas digitéveis do mesmo.

## Rodar Projeto
- Primeiro passo é preciso instalar as dependências do projeto:
```
yarn install
```

- Para rodar o projeto:
```
yarn dev
```

## Instruções de uso da API
- O projeto estará rodando na porta 8080
- Para o usar o endpoint de verificação dos boletos é necessario ter algum cliente `REST` tipo Insomnia.
```
http://localhost:8080/boleto/{codigo_boleto}
```

- Logo após consumir a `API`, você terá um resultado como este exemplo:
```JSON
{
“barCode”: “21299758700000020000001121100012100447561740”,
“amount”: “20.00”,
“expirationDate”: “2018-07-16”
}
```
## Tecnologias:
- Node - 14.15.5
- Yarn - 1.22.10
- Celebrate - 15.0.1
- Express - 4.17.3
- Morgan - 1.10.0
- Nodemon - 2.0.15

---

Feito por [Alexandre Pereira](https://github.com/alexdevelp)
<h1 align="center">Outerkut - Imersão ReactJS</h1>

<a href="https://github.com/DinowSauron/Outerkut" title="Outerkut" >
    <p align="center">
        <img 
        src="./outerkut/public/icons/outerkut-logo.svg"
        width="60%"
        />
    </p>
</a>

<p align="center">
   <a href="#Como-Inicializar">Como Inicializar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#Comandos-Utilizados">Comandos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="/LICENSE">Licença</a>
</p>



Este projeto é um aplicativo de rede social onde é necessário "logar" na sua conta do github e com isso pode ver seus seguidores/amigos/comunidades, tudo isso incrementando a API do github junto com o banco de dados do DATO CMS.

Note que o projeto foi feito no evento da Alura chamado **Imersão React #2** porém eu decidi mudar o nome do projeto e seu estilo, além das alterações no código.

## Tecnologias Utilizadas:

* HTML5.
* CSS3.
* ReactJS.
* NEXT JS.
* DATO CMS.
* GraphQL.
* Styled components.
* Responsividade.


## Como Inicializar:
* `cd outerkut` Para abrir no diretório correto.
* `yarn dev` Para inicializar o projeto.
* Crie um arquivo .env.local dentro da pasta [Outerkut](./outerkut/) e coloque sua Autenticação do DATO CMS
    * .env.local 
    ```env
        # DATO CMS
        NEXT_PUBLIC_AUTH=DatoReadOnlyToken
        FULL_ACESS_TOKEN=DatoFullAcessToken
    ```
    * No [DATO CMS](https://www.datocms.com/), crie o seguinte modelo, com o nome exatamente igual, todos sendo uma string de linha única:
    ```
    Comunity:
        Title* 
        Image URL
        Link URL
        Creator Slug
    ```

## Notas Pessoais:
...
Interresante o fato do projeto estar consultando diversas AP?I, como a do github e a do DATO CMS.
 
Não tinha gostado do fato das imagens serem carregadas pelo website deles, se o app deles parar de funcionar o meu também iria, então adaptei o código e coloquei as fotos localmente, foi bem trabalhoso mais achei necessário.

* React developer tools for chrome.
* https://www.youtube.com/c/DevSoutinho/videos - Dev Soutino.
* Reset CSS | Normalize CSS.
* CSS grid garden (Game).
* Spread operator (...Array)

## DATO CMS Config:

Graph QL:
```GraphQL
    query{
        allCommunities {
            id
            title
            imageUrl
            linkUrl
            creatorSlug
            _status
            _firstPublishedAt
        }
    }
```

## Comandos Utilizados:

* ``yarn create next-app --example with-styled-components "Nome do app"`` - Criar a aplicação.
* ``cd "nome do app"` - entrar na pasta do app.
* ``yarn dev`` - iniciar servidor de desenvolvimento.






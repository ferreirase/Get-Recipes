<img alt="GoStack" src="https://media-manager.noticiasaominuto.com/1920/naom_59fed8ab242e3.jpg" />

<h3 align="center">
  GetRecipes
</h3>

<blockquote align="center">“Quem planta colhe... E nunca desiste”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ferreirase/Get-Recipes?color=%2304D361">

  <a href="https://www.linkedin.com/in/anderson-raphael-ferreira">
    <img alt="Made by Ferreira" src="https://img.shields.io/badge/made%20by-Ferreira-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/ferreirase/GoFinances/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/ferreirase/Get-Recipes?style=social">
  </a>
</p>

## :rocket: Sobre o projeto

O **GetRecipes** é uma API que consome os serviços das API's **[RecipePuppy](http://www.recipepuppy.com/about/api/)** e **[Giphy](https://developers.giphy.com/docs/)** para buscas de Receitas e Gif's, respectivamente.
A API recebe como parâmetro um conjunto de ingredientes (máximo 3) pelos Query's Parameters(parâmetros da URL) e retorna os itens utilizados para realizar a busca e uma lista de receitas formatadas.

Cada item lista de receitas possui 4 atributos:
- Título da receita;
- Lista de ingredientes;
- Link para acessar a receita;
- Link de um gif para a receita.


### :floppy_disk: A Estrutura

A API possui apenas um endpoint, que deve respeitar a seguinte chamada:

`http://{HOST}/recipes/?i={ingredient_1},{ingredient_2}`

Exemplo:

`http://localhost/recipes/?i=onion,tomato`


A resposta dessa requisição é devolvida com a seguinte estrutura:

```
{
	"keywords": ["onion", "tomato"],
	"recipes": [{
		"title": "Greek Omelet with Feta",
		"ingredients": ["eggs", "feta cheese", "garlic", "red onions", "spinach", "tomato", "water"],
		"link": "http://www.kraftfoods.com/kf/recipes/greek-omelet-feta-104508.aspx",
		"gif": "https://media.giphy.com/media/xBRhcST67lI2c/giphy.gif"
	   },{
		"title": "Guacamole Dip Recipe",
		"ingredients": ["avocado", "onions", "tomato"],
		"link":"http://cookeatshare.com/recipes/guacamole-dip-2783",
		"gif":"https://media.giphy.com/media/I3eVhMpz8hns4/giphy.gif"
	   }
	]
}
```



### :cd: Rodando a aplicação!

**`OBS!!!`**: *``` Para rodar a aplicação na sua máquina, garanta que tenha instalados na mesma o Docker e Docker Compose. ```*
 
#### Subindo o servidor backend
  1. Clone/Baixe este repositório na sua máquina;
  2. Abrir o terminal na raiz da pasta e rodar "docker-compose up --build" para criar o contâiner do projeto;
  3. Pronto, seu servidor backend está no ar e pronto pra ser acessado no endereço "http://localhost:3333". 
  
  Para pesquisar na API, no browser e/ou em algum outro cliente, acesse [http://localhost:3333/recipes/?i=onion,tomato](http://localhost:3333/recipes/?i=onion,tomato) e vá mudando os ingredientes no parâmetro "i" da URL e busque outras receitas. 

### :wrench: Arquivo de configuração

*``` As variáveis de ambiente e configuração estão presentes no arquivo ".env" na raiz do projeto. ```*

**VARIÁVEIS**

- *``` API_KEY_GIPHY ```*: é a sua chave de API para poder acessar a API do **[Giphy](https://developers.giphy.com/docs/)**. Entre no site, cadastre-se e lá você deve gerar essa chave. Com ela em mãos, é só informar neste campo no arquivo ".env".

- *``` BASE_URL_GIFS ```*: é a URL base da API do **[Giphy](https://developers.giphy.com/docs/)**. 

- *``` BASE_URL_RECIPES ```*: é a URL base da API do **[RecipePuppy](http://www.recipepuppy.com/about/api/)**. 


### :mag_right: Específicação dos testes

Para rodar os testes da aplicação basta abrir o terminal na raiz da pasta e rodar **"yarn test"** ou **"npm run test"**.

Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.

Para esse projeto, temos os seguintes testes:

- **`should be return array of Recipes`**: aqui é testado o serviço de busca de receitas na API do **[RecipePuppy](http://www.recipepuppy.com/about/api/)**. Deve retornar um array de receitas.

* **`should be return one Gif URL`**: aqui é testado o serviço de busca de gifs individuais na API do **[Giphy](https://developers.giphy.com/docs/)**. Deve retornar uma URL para um gif.

* **`should be return Array of Ingredients`**: aqui é testado se os ingredientes na receita formatada é do tipo array. Deve retornar um array de ingredientes. 


## :memo: Tecnologias Utilizadas no Projeto

- *``` NodeJS ```*
- *``` TypeScript ```*
- *``` Express ```*
- *``` Eslint ```*
- *``` Prettier ```*
- *``` Mocha ```*
- *``` Chai ```*
- *``` Instanbul ```*
- *``` Axios ```*
- *``` Docker ```*

---

## :man: Author
[**_```Anderson Raphael Ferreira```_**](https://www.linkedin.com/in/anderson-raphael-ferreira/)

// Captura os elementos do DOM
const titulo = document.getElementById("titulo");
const ul = document.querySelector("ul");
const a = document.querySelector("a");
const listaOrdenada = document.getElementById("lista-ordenada");

// Adiciona conteúdo textual aos elementos 'h1' e 'a'
titulo.innerText = "Título da Página";
a.innerText = "Visitar o site da Proz Educação";

// Adiciona itens à lista não ordenada usando innerHTML
ul.innerHTML = "<li>Item 1</li><li>Item 2</li><li>Item 3</li>";

// Adiciona itens à lista ordenada com links usando innerHTML
listaOrdenada.innerHTML = "<li><a href='https://exemplo1.com'>Link 1</a></li><li><a href='https://exemplo2.com'>Link 2</a></li><li><a href='https://exemplo3.com'>Link 3</a></li>";

  class Interface {
    constructor(){
        this.initButtons();
    }

    initButtons(){
        let menu = document.getElementById('toggle-menu');
        let inicio = document.getElementById('selecao-inicio');
        let sobre = document.getElementById('selecao-sobre');
        let parceiros = document.getElementById('selecao-parceiros');
        let estrutura = document.getElementById('selecao-estrutura');
        let trabalho = document.getElementById('selecao-trabalho');


        menu.addEventListener('click', function() {
            var menu = document.querySelector('.menu-selecao');
            menu.classList.toggle('mostrar');
        });

        inicio.addEventListener('click', function() {
            var menu = document.querySelector('.menu-selecao');
            menu.classList.toggle('mostrar');
        });

        sobre.addEventListener('click', function() {
            var menu = document.querySelector('.menu-selecao');
             menu.classList.toggle('mostrar');
        });

        parceiros.addEventListener('click', function() {
            var menu = document.querySelector('.menu-selecao');
             menu.classList.toggle('mostrar');
        });

        estrutura.addEventListener('click', function() {
            var menu = document.querySelector('.menu-selecao');
             menu.classList.toggle('mostrar');
        });

        trabalho.addEventListener('click', function() {
            var menu = document.querySelector('.menu-selecao');
             menu.classList.toggle('mostrar');
        });
    }
  }
  
  
  
  var menu = new Interface();
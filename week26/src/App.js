import logo from './logo.svg';
import './App.css';
import React from 'react';
import Superhero from './assets/components/superhero';
import './assets/components/superhero.css';

const superheroes = [
  {
  name:"Бэтмен",
  url: "img/batman.jpg",
  universe:"DC Comics",
alter:"Брюс Уэйн",
action:"борец с преступностью, филантроп, миллиардер",
friends:" Робин, Бэтгерл",
superpowers:"интеллект, обширные познания, знания боевых искусств, ловкость",
},
{
  name:"Супермен",
  url: "img/superman.jpg",
  universe:"DC Comics",
alter:"Кларк Кент",
action:"борец за справедливость",
friends:"собака Крипто",
superpowers:"непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
},{
  name:"Железный человек",
  url: "img/ironman.jpg",
  universe:"Marvel Comics",
  alter:"Тони Старк",
action:"гений, миллиардер, плейбой, филантроп",
friends:"Мстители",
superpowers:"высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы."
},
{
  name:"Капитан Америка",
  url: "img/spider-man.jpg",
  universe:"Marvel Comics",
alter:"Питер Паркер",
action:"борец за справедливость, студент, фотограф",
friends:"Мстители, Фантастическая четверка, Люди Икс",
superpowers:"сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины."
},
{
  name:"Человек паук",
  url: "img/spider-man.jpg",
  universe:"Marvel Comics",
alter:"Питер Паркер",
action:"борец за справедливость, студент, фотограф",
friends:"Мстители, Фантастическая четверка, Люди Икс",
superpowers:"сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины."
},
{
  name:"Капитан Америка",
  url: "img/capamer.jpg",
  universe:"Marvel Comics",
alter:"Стивен Роджерс",
action:"супер-солдат",
friends:"Мстители",
superpowers:"сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя"
}]


function App() {
  return (
    <div className="superheroesContainer">
      {
      superheroes.map((superhero)=>
      <Superhero name={superhero.name}  universe={superhero.universe} alter={superhero.alter} action={superhero.action} friends={superhero.friends} superpowers={superhero.superpowers} url={superhero.url}></Superhero>)
    }
    </div>
  );
}

export default App;

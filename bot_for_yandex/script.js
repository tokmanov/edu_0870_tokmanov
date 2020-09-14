// ==UserScript==
// @name         Bot for yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==

let yandexInput = document.getElementById('text');
let keywords = ['Гобой', 'Как звучит флейта', 'Кларнет', 'Саксофон'];
let keyword = keywords[getRandom(0,keywords.length)];
let button = document.querySelectorAll(".button_theme_websearch")[0];
let i = 0;
let links = document.links;

if (button != undefined){
    let timerId = setInterval(function(){
        yandexInput.value += keyword[i];
        i++
    if (i==keyword.length){
        clearInterval(timerId);
        button.click();
    }
   },1000);
}else if(location.hostname == "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai"){
    setInterval(()=>{
        let index = getRandom(0,links.length);
        if (getRandom(0,101)>=70){
        location.href = 'https://yandex.ru/';

}else if (links[index].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
    links[index].click();
}},getRandom(3000,7000));

}else{
    let nextYandexPage = true;
    for(let i=0; i<links.length; i++){

        if(links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
            let link = links[i];
            nextYandexPage = false;
            links[i].removeAttribute('target');
            setTimeout(()=>{link.click();},getRandom(1000,4000));
            break;
        }
    }
    if (document.querySelector('[aria-label*="Текущая страница 7"]')){
        nextYandexPage = false;
        location.href = 'https://yandex.ru/';
    }
    if (nextYandexPage){
       setTimeout(()=>{document.querySelector('[aria-label*="Следующая страница"]').click();},getRandom(1000,4000));
    }
}
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

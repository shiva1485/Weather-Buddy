
import {articles} from './test.js';
let presentArticle = JSON.parse(localStorage.getItem("readThisArticle"));
window.addEventListener("load",function(event){
    event.preventDefault();
    displayNews(presentArticle,articles);
})


function displayNews(presentArticle,articles){
    let div = document.querySelector("#content");
    let headlinediv = document.createElement("div");
    let headline = document.createElement("h1");
    headline.innerText = presentArticle.headline;
    let description = document.createElement("h4");
    description.innerText = presentArticle.description;
    headlinediv.append(headline,description);
    div.append(headlinediv);

    var newsDiv = document.createElement("div");
    newsDiv.setAttribute("class","left")
    articles.forEach(function(elem,index){
        console.log(elem)
        if(index<10){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", elem.imageUrl);
        let news = document.createElement("h2");
        news.innerText = elem.headline;

        div.append(img,news);
        newsDiv.append(div);
        document.querySelector("#content").append(newsDiv);
        }
    });
    

    let paraDiv = document.createElement("div");
    console.log()
    let img=document.querySelector("img");
    if(presentArticle.imageUrl == undefined){
        img.setAttribute("src","https://static01.nyt.com/images/2020/07/21/autossell/sports-reboot-promo-still/sports-reboot-promo-still-videoSixteenByNineJumbo1600.jpg");
    }
    else{
    img.setAttribute("src",presentArticle.imageUrl);
    }
    let para = document.createElement("p");
    para.innerText = "The latest wave in the parade of storms to slam the West Coast brought additional flooding hazards across California on Friday, killing at least two people and isolating several communities amid the first flash flood emergencies of the year.One of the two deaths associated with the storm occurred in Placer County, located in Northern California, and the second in San Bernardino County, located in the southern portion of the state, spokesperson Shawn Boyd told AccuWeather.A third person died on Friday in Oakland, California, when the roof at a commercial warehouse and distribution facility for Peet's Coffee partially collapsed. The cause of the collapse is currently being investigated to determine whether the heavy rain played a direct role, according to Michael Hunt, spokesperson for the Oakland Fire Department. State and OSHA officials were on the scene Friday as a part of the investigation.The man who was killed was a longtime employee of Peet's Coffee, and he had been in the building with a woman who was taken to the hospital for non-life-threatening injuries. They were the only people in the building at the time, according to officials."
    paraDiv.append(img,para);
    document.querySelector("#content").append(paraDiv);

    var rightDiv = document.createElement("div");
    rightDiv.setAttribute("class","right")
    articles.forEach(function(elem,index){
        if(index<5 && elem.headline != presentArticle.headline){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", elem.imageUrl);
        let news = document.createElement("h2");
        news.innerText = elem.headline;

        div.append(img,news);
        rightDiv.append(div);
        document.querySelector("#content").append(rightDiv);
        }
    });
}
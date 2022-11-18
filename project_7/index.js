//tack_1

/* За допомогою методів об’єкта window створити:
	1) нове вікно розміром 300х300 пікселів.
	2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
	3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
	4) із затримкою 2 сек закрийте вікно. */

  let newWin;
  function newWindow() {
      newWin = window.open("", "", "width=300, height=300");
  };
  setTimeout(function(){newWin.resizeTo(500, 500)}, 2000);
  setTimeout(function(){newWin.moveTo(200, 200)}, 4000);
  setTimeout(function(){newWin.close()}, 6000);

  //tack_2

  /* Для заданої HTML-сторінки:
<p id ='text'>I learning JavaScript events!</p> 
<div>
	<button . . . . . >Change style!</button>
</div>
напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>:
колір шрифту – оранжевий, розмір шрифту 20 пс, шрифт сімейства "Comic Sans MS". */

let text = document.querySelector('#text');
let bttn = document.querySelector('#btn');

function changeCSS() {
    text.style.color = 'orange';
    text.style.fontSize = '20px';
    text.style.fontFamily = 'Comic Sans MS';
}
bttn.addEventListener('click', function() {
    changeCSS()
});


//tack_3

/*Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку 
з відповідними подіями на кожному елементові:
	1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
	2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
	3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
	4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
	*/
 
let blue = document.querySelector('#blue');
let pink = document.querySelector('#pink');
let brown = document.querySelector('#brown');
let yellow = document.querySelector('#yellow');
blue.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
});
pink.addEventListener('dblclick', function(){
    document.body.style.backgroundColor = 'pink';
});

brown.addEventListener('mousedown', function(){
    document.body.style.backgroundColor = 'brown';  
});
brown.addEventListener('mouseup', function(){
    document.body.style.backgroundColor = 'white';
   
});
yellow.addEventListener('mouseover', function(){
    document.body.style.backgroundColor = 'yellow';
});
yellow.addEventListener('mouseout', function(){
    document.body.style.backgroundColor = 'white';
});

//task_4

/* Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку.
Можуть видалятися всі елементи в будь-якому порядку. */

let btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
    let val = document.querySelector('#list').value;
    if(val) {
        document.querySelector(`option[value='${val}']`).remove()
    }
});

//tack_5

/* Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!",
а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
*/

document.querySelector("#liveBttn").onclick = function() {
  document.querySelector("#clickMess").innerText += "I was pressed! \r\n";
};
document.querySelector("#liveBttn").onmouseover = function() {
  document.querySelector("#clickMess").innerText += "Mouse on me! \r\n";
};
document.querySelector("#liveBttn").onmouseout = function() {
  document.querySelector("#clickMess").innerText += "Mouse is not on me! \r\n";
};

//tack_6

/*Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення. */


window.onresize = displayWindowSize;
window.onload = displayWindowSize;
let myWidth;
let myHeight;

function displayWindowSize() {
myWidth = window.innerWidth;
myHeight = window.innerHeight;
document.querySelector("#program").innerHTML = "Width: " + myWidth + ", Height: " + myHeight;
};

//tack_7

/*На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн,
у другому – назви міст. Реалізувати роботу таким чином,
щоб коли вибирається з лівого випадаючого списку певна країна - в правому випадаючому  списку з'являлися міста цієї країни.
Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.*/

const cityOfUSA = ["Los Angeles", "Las Vegas", "San Francisco", "NYC"];
const cityOfGermany = ["Bavaria", "Stuttgart", "Hesse", "Berlin"];
const cityOfUkraine = ["Dnipro", "Zaporozhye", "Odessa", "Poltava"];

const countryDropDown = document.querySelector("#countryDropDown");
const cityDropDown = document.querySelector("#cityDropDown");
const s = document.querySelector("#country");

countryDropDown.addEventListener("change", e => {
    s.innerText = e.target.value;
    if (e.target.value == "USA") {
        removeAll();
        for (let i = 0; i < cityOfUSA.length; i++) {
            cityDropDown.options[cityDropDown.options.length] = new Option(cityOfUSA[i], cityOfUSA[i]);
        }
    } else if(e.target.value == "Germany") {
        removeAll();
        for (let i = 0; i < cityOfUSA.length; i++) {
            cityDropDown.options[cityDropDown.options.length] = new Option(cityOfGermany[i], cityOfGermany[i]);
        }
    } else if (e.target.value == "Ukraine"){
        removeAll();
        for (let i = 0; i < cityOfUSA.length; i++) {
            cityDropDown.options[cityDropDown.options.length] = new Option(cityOfUkraine[i], cityOfUkraine[i]);
        }
    }
})

cityDropDown.addEventListener("change", e=>{
    s.innerHTML += ", " + e.target.value;
})

function removeAll() {
    while (cityDropDown.options.length > 0) {
        cityDropDown.remove(0);
    }
};
   
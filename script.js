//Переменная для подсчета 
let a = 0;
//Переменая для чронения пароля

let pass
//Пока переменная a<3 выполнять
while (a < 3) {
    //Запрашивать пароль
    pass = prompt('ВEдите пароль');
    //Если пароль равен "qwerty"
    if (pass == 'qwerty') {
        //Выводить в консоль "Добро пожаловать!"
        console.log("Добро пожаловать!");
        // Выйти из цикла
        break;
        //Иначе
    } else {
        // Выводить в консоль" Неверный пароль"
        console.log('Неверный пароль');
    }
    //Увеличить значение переменной i  на i

    a++;
}
console.log("Код после цикла");


//пример
//Выведите в консоль числа введенные с клавиатуры пока не будет введен 0

let numb = 0;
do {
    numb = prompt("ведите число");
    console.log(numb);

} while (numb != 0)

//Вычитать из полу
let numbr = 0
do {

    console.log(numbr);
    numb++

} while (numbr < 5)








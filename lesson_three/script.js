'use strict';
// let regExp = new RegExp('выражение', 'флаги');// => /fsfs/flags
// let regExp = /regexp/flags

// i - поиск без учета регистра
// g - множественный поиск
// m - многострочный поиск

let str = 'Язык JavaScript называется так из-за популярности языка java';
// let regExp = new RegExp('java', 'ig');
// console.log(regExp);

// search
// -1 - если нет совпадений
// возвращает индекс первого совпадения
// console.log(str.search(regExp));

// match
// null - если нет совпадений
// возвращает массив-объект с подробной информацией о совпадении
// при использовании флага g вернет массив совпадений
// console.log(str.match(regExp));

// replace
//
// console.log('+7 (000)000-00-00'.replace('-', ':'));
// console.log('+7 (000)000-00-00'.replace(/-/g, ':'));

// let name = 'Snow, John';

// console.log(name.replace(/([a-z]+), ([a-z]+)/i, '$2 $1'));
// console.log(name.replace(/([a-z]+), ([a-z]+)/i, 'Было: $&\nСтало: $2 $1'));

// classes
// \d - [0123456789] - [0-9]
// \D - [^0123456789] - [^0-9]
// \w - [a-z0-9_]
// \W - [^a-z0-9_]
// \s - space, tab, \n
// \S
// \b - граница слова
// \B - не граница слова

// Квантификаторы
// {n} - строго n раз
// {n,m} - от n до m раз
// {n,} - от n до бесконечности
// {,m} - от 0 до n раз

// Сокращения
// + - {1,}
// * - {0,}
// ? - {0,1}

// console.log('+7-(000) 000:00-00'.replace(/\D+/g, '')); // => 70000000000
// console.log('+7-(000) 000:00-00'.match(/\d+/g, '').join('')); // => 70000000000

// console.log('color colour'.match(/colou?r/g));
// console.log('color colour colotr coloutr colotur'.match(/colo[ut]?r/g));

// console.log('Язык JavaScript это не Java вам =)'.match(/\Bjava\B/i));

// console.log('JavaScript это не java'.match(/^java/));
// console.log('JavaScript это не java'.match(/java$/));

// console.log('Chapter 7.2'.match(/\d\.\d/g));

// RegExp methods
// test (true | false)
// console.log(/java/i.test(str));

// exec
// let result;
// let regExp = /java/ig;
//
// console.log(`Начальный индекс lastIndex ${regExp.lastIndex}`);
// while(result = regExp.exec(str)) {
//     console.log(result);
//     console.log(`Текущий lastIndex ${regExp.lastIndex}`);
// }
// console.log(`Конечный lastIndex ${regExp.lastIndex}`);
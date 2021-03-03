// Массивы строк для добавления в массив строк (:
const stringArray1 = ['Hello,', 'world']
const stringArray2 = ['Brad', 'came', 'to', 'dinner', 'with', 'us']
const stringArray3 = ['This', 'is', 'a', 'very', 'big', 'sentence', 'I', 'swear', 'you']
const stringArray4 = ['Once', 'again', 'and', 'again', 'big', 'sentence']
const stringArray5 = ['He', 'loves', 'tacos']


// Основной массив, который включает в себя предыдущие 5 массивов
let strings = [
    stringArray1, stringArray2, stringArray3, stringArray4, stringArray5
]

console.log("Source strings: ")
console.log(strings)

stringFormat(strings)

/**
 * Функция для дальнешей работы с массивом
 * @param string - принимаем массив со строками 
 */
function stringFormat(string) {

    let whichFormatArray = []
    let resArray = []

    // Соединяем элементы массивов строк в цельные строки для дальнейшей работы
    // 'hello', 'world' => 'Hello, world'
    for (var i = 0; i < string.length; i++) {
        resArray[i] = string[i].join(' ')
    }


    /**
     * Проверка выполнения условий форматирования
     * if строка < 16 символов, то пишем в whichFormatArray LEFT и форматируем строку
     * else if строка > 16 символов, то пишем в whichFormatArray RIGHT и форматируем строку
     * 
     * Запись этого условия можно сократить с if-elseif до обычного if-else
     */
    for (var i = 0; i < resArray.length; i++) {
        if (resArray[i].length < 16) {
            whichFormatArray.push('LEFT')
            resArray[i] = '*' + resArray[i] + '    *'
        } else if (resArray[i].length > 16) {

            whichFormatArray.push('RIGHT')

            /**
             * Здесь находим середину строки с индексом i
             * Пробелы и расстояния до них
             */
            let middle = Math.floor(resArray[i].length / 2)
            let before = resArray[i].lastIndexOf(" ", middle)
            let after = resArray[i].lastIndexOf(" ", middle + 1)

            if (middle - before < after - middle) {
                middle = before
            } else middle = after


            // Вставка с удалением (замена) предыдущей строки на нашу
            resArray.splice(i, 0, "*    " + resArray[i].substring(0, middle) + "*")
            i++
            resArray.splice(i, 1, "*    " + resArray[i].substring(middle + 1) + "*")
        }
    }

    /**
     * Наводим красоту и выводим все строки в консоль
     * Unshift - добавляем в начало массива
     * Push - добавляем в конец массива
     */
    resArray.unshift('******************') 
    resArray.push('******************')

    resArray.forEach(element => console.log(element))

    console.log(whichFormatArray)
    
}
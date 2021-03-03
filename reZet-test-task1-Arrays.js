const sourceArray = [1, 3, 5, 4, 5, 7]

// # TASK
// a > b < c or a < b > c
// [1, 3, 5, 4, 5,7]
// 1, 3, 5 => 1 < 3 < 5 - NO (0)
// 3, 5, 4 => 3 < 5 > 4 - YES (1)
// Output:
// New array [0, 1] (true, false) 
// ################

console.log('Source: ' + sourceArray)

console.log(checkArray(sourceArray))

// для себя
const firstConditionCheckVal = 1 < 3 && 3 > 5
firstConditionCheckVal ? console.log("true") : console.log("false")

/**
 * Функция для дальнейшей работы с массивом, возвращает результирующий массив,
 * наполненный значениями true или false в зависимости от того, какие условия
 * были выполнены во время прохода
 * @param array - принимаем массив
 */
function checkArray(array) {

    let resultArray = []

    for (var i = 0; i < array.length-1; i++) {
        for (var j = 1; j < array.length-1; j++) {
            // var1 > var2 < var3 OR var1 < var2 > var3. Если верно что-то из этого - пишем в массив 1 (true)
            if ( (array[i] > array[j] && array[j] < array[j+1]) || 
                    (array[i] < array[j] && array[j] > array[j+1]) ) {
                console.log("Adding 1 to res array because one of rules is true.")
                console.log("Array elements: " + array[i] + " " + array[j] + " " + array[j+1])
                resultArray.push(1)
                // Или пишем в массив 0 (false)
            } else {
                console.log("Adding 0 to res array because all rules is false")
                console.log("Array elements: " + array[i] + " " + array[j] + " " + array[j+1])
                resultArray.push(0)
            }
            i++
        }
    }

    console.log(resultArray)
    return resultArray
}
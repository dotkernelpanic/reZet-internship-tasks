/**
 * Размер матрицы: 3 * matrixSize, где matrixSize - число, 
 * которое введёт пользователь
 */


let matrixSize = prompt("Matrix Size: ")

// Определяем пустые массивы для передачи в функцию
let array1 = []
let array2 = []
let array3 = []

if (matrixSize >= 3) {
    checkMatrix(array1, array2, array3, matrixSize)
} else alert('Size must be greater than or equal to 3, refresh the page and try again')


/**
 * Функция для работы с матрицей
 * ПО УМОЛЧАНИЮ РАБОТАЕТ С МАТРИЦЕЙ ИЗ ЗАДАНИЯ
 * ДЛЯ РАБОТЫ С КАСТОМНОЙ МАТРИЦЕЙ СЛУЧАЙНЫХ ЧИСЕЛ НАДО ПОМЕНЯТЬ 
 * @param taskMatrix на @param matrix
 * 
 * @param  a1 - (а2-а3) принимаем массивы для инициализации матрицы
 * @param  size - размер матрицы (введённый пользователем matrixSize)
 */
function checkMatrix(a1, a2, a3, size) {

    /**
     * Определяем сл. значения:
     * Массив для проверки
     * Пустый массив-участок
     * Результирующий массив
     */
    const toCheckArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let cluster = []
    let resArray = []

    const max = 9
    const min = 1

    // Заполняем массивы случайными значениями от 1 до 9
    for (var i = 0; i < size; i++) { a1.push(Math.floor(Math.random() * (max - min + 1)) + min) }
    
    for (var i = 0; i < size; i++) { a2.push(Math.floor(Math.random() * (max - min + 1)) + min)  }
    
    for (var i = 0; i < size; i++) { a3.push(Math.floor(Math.random() * (max - min + 1)) + min)  }

    let matrix = [
        a1, a2, a3
    ]

    // Матрица из задания для проверки
    let arr1 = [1, 2, 3, 2, 7]
    let arr2 = [4, 5, 6, 8, 1]
    let arr3 = [7, 8, 9, 4, 5]

    let taskMatrix = [
        arr1, arr2, arr3
    ]

    let counter = 0

    /**
     * 1 2 3 2 7 
     * 4 5 6 8 1
     * 7 8 9 4 5 
     * 
     * 1. Проходим первый участок, i = 0 j = 0 
     * 2. За каждую итерацию увеличиваем counter
     * 3. Если счётчик === 9, то записываем найденный участок значений в массив cluster[]
     * 4. Сортируем массив cluster[N] и проверяем его значения с массивом toCheckArray[]
     * 5. Если значения совпадают, пишем в resArray true 
     * 6. Обнуляем cluster[], j = 1 
     * 6. Повторяем, пока не закончатся значения изначальной матрицы
     */

    let k = 0
    while (k < size) {
            for (var i = 0; i < taskMatrix.length; i++) {
                for (var j = k; j < 3+k; j++) {

                if (counter != 9) {
                    cluster.push(taskMatrix[i][j])
                    counter++
                //    console.log("Counter = " + counter + " i: " + i + " j: " + j + " Element: " + taskMatrix[i][j])
                } else {
                        cluster.sort()
                        console.log('Cluster number #' + j + ' sorted: ' + cluster)

                        if (cluster.toString() === toCheckArray.toString()) {
                            resArray.push(true)
                            counter = 0
                            cluster = []
                        } else {
                            resArray.push(false)
                            counter = 0
                            cluster = []
                        }
                        k++
                    }
                }
            }
    }
    
    console.log('Matrix: ')
    taskMatrix.forEach(element => console.log(element))
    console.log('Result: ')
    console.log(resArray)
}
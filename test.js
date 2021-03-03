let sourceArray = [1, 3, 5, 4, 5, 7]

// # TASK
// a > b < c or a < b > c
// [1, 3, 5, 4, 5,7]
// 1, 3, 5 => 1 < 3 < 5 - NO (0)
// 3, 5, 4 => 3 < 5 > 4 - YES (1)
// Output:
// New array [0, 1] (true, false) 
// ################

console.log(sourceArray)
checkArray(sourceArray)

// для себя
let firstConditionCheckVal = 1 < 3 && 3 > 5
firstConditionCheckVal ? console.log("true") : console.log("false")

/**
 * Функция для дальнейшей работы с массивом, возвращает результирующий массив,
 * наполненный значениями true или false в зависимости от того, какие условия
 * были выполнены во время прохода
 * @param array - принимаем массив
 */
function checkArray(array) {

    let resultArray = []

    for (i = 0; i < array.length-1; i++) {
        for (j = 1; j < array.length-1; j++) {
            // var1 > var2 < var3 OR var1 < var2 > var3. Если верно что-то из этого - пишем в массив 1 (true)
            if ( (array[i] > array[j] && array[j] < array[j+1]) || (array[i] < array[j] && array[j] > array[j+1]) ) {
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


let matrixSize = prompt("Size: ")

let array1 = []
let array2 = []
let array3 = []

console.log("*** TASK 2 ***")

if (matrixSize >= 3) {
    checkMatrix(array1, array2, array3, matrixSize)
} else alert("Size must be more than 3 or equal, refresh page and try again")

function checkMatrix(a1, a2, a3, size) {

    const toCheckArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let cluster = []
    let resArray = []

    for (var i = 0; i < size; i++) { a1.push(Math.floor(Math.random(1) * Math.floor(9))) }
    
    for (var i = 0; i < size; i++) { a2.push(Math.floor(Math.random(1) * Math.floor(9)))  }
    
    for (var i = 0; i < size; i++) { a3.push(Math.floor(Math.random(1) * Math.floor(9)))  }

    let matrix = [
        a1, a2, a3
    ]

    let arr1 = [1, 2, 3, 2, 7]
    let arr2 = [4, 5, 6, 8, 1]
    let arr3 = [7, 8, 9, 4, 5]

    let taskMatrix = [
        arr1, arr2, arr3
    ]

    let mSize = taskMatrix.length * arr1.length
    let matrixCount = mSize / 3
    console.log(matrixCount + " COUNT " + " SIZE: " + mSize)

    console.log(arr1)
    console.log(arr2)
    console.log(arr3)

    let jMAX = 2
    let counter = 0

  //  while (k < size) {
            for (var i = 0; i < taskMatrix.length; i++) {
                for (var j = 0; j < 3; j++) {


                    cluster.push(taskMatrix[i][j])
                    counter++
                    console.log("Counter: " + counter + " i: " + i + " j: " + j + " Element: " + taskMatrix[i][j])

                    if (counter === 9) {
                        cluster.sort()
                        console.log("Cluster sorted: " + cluster)

                        if (cluster.toString() === toCheckArray.toString()) {
                            resArray.push(true)
                            counter = 0
                            cluster = []
                            i = 0
                            j--
                        } else {
                            resArray.push(false)
                            counter = 0
                            cluster = []
                            i = 0
                            j-- 
                        }
                    }
                }
            }
   // }

    console.log(resArray)
}

/*function tt(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < size; j++) {
            cluster.push(matrix[i][j])
            counter++
            console.log("Counter: " + counter + " i: " + i + " j: " + j)
            if (counter === 9) {
                cluster.sort()
                console.log(cluster)

                if (cluster === toCheckArray) {
                    resArray.push(true)
                    counter = 0
                    cluster = []
                    i--
                    j--
                } else {
                    resArray.push(false)
                    counter = 0
                    cluster = []
                    i--
                    j--
                }
            }
        }
    }
} */
let mid = 1
let sum = 1
let pIdx, nIdx, dIdx,cIdx;
document.getElementById('numId').value = mid

let add = document.getElementById('add');
let myTable = document.querySelector('#myTable');
let arr;
// let headers = ['ID','Name','Surname','Gender','Maths','Science','Sociology','English','Hindi'];
const crtTable = () => {
    let id = document.getElementById('numId').value
    let name = document.getElementById('name').value
    let surname = document.getElementById('surname').value
    let gender = document.getElementById('gender').value
    let maths = document.getElementById('maths').value
    let science = document.getElementById('science').value
    let sociology = document.getElementById('sociology').value
    let english = document.getElementById('english').value
    let hindi = document.getElementById('hindi').value

    output.innerHTML += "<tr><td>"+id+"</td><td>"+name+"</td><td>"+surname+"</td><td>"+gender+"</td><td>"+maths+"</td><td>"+science+"</td><td>"+sociology+"</td><td>"+english+"</td><td>"+hindi+"</td></tr>"
};

const tableToArray = () => {
    // var array = [];
    const table = document.querySelector('table')
    arr = [...table.rows].map(r => [...r.querySelectorAll('td, th')].map(td => td.textContent))
    console.log(arr)
}


const myFunction = () => {
    // info.id = document.getElementById('numId').value;
    // info.name = document.getElementById('name').value
    // info.surname = document.getElementById('surname').value
    // info.gender = document.getElementById('gender').value
    // info.maths = document.getElementById('maths').value
    // info.science = document.getElementById('science').value
    // info.sociology = document.getElementById('sociology').value
    // info.english = document.getElementById('english').value
    // info.hindi = document.getElementById('hindi').value

    crtTable();
    tableToArray();

    sum += mid
    document.getElementById('numId').value = sum
    document.getElementById('name').value = ""
    document.getElementById('surname').value = ""
    document.getElementById('gender').value = ""
    document.getElementById('maths').value = ""
    document.getElementById('science').value = ""
    document.getElementById('sociology').value = ""
    document.getElementById('english').value = ""
    document.getElementById('hindi').value = ""
    check();
    
}

const newRow = () => {
    document.getElementById('numId').value = sum
    document.getElementById('name').value = ""
    document.getElementById('surname').value = ""
    document.getElementById('gender').value = ""
    document.getElementById('maths').value = ""
    document.getElementById('science').value = ""
    document.getElementById('sociology').value = ""
    document.getElementById('english').value = ""
    document.getElementById('hindi').value = ""
}

const proviousData = () => {
    let a = document.getElementById('numId').value
    let b = +a
    let lIdx = arr.indexOf(arr.at(-1))
    // document.getElementById("myTable").rows[i].cells[j].innerHTML
    // let x = b-1
    // console.log("x: ",x)
    
    for (let i of arr) {
        console.log("i: ",i)
        if (i[0]!=b) {
            // pIdx = arr.indexOf(arr.at(-1))
            // console.log(arr.indexOf(arr.at(-1)))
            document.getElementById('numId').value = arr[lIdx][0]
            document.getElementById('name').value = arr[lIdx][1]
            document.getElementById('surname').value = arr[lIdx][2]
            document.getElementById('gender').value = arr[lIdx][3]
            document.getElementById('maths').value = arr[lIdx][4]
            document.getElementById('science').value = arr[lIdx][5]
            document.getElementById('sociology').value = arr[lIdx][6]
            document.getElementById('english').value = arr[lIdx][7]
            document.getElementById('hindi').value = arr[lIdx][8]
        }
    }
    for (let j of arr) {
        if (j[0]==b) {
            for (let k=0; k<arr.length;k++){
                if (arr[k][0] == b){
                pIdx = arr.indexOf(arr[k])
                console.log(arr.indexOf(arr[k]))
                }
            //   console.log(`arr[${i}]: ` + arr[i])
            }

            document.getElementById('numId').value = arr[pIdx-1][0]
            document.getElementById('name').value = arr[pIdx-1][1]
            document.getElementById('surname').value = arr[pIdx-1][2]
            document.getElementById('gender').value = arr[pIdx-1][3]
            document.getElementById('maths').value = arr[pIdx-1][4]
            document.getElementById('science').value = arr[pIdx-1][5]
            document.getElementById('sociology').value = arr[pIdx-1][6]
            document.getElementById('english').value = arr[pIdx-1][7]
            document.getElementById('hindi').value = arr[pIdx-1][8]
        }
    }
    // console.log(pIdx)
    // document.getElementById('numId').value = arr[pIdx-1][0]
    // document.getElementById('name').value = arr[pIdx-1][1]
    // document.getElementById('surname').value = arr[pIdx-1][2]
    // document.getElementById('gender').value = arr[pIdx-1][3]
    // document.getElementById('maths').value = arr[pIdx-1][4]
    // document.getElementById('science').value = arr[pIdx-1][5]
    // document.getElementById('sociology').value = arr[pIdx-1][6]
    // document.getElementById('english').value = arr[pIdx-1][7]
    // document.getElementById('hindi').value = arr[pIdx-1][8]

    // for (let i of arr) {
    // console.log("i: ",i)
    // if (i[0]==x) {
    //     console.log(i)
    //     document.getElementById('numId').value = i[0]
    //     document.getElementById('name').value = i[1]
    //     document.getElementById('surname').value = i[2]
    //     document.getElementById('gender').value = i[3]
    //     document.getElementById('maths').value = i[4]
    //     document.getElementById('science').value = i[5]
    //     document.getElementById('sociology').value = i[6]
    //     document.getElementById('english').value = i[7]
    //     document.getElementById('hindi').value = i[8]
    //     }
    // }

    // for (let i=1; i<arr.length;i++){
    //     if (arr[i][0] == b){
    //         pIdx = arr.indexOf(arr[i])
    //         console.log("pIdx: ", pIdx)
    //         document.getElementById('numId').value = arr[pIdx-1][0]
    //         document.getElementById('name').value = arr[pIdx-1][1]
    //         document.getElementById('surname').value = arr[pIdx-1][2]
    //         document.getElementById('gender').value = arr[pIdx-1][3]
    //         document.getElementById('maths').value = arr[pIdx-1][4]
    //         document.getElementById('science').value = arr[pIdx-1][5]
    //         document.getElementById('sociology').value = arr[pIdx-1][6]
    //         document.getElementById('english').value = arr[pIdx-1][7]
    //         document.getElementById('hindi').value = arr[pIdx-1][8]
    //     }
    // }
        // else if (arr[i][0] != b){
        //     console.log('hii')
        //     //   nIdx = arr.indexOf(arr[i])
        //     //   console.log(arr.indexOf(arr[i]))
        //     document.getElementById('numId').value = arr.at(-1)[0]
        //     document.getElementById('name').value = arr.at(-1)[1]
        //     document.getElementById('surname').value = arr.at(-1)[2]
        //     document.getElementById('gender').value = arr.at(-1)[3]
        //     document.getElementById('maths').value = arr.at(-1)[4]
        //     document.getElementById('science').value = arr.at(-1)[5]
        //     document.getElementById('sociology').value = arr.at(-1)[6]
        //     document.getElementById('english').value = arr.at(-1)[7]
        //     document.getElementById('hindi').value = arr.at(-1)[8]
        //     }
        // }
      //   console.log(`arr[${i}]: ` + arr[i])
    // console.log(b)
    check();

}

const nextData = () => {
    let a = document.getElementById('numId').value
    let b = +a
    console.log("b: ",b)

    for (let i=0; i<arr.length;i++){
        if (arr[i][0] == b){
          nIdx = arr.indexOf(arr[i])
          console.log(arr.indexOf(arr[i]))
        }
      //   console.log(`arr[${i}]: ` + arr[i])
      }


    document.getElementById('numId').value = arr[nIdx+1][0]
    document.getElementById('name').value = arr[nIdx+1][1]
    document.getElementById('surname').value = arr[nIdx+1][2]
    document.getElementById('gender').value = arr[nIdx+1][3]
    document.getElementById('maths').value = arr[nIdx+1][4]
    document.getElementById('science').value = arr[nIdx+1][5]
    document.getElementById('sociology').value = arr[nIdx+1][6]
    document.getElementById('english').value = arr[nIdx+1][7]
    document.getElementById('hindi').value = arr[nIdx+1][8]

    // let y = arr.at(-1)[0]
    // console.log("y: ",y)
    // b = b+1
    // console.log("b: ",b)
    // // console.log(typeof y) // string
    // if (b == +y){
    //     next.disabled = true
    // }
    // if (b != +y){
    //     previous.disabled = false
    // }
    check();
}

const delectData = () => {
    const table = document.querySelector('table')
    var totalRowCount = table.rows.length;
    console.log(totalRowCount)
    let did = document.getElementById('numId').value
    let ndId = +did
    console.log(ndId)
    // let x = arr.at(1)[0]

    for (let i=0; i<arr.length;i++){
        if (arr[i][0] == ndId){
          dIdx = arr.indexOf(arr[i])
          console.log("a: ",arr.indexOf(arr[i]))
        }
      //   console.log(`arr[${i}]: ` + arr[i])
    }
    // arr.splice(dIdx,1)
    document.getElementById('output').deleteRow(dIdx);
    console.log(arr[dIdx])
    if (ndId != arr[1][0]) {
        arr.splice(dIdx,1)
        document.getElementById('numId').value = arr[dIdx-1][0]
        document.getElementById('name').value = arr[dIdx-1][1]
        document.getElementById('surname').value = arr[dIdx-1][2]
        document.getElementById('gender').value = arr[dIdx-1][3]
        document.getElementById('maths').value = arr[dIdx-1][4]
        document.getElementById('science').value = arr[dIdx-1][5]
        document.getElementById('sociology').value = arr[dIdx-1][6]
        document.getElementById('english').value = arr[dIdx-1][7]
        document.getElementById('hindi').value = arr[dIdx-1][8]
        // document.getElementById('numId').value = arr[dIdx][0]
        // document.getElementById('name').value = arr[dIdx][1]
        // document.getElementById('surname').value = arr[dIdx][2]
        // document.getElementById('gender').value = arr[dIdx][3]
        // document.getElementById('maths').value = arr[dIdx][4]
        // document.getElementById('science').value = arr[dIdx][5]
        // document.getElementById('sociology').value = arr[dIdx][6]
        // document.getElementById('english').value = arr[dIdx][7]
        // document.getElementById('hindi').value = arr[dIdx][8]
    }
    else if (arr.length == 2){
        document.getElementById('numId').value = sum
        document.getElementById('name').value = ""
        document.getElementById('surname').value = ""
        document.getElementById('gender').value = ""
        document.getElementById('maths').value = ""
        document.getElementById('science').value = ""
        document.getElementById('sociology').value = ""
        document.getElementById('english').value = ""
        document.getElementById('hindi').value = ""
    } 
    else {
        arr.splice(dIdx,1)
        document.getElementById('numId').value = arr[dIdx][0]
        document.getElementById('name').value = arr[dIdx][1]
        document.getElementById('surname').value = arr[dIdx][2]
        document.getElementById('gender').value = arr[dIdx][3]
        document.getElementById('maths').value = arr[dIdx][4]
        document.getElementById('science').value = arr[dIdx][5]
        document.getElementById('sociology').value = arr[dIdx][6]
        document.getElementById('english').value = arr[dIdx][7]
        document.getElementById('hindi').value = arr[dIdx][8]
        // document.getElementById('numId').value = arr[dIdx-1][0]
        // document.getElementById('name').value = arr[dIdx-1][1]
        // document.getElementById('surname').value = arr[dIdx-1][2]
        // document.getElementById('gender').value = arr[dIdx-1][3]
        // document.getElementById('maths').value = arr[dIdx-1][4]
        // document.getElementById('science').value = arr[dIdx-1][5]
        // document.getElementById('sociology').value = arr[dIdx-1][6]
        // document.getElementById('english').value = arr[dIdx-1][7]
        // document.getElementById('hindi').value = arr[dIdx-1][8]
    }


    // for (let i=1;i<arr.length;i++) {
    //     if (arr[i][0] == ndId){
    //     //   console.log(arr[i])
    //     // document.getElementById('output').deleteRow(ndId);
    //       arr.splice(i,1)
    //     }
    // }

    // let y = arr.at(-1)[0]
    // let aa = document.getElementById('numId').value
    // let naa = +aa
    // console.log(naa)
    // if(totalRowCount <= naa){
    //     document.getElementById('output').deleteRow(ndId-1);
    //     document.getElementById('numId').value = arr[naa-2][0]
    //     document.getElementById('name').value = arr[naa-2][1]
    //     document.getElementById('surname').value = arr[naa-2][2]
    //     document.getElementById('gender').value = arr[naa-2][3]
    //     document.getElementById('maths').value = arr[naa-2][4]
    //     document.getElementById('science').value = arr[naa-2][5]
    //     document.getElementById('sociology').value = arr[naa-2][6]
    //     document.getElementById('english').value = arr[naa-2][7]
    //     document.getElementById('hindi').value = arr[naa-2][8]
    // }else{
    //     document.getElementById('output').deleteRow(ndId);
    //     document.getElementById('numId').value = arr[naa-1][0]
    //     document.getElementById('name').value = arr[naa-1][1]
    //     document.getElementById('surname').value = arr[naa-1][2]
    //     document.getElementById('gender').value = arr[naa-1][3]
    //     document.getElementById('maths').value = arr[naa-1][4]
    //     document.getElementById('science').value = arr[naa-1][5]
    //     document.getElementById('sociology').value = arr[naa-1][6]
    //     document.getElementById('english').value = arr[naa-1][7]
    //     document.getElementById('hindi').value = arr[naa-1][8]
    // }
    check();
    // console.log(ndId)

    // let y = arr.at(-1)[0]
    // console.log("y: ",y)
    // ndId = ndId + 1
    // console.log("b: ",ndId)
    // console.log("x: ",x)
    // // console.log(typeof y) // string
    // if (ndId == +y){
    //     next.disabled = true
    // }
    // if (ndId != +y){
    //     previous.disabled = false
    // }
}


// const deleteTodo = (index) => {
//     todosArr.splice(index, 1);
//     createTodo(todosArr);
// };
// window.addEventListener("load", () => {
//     createTodo(todosArr);
// });

//     // document.getElementById("myTable").rows[i].cells[j].innerHTML
//     let x = b
//     // let x = document.getElementById("myTable").rows[b-1]
//     // y = arr.at(-1)[0]
//     // y = +y
//     // if (b == y){
//     //     previous.disabled = true
//     // }

//     document.getElementById('numId').value = arr[1][0]
//     document.getElementById('name').value = arr[1][1]
//     document.getElementById('surname').value = arr[1][2]
//     document.getElementById('gender').value = arr[1][3]
//     document.getElementById('maths').value = arr[1][4]
//     document.getElementById('science').value = arr[1][5]
//     document.getElementById('sociology').value = arr[1][6]
//     document.getElementById('english').value = arr[1][7]
//     document.getElementById('hindi').value = arr[1][8]
// }

// let add_new = document.getElementById('new')
// // let deleteBtn = document.getElementById('delete')
// let tb1 = document.getElementById("myTable")

// let arr = []
// let sum = 1
// let id = 1
// document.getElementById('numId').value = id

// const submitData = () => {
//     let numId = document.getElementById('numId').value
//     // console.log(numId)
//     // sum += numId
//     sum += id
//     // document.getElementById("myForm").reset();
//     document.getElementById('numId').value = sum
//     document.getElementById('name').value = ""
//     document.getElementById('surname').value = ""
//     document.getElementById('gender').value = ""
//     document.getElementById('maths').value = ""
//     document.getElementById('science').value = ""
//     document.getElementById('sociology').value = ""
//     document.getElementById('english').value = ""
//     document.getElementById('hindi').value = ""
// }

// function myFunction() {
//     // let tb1 = document.getElementById("myTable")
//     let row = tb1.insertRow();
//     let id = row.insertCell();
//     let name = row.insertCell();
//     let surname = row.insertCell();
//     let gender = row.insertCell();
//     let maths = row.insertCell();
//     let science = row.insertCell();
//     let sociology = row.insertCell();
//     let english = row.insertCell();
//     let hindi = row.insertCell();

//     id.innerHTML =document.getElementById('numId').value
//     name.innerHTML =document.getElementById('name').value
//     surname.innerHTML =document.getElementById('surname').value
//     gender.innerHTML =document.getElementById('gender').value
//     maths.innerHTML =document.getElementById('maths').value
//     science.innerHTML =document.getElementById('science').value
//     sociology.innerHTML =document.getElementById('sociology').value
//     english.innerHTML =document.getElementById('english').value
//     hindi.innerHTML =document.getElementById('hindi').value

//     data = [id.innerHTML,name.innerHTML,surname.innerHTML,gender.innerHTML,maths.innerHTML,science.innerHTML,sociology.innerHTML, english.innerHTML,hindi.innerHTML]
//     arr.push(data)
//     console.log(arr)
//     submitData();
// }

// const proviousData = () => {
//     let a = document.getElementById('numId').value
//     let b = +a

//     // document.getElementById("myTable").rows[i].cells[j].innerHTML

//     // let x = document.getElementById("myTable").rows[b-1]
//     // console.log(sum)
//     // console.log(b)
//     document.getElementById('numId').value = arr[b-2][0]
//     document.getElementById('name').value = arr[b-2][1]
//     document.getElementById('surname').value = arr[b-2][2]
//     document.getElementById('gender').value = arr[b-2][3]
//     document.getElementById('maths').value = arr[b-2][4]
//     document.getElementById('science').value = arr[b-2][5]
//     document.getElementById('sociology').value = arr[b-2][6]
//     document.getElementById('english').value = arr[b-2][7]
//     document.getElementById('hindi').value = arr[b-2][8]

//     // document.getElementById('hindi').value = document.getElementById("myTable").rows[b-1].cells[8].innerHTML
    
// }


// const nextData = () => {
//     let a = document.getElementById('numId').value
//     let b = +a

//     // document.getElementById("myTable").rows[i].cells[j].innerHTML

//     // let x = document.getElementById("myTable").rows[b-1]

//     document.getElementById('numId').value = arr[b][0]
//     document.getElementById('name').value = arr[b][1]
//     document.getElementById('surname').value = arr[b][2]
//     document.getElementById('gender').value = arr[b][3]
//     document.getElementById('maths').value = arr[b][4]
//     document.getElementById('science').value = arr[b][5]
//     document.getElementById('sociology').value = arr[b][6]
//     document.getElementById('english').value = arr[b][7]
//     document.getElementById('hindi').value = arr[b][8]
// }


// const delectData = () => {
//     let id = document.getElementById('numId').value
//     let nId = +id
//     console.log(nId)
//     // arr.splice(nId,1)

//     // document.getElementById('numId').value = arr[nId][0]
//     // document.getElementById('name').value = arr[nId][1]
//     // document.getElementById('surname').value = arr[nId][2]
//     // document.getElementById('gender').value = arr[nId][3]
//     // document.getElementById('maths').value = arr[nId][4]
//     // document.getElementById('science').value = arr[nId][5]
//     // document.getElementById('sociology').value = arr[nId][6]
//     // document.getElementById('english').value = arr[nId][7]
//     // document.getElementById('hindi').value = arr[nId][8]
//     console.log(arr.at(-1)[0])
//     if (nId == arr.at(-1)[0]) {
//         document.getElementById('numId').value = sum
//         document.getElementById('name').value = ""
//         document.getElementById('surname').value = ""
//         document.getElementById('gender').value = ""
//         document.getElementById('maths').value = ""
//         document.getElementById('science').value = ""
//         document.getElementById('sociology').value = ""
//         document.getElementById('english').value = ""
//         document.getElementById('hindi').value = ""

//         document.getElementById('myTable').deleteRow(nId);
    
//     }else {
//         let s = sum - 1
//         console.log("S: ",s)
//         document.getElementById('numId').value = s
//         document.getElementById('name').value = arr[s-1][1]
//         document.getElementById('surname').value = arr[s-1][2]
//         document.getElementById('gender').value = arr[s-1][3]
//         document.getElementById('maths').value = arr[s-1][4]
//         document.getElementById('science').value = arr[s-1][5]
//         document.getElementById('sociology').value = arr[s-1][6]
//         document.getElementById('english').value = arr[s-1][7]
//         document.getElementById('hindi').value = arr[s-1][8]
        
//         document.getElementById('myTable').deleteRow(nId);
//         // console.log("old: ",arr)
//         arr.splice(nId,1)
//         sum = sum -1
//         // console.log("new: ",arr)

//     }

//     // document.getElementById('numId').value = sum
//     // document.getElementById('name').value = ""
//     // document.getElementById('surname').value = ""
//     // document.getElementById('gender').value = ""
//     // document.getElementById('maths').value = ""
//     // document.getElementById('science').value = ""
//     // document.getElementById('sociology').value = ""
//     // document.getElementById('english').value = ""
//     // document.getElementById('hindi').value = ""

//     // document.getElementById('myTable').deleteRow(nId);
//     // arr.splice(nId-1,1)

// }


// // if (nId == arr[-1][0]) {
// //     document.getElementById('numId').value = sum
// //     document.getElementById('name').value = ""
// //     document.getElementById('surname').value = ""
// //     document.getElementById('gender').value = ""
// //     document.getElementById('maths').value = ""
// //     document.getElementById('science').value = ""
// //     document.getElementById('sociology').value = ""
// //     document.getElementById('english').value = ""
// //     document.getElementById('hindi').value = ""

// // }





const check = () => {
    let id = document.getElementById('numId').value
    let nId = +id
    let first = arr.at(1)[0]
    let y = arr.at(-1)[0]
    let previousBtn = document.getElementById('previous')
    let next = document.getElementById('next')

    if(nId==first){
        previousBtn.disabled = true;
    }
    if(nId==y){
        next.disabled = true;
    }
    if(nId!=first){
        previousBtn.disabled = false;
    }
    if(nId!=y){
        next.disabled = false;
    }
}

// // const enBtn = () => {
// // }

// // let previousBtn = document.getElementById('previous')
// //     if (document.getElementById('numId').value == 2) {
// //         previousBtn.disabled = false;
// //     }
// //     else{
// //         previousBtn.disabled = true;
// //     }
let mid = 1
let sum = 1
let pIdx, nIdx, dIdx,cIdx,eIdx;
let arr2;
document.getElementById('numId').value = mid

getData = document.getElementById('searchTxt');
getBtn = document.getElementById('searchBtn');
searchBtn
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
    const table = document.querySelector('table')
    arr = [...table.rows].map(r => [...r.querySelectorAll('td, th')].map(td => td.textContent))
    console.log(arr)
}


const myFunction = () => {


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
    }
    check();
}

const editData = () => {
    let eid = document.getElementById('numId').value
    let eId = +eid
    let cell = document.getElementById('output').getElementsByTagName("tbody")
    for (let e=0; e<arr.length;e++){
        if (arr[e][0] == eId){
          eIdx = arr.indexOf(arr[e])
        //   console.log("edit: ",arr.indexOf(arr[e]))
        }
      //   console.log(`arr[${i}]: ` + arr[i])
    }
    console.log("edit out: ",eIdx)
    // let old = cell[eIdx].innerHTML
    let ename =  document.getElementById('name').value
    let esname = document.getElementById('surname').value
    let egndr = document.getElementById('gender').value
    let emaths = document.getElementById('maths').value
    let esci = document.getElementById('science').value
    let esoci = document.getElementById('sociology').value
    let eeng = document.getElementById('english').value
    let ehindi = document.getElementById('hindi').value

    cell[eIdx].innerHTML = `<tr><td>${eId}</td><td>${ename}</td><td>${esname}</td><td>${egndr}</td><td>${emaths}</td><td>${esci}</td><td>${esoci}</td><td>${eeng}</td><td>${ehindi}</td></tr>`
    // console.log(cell[eIdx].innerHTML)
    arr[eIdx][0] = eId
    arr[eIdx][1] = ename
    arr[eIdx][2] = esname
    arr[eIdx][3] = egndr
    arr[eIdx][4] = emaths
    arr[eIdx][5] = esci
    arr[eIdx][6] = esoci
    arr[eIdx][7] = eeng
    arr[eIdx][8] = ehindi
    // console.log(arr[eIdx])
}

// getData = document.getElementById('searchTxt');
// getBtn = document.getElementById('searchBtn');

const searchData = () => {
    get = document.getElementById('searchTxt').value
    data = +get
    arr2 = arr.filter((w) => w[1]==get)
    // console.log(arr2[0][0])
    document.getElementById('numId').value = arr2[0][0]
    document.getElementById('name').value = arr2[0][1]
    document.getElementById('surname').value = arr2[0][2]
    document.getElementById('gender').value = arr2[0][3]
    document.getElementById('maths').value = arr2[0][4]
    document.getElementById('science').value = arr2[0][5]
    document.getElementById('sociology').value = arr2[0][6]
    document.getElementById('english').value = arr2[0][7]
    document.getElementById('hindi').value = arr2[0][8]

    check()
}

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

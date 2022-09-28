let add_new = document.getElementById('new')
// let deleteBtn = document.getElementById('delete')
let tb1 = document.getElementById("myTable")

let arr = []
let sum = 1
let id = 1
document.getElementById('numId').value = id

const submitData = () => {
    let numId = document.getElementById('numId').value
    // console.log(numId)
    // sum += numId
    sum += id
    // document.getElementById("myForm").reset();
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

function myFunction() {
    // let tb1 = document.getElementById("myTable")
    let row = tb1.insertRow();
    let id = row.insertCell();
    let name = row.insertCell();
    let surname = row.insertCell();
    let gender = row.insertCell();
    let maths = row.insertCell();
    let science = row.insertCell();
    let sociology = row.insertCell();
    let english = row.insertCell();
    let hindi = row.insertCell();

    id.innerHTML =document.getElementById('numId').value
    name.innerHTML =document.getElementById('name').value
    surname.innerHTML =document.getElementById('surname').value
    gender.innerHTML =document.getElementById('gender').value
    maths.innerHTML =document.getElementById('maths').value
    science.innerHTML =document.getElementById('science').value
    sociology.innerHTML =document.getElementById('sociology').value
    english.innerHTML =document.getElementById('english').value
    hindi.innerHTML =document.getElementById('hindi').value

    data = [id.innerHTML,name.innerHTML,surname.innerHTML,gender.innerHTML,maths.innerHTML,science.innerHTML,sociology.innerHTML, english.innerHTML,hindi.innerHTML]
    arr.push(data)
    console.log(arr)
    submitData();
}

const proviousData = () => {
    let a = document.getElementById('numId').value
    let b = +a

    // document.getElementById("myTable").rows[i].cells[j].innerHTML

    // let x = document.getElementById("myTable").rows[b-1]
    // console.log(sum)
    // console.log(b)
    document.getElementById('numId').value = arr[b-2][0]
    document.getElementById('name').value = arr[b-2][1]
    document.getElementById('surname').value = arr[b-2][2]
    document.getElementById('gender').value = arr[b-2][3]
    document.getElementById('maths').value = arr[b-2][4]
    document.getElementById('science').value = arr[b-2][5]
    document.getElementById('sociology').value = arr[b-2][6]
    document.getElementById('english').value = arr[b-2][7]
    document.getElementById('hindi').value = arr[b-2][8]

    // document.getElementById('hindi').value = document.getElementById("myTable").rows[b-1].cells[8].innerHTML
    
}


const nextData = () => {
    let a = document.getElementById('numId').value
    let b = +a

    // document.getElementById("myTable").rows[i].cells[j].innerHTML

    // let x = document.getElementById("myTable").rows[b-1]

    document.getElementById('numId').value = arr[b][0]
    document.getElementById('name').value = arr[b][1]
    document.getElementById('surname').value = arr[b][2]
    document.getElementById('gender').value = arr[b][3]
    document.getElementById('maths').value = arr[b][4]
    document.getElementById('science').value = arr[b][5]
    document.getElementById('sociology').value = arr[b][6]
    document.getElementById('english').value = arr[b][7]
    document.getElementById('hindi').value = arr[b][8]
}





const delectData = () => {
    let id = document.getElementById('numId').value
    let nId = +id
    console.log(nId)
    // arr.splice(nId,1)

    // document.getElementById('numId').value = arr[nId][0]
    // document.getElementById('name').value = arr[nId][1]
    // document.getElementById('surname').value = arr[nId][2]
    // document.getElementById('gender').value = arr[nId][3]
    // document.getElementById('maths').value = arr[nId][4]
    // document.getElementById('science').value = arr[nId][5]
    // document.getElementById('sociology').value = arr[nId][6]
    // document.getElementById('english').value = arr[nId][7]
    // document.getElementById('hindi').value = arr[nId][8]
    console.log(arr.at(-1)[0])
    if (nId == arr.at(-1)[0]) {
        document.getElementById('numId').value = sum
        document.getElementById('name').value = ""
        document.getElementById('surname').value = ""
        document.getElementById('gender').value = ""
        document.getElementById('maths').value = ""
        document.getElementById('science').value = ""
        document.getElementById('sociology').value = ""
        document.getElementById('english').value = ""
        document.getElementById('hindi').value = ""

        document.getElementById('myTable').deleteRow(nId);
    
    }else {
        let s = sum - 1
        console.log("S: ",s)
        document.getElementById('numId').value = s
        document.getElementById('name').value = arr[s-1][1]
        document.getElementById('surname').value = arr[s-1][2]
        document.getElementById('gender').value = arr[s-1][3]
        document.getElementById('maths').value = arr[s-1][4]
        document.getElementById('science').value = arr[s-1][5]
        document.getElementById('sociology').value = arr[s-1][6]
        document.getElementById('english').value = arr[s-1][7]
        document.getElementById('hindi').value = arr[s-1][8]
        
        document.getElementById('myTable').deleteRow(nId);
        // console.log("old: ",arr)
        arr.splice(nId,1)
        sum = sum -1
        // console.log("new: ",arr)

    }

    // document.getElementById('numId').value = sum
    // document.getElementById('name').value = ""
    // document.getElementById('surname').value = ""
    // document.getElementById('gender').value = ""
    // document.getElementById('maths').value = ""
    // document.getElementById('science').value = ""
    // document.getElementById('sociology').value = ""
    // document.getElementById('english').value = ""
    // document.getElementById('hindi').value = ""

    // document.getElementById('myTable').deleteRow(nId);
    // arr.splice(nId-1,1)

}


// if (nId == arr[-1][0]) {
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

























// const enBtn = () => {
// }

// let previousBtn = document.getElementById('previous')
//     if (document.getElementById('numId').value == 2) {
//         previousBtn.disabled = false;
//     }
//     else{
//         previousBtn.disabled = true;
//     }
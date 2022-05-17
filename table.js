window.addEventListener('load', (event) => {
    displayData();
});

function displayData() {
    let arr = JSON.parse(localStorage.getItem('employees'));
    if (arr != null) {
        let data = "";
        let sno = 1;
        for (let k in arr) {
            data = data + 
                `<tr>
            <td>${sno}</td>
            <td>${arr[k].firstName}</td>
            <td>${arr[k].lastName}</td>
            <td>${arr[k].firstName + " " + arr[k].lastName}</td>
            <td>${arr[k].email}</td>
            <td>${arr[k].phoneNumber}</td>
            </tr>`;
            sno++;
        }
        document.getElementById('tbody').innerHTML = data;
    }
}
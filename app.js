/* 
Dom Selection
add evenlistner
basic form validation
create element
append
*/

// Dom selection complete
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const booklist = document.querySelector('#book-list');
// add addEventListener 
btn.addEventListener('click' , function(e) {
    e.preventDefault();
    if(title.value == '' && author.value == '' && year.value == '') {
        alert('Apni kichu lekhen nai ! Doya Kore Likhen.')
    }
    else{
        // new row table 
        const newRow = document.createElement('tr');
        // new title 
        const newTitle = document.createElement('th');
        newTitle.innerText = title.value;
        newRow.appendChild(newTitle);
        title.value = "";
        // new author 
        const newAuthor = document.createElement('th');
        newAuthor.innerText = author.value;
        newRow.appendChild(newAuthor);
        author.value = "";
        // new year 
        const newYear = document.createElement('th');
        newYear.innerText = year.value;
        newRow.appendChild(newYear);
        year.value = "";
        // connection row
        booklist.appendChild(newRow);
    }
})
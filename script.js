
let text_content = document.getElementById('text-content')

let btn = document.getElementById('add-btn')

let currentTitle = 'untitle'

let set_btn = document.getElementById('set-title-btn')

let title_to_be_renamed = document.getElementById('title-to-rename')

let save_notes_container = document.getElementsByClassName('save-notes-container')[0]

var notesCount = 1

let filterButton = document.getElementById('filterButton')

let add_notes = () => {
    save_notes_container.insertAdjacentHTML("beforeend", `<div class="saved-notes">
    <div class='notes-content'>
    <h3 class='notes-title'>${currentTitle}</h3>
    <p class='notes-para'>${text_content.value}</p>
    </div>
    </div>`)

    let note_content = save_notes_container
    console.log(note_content.children[`${notesCount - 1}`].innerText, " ", notesCount)
    let note_content_filter = note_content.children[`${notesCount - 1}`].innerText
    console.log(note_content_filter.split('\n'))
    notesCount = notesCount + 1
}

const addFilteredNotes = () => {
    save_notes_container.insertAdjacentHTML('afterbegin', `<div class="saved-notes">
<div class='notes-content'>
<h3 class='notes-title'>${currentTitle}</h3>
<p class='notes-para'>${text_content.value}</p>
</div>
</div>
`)
}
let filterMyNotes = () => {
    let filterTitle;
    let filterContent;
    let check = false;
    let searchText = document.getElementById('searchText').value
    let notesElement;
    for (var i = 1; i < (notesCount + 1); i++) {
        notesElement = document.getElementsByClassName('save-notes-container')[0].children[`${i - 1}`].innerText
        let find = notesElement.search(searchText)
        if (find != -1) {
            check = true;
            break;
        }

    }
    let notesArray = notesElement.split('\n')
    let notesSearchTitle = notesArray[0]
    let notesSearchcontent = notesArray[2]
    save_notes_container.innerHTML = ""
    save_notes_container.insertAdjacentHTML("beforeend", `<div class="saved-notes">
    <div class='notes-content'>
    <h3 class='notes-title'>${notesSearchTitle}</h3>
    <p class='notes-para'>${notesSearchcontent}</p>
    </div>
    </div>`)
    console.log(notesArray)
    notesCount = 1

}

set_btn.addEventListener('click', () => {
    let new_title = prompt('enter your new title')
    currentTitle = new_title
    title_to_be_renamed.innerHTML = currentTitle

})

filterButton.addEventListener('click', filterMyNotes)

btn.addEventListener('click', add_notes)
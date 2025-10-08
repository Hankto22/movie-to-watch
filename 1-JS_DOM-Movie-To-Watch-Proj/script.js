// Get the movie list element
const movieList = document.querySelector('#movie-list ul');

// Delete and Update movie functionality
movieList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        const li = e.target.parentElement;
        li.remove();
    }

    if (e.target.classList.contains('Update')) {
        const li = e.target.parentElement;
        const nameSpan = li.querySelector('.name');
        const currentName = nameSpan.textContent;

        // Prompt for new name
        const newName = prompt('Enter new movie name:', currentName);
        if (newName && newName.trim() !== '') {
            nameSpan.textContent = newName.trim();
        }
    }
});

// Add movie functionality
const addForm = document.forms['add-movie'];
addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value.trim();
    if (value) {
        // Create elements
        const li = document.createElement('li');
        const nameSpan = document.createElement('span');
        nameSpan.className = 'name';
        nameSpan.textContent = value;

        const updateSpan = document.createElement('span');
        updateSpan.className = 'Update';
        updateSpan.textContent = 'Update ';

        const deleteSpan = document.createElement('span');
        deleteSpan.className = 'delete';
        deleteSpan.textContent = 'Delete';

        // Append to li
        li.appendChild(nameSpan);
        li.appendChild(updateSpan);
        li.appendChild(deleteSpan);

        // Add to list
        movieList.appendChild(li);

        // Clear input
        addForm.querySelector('input[type="text"]').value = '';
    }
});
"use strict";
// // Get the movie list element
// const movieList = document.querySelector('#movie-list ul') as HTMLUListElement;
// // Delete and Update movie functionality
// movieList.addEventListener('click', (e: MouseEvent) => {
//   const target = e.target as HTMLElement;
//   if (target.classList.contains('delete')) {
//     const li = target.closest('li');
//     if (li) li.remove();
//   }
//   if (target.classList.contains('Update')) {
//     const li = target.closest('li');
//     const nameSpan = li?.querySelector('.name') as HTMLSpanElement;
//     if (nameSpan) {
//       const currentName = nameSpan.textContent || '';
//       const newName = prompt('Enter new movie name:', currentName);
//       if (newName && newName.trim() !== '') {
//         nameSpan.textContent = newName.trim();
//       }
//     }
//   }
// });
// // Add movie functionality
// const addForm = document.forms.namedItem('add-movie') as HTMLFormElement;
// addForm.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   const input = addForm.querySelector('input[type="text"]') as HTMLInputElement;
//   const value = input.value.trim();
//   if (value) {
//     // Create elements
//     const li = document.createElement('li');
//     const nameSpan = document.createElement('span');
//     nameSpan.className = 'name';
//     nameSpan.textContent = value;
//     const updateSpan = document.createElement('span');
//     updateSpan.className = 'Update';
//     updateSpan.textContent = 'Update';
//     const deleteSpan = document.createElement('span');
//     deleteSpan.className = 'delete';
//     deleteSpan.textContent = 'Delete';
//     // Append to li
//     li.appendChild(nameSpan);
//     li.appendChild(updateSpan);
//     li.appendChild(deleteSpan);
//     // Add to list
//     movieList.appendChild(li);
//     // Clear input
//     input.value = '';
//   }
// })
console.log("TypeScript is working!");
//# sourceMappingURL=index.js.map
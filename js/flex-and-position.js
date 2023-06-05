function openModal() {
    const elBackdrop = document.querySelector('.backdrop')
    const elModal = document.querySelector('.modal')
    
    elModal.classList.add('opaque')
    elBackdrop.classList.add('opaque')
}
function closeModal() {
    const elBackdrop = document.querySelector('.backdrop')
    const elModal = document.querySelector('.modal')
    
    elModal.classList.remove('opaque')
    elBackdrop.classList.remove('opaque')
}
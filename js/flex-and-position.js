function openModal() {
    const elBody = document.querySelector('body')
    const elMain = document.querySelector('main')
    const elBackdrop = document.querySelector('.backdrop')
    const elModal = document.querySelector('.modal')
    
    elBackdrop.style.opacity = 1
    elBackdrop.style.pointerEvents = 'auto'
    
    elModal.style.opacity = 1
    elModal.style.pointerEvents = 'auto'
    
    elMain.style.pointerEvents = 'none'
    elBody.style.overflow = 'hidden'
}
function closeModal() {
    const elBody = document.querySelector('body')
    const elMain = document.querySelector('main')
    const elBackdrop = document.querySelector('.backdrop')
    const elModal = document.querySelector('.modal')
    
    elBackdrop.style.opacity = 0
    elBackdrop.style.pointerEvents = 'none'
    
    elModal.style.opacity = 0
    elModal.style.pointerEvents = 'none'
    
    elMain.style.pointerEvents = 'auto'
    elBody.style.overflow = 'scroll'
}
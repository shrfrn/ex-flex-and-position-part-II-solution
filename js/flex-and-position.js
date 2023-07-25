'use strict'
var gCurrArea = 'area3'

function openModal() {
    const elBackdrop = document.querySelector('.backdrop')
    elBackdrop.classList.add('opaque')
}

function closeModal(ev, el) {
    const elBackdrop = document.querySelector('.backdrop')
    elBackdrop.classList.remove('opaque')
}

function moveAround(elCircle) {
    const gridAreas = ['area1', 'area2', 'area3', 'area4', 'area5']
    var idx = getRandomInt(0, gridAreas.length)

    while(gridAreas[idx] === gCurrArea){
        idx = getRandomInt(0, gridAreas.length)
    }
    gCurrArea = gridAreas[idx]
    elCircle.style.gridArea = gridAreas[idx]
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}
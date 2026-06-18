'use strict';

const iconShareBox = document.querySelector('.icon-share-box');
const dropUpMenu = document.querySelector('.dropupmenu');
const triangle = document.querySelector('.triangle');
const iconShare = document.querySelector('.icon-share');
const body = document.querySelector('.body');

function actives () {
dropUpMenu.classList.toggle('active');
triangle.classList.toggle('active');
iconShare.classList.toggle('active');
iconShareBox.classList.toggle('active');
}

iconShareBox.addEventListener('click', actives);
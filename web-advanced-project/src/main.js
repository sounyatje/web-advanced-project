//https://www.w3schools.com/
//https://developer.mozilla.org/en-US/
//https://codepen.io/
//https://api.attackontitanapi.com/characters

//TODO: readme + screenshots
//TODO: formulier toevoegen

import './style.scss'

let arrowleft = document.querySelector('.arrow.left img')
let arrowright = document.querySelector('.arrow.right img')
const leftOriginal = arrowleft.src
const rightOriginal = arrowright.src

const rowObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}, {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
})

arrowleft.addEventListener('mousedown', () => { arrowleft.src = '/images/controlLR.png' })
arrowleft.addEventListener('mouseup', () => { arrowleft.src = leftOriginal })
arrowleft.addEventListener('mouseleave', () => { arrowleft.src = leftOriginal })

arrowright.addEventListener('mousedown', () => { arrowright.src = '/images/controlRR.png' })
arrowright.addEventListener('mouseup', () => { arrowright.src = rightOriginal })
arrowright.addEventListener('mouseleave', () => { arrowright.src = rightOriginal })

let searchImg = document.querySelector('#search-button img')
searchImg.addEventListener('mousedown', () => { searchImg.src = '/images/searchred.png' })
searchImg.addEventListener('mouseup', () => { searchImg.src = '/images/search.png' })
searchImg.addEventListener('mouseleave', () => { searchImg.src = '/images/search.png' })

let currentCharacter = null
let currentList = []
let currentIndex = -1

function fillBottomBar(character) {
  document.querySelector('.bottom-bar .blok:nth-child(1) .value').textContent = character.groups[0]?.name ?? 'Unknown'
  document.querySelector('.bottom-bar .blok:nth-child(2) .value').textContent = character.occupation ?? 'Unknown'
  document.querySelector('.bottom-bar .blok:nth-child(3) .value').textContent = character.gender ?? 'Unknown'
  document.querySelector('.bottom-bar .blok:nth-child(4) .value').textContent = character.alias[0] ?? 'Unknown'
}

function selectByIndex(index) {
  if (currentList.length === 0) return
 
  index = index < 0 ? currentList.length - 1 : index
  index = index >= currentList.length ? 0 : index
 
  currentIndex = index
  let character = currentList[currentIndex]
 
  
  let itemEls = document.querySelectorAll('.links .item:not(:first-child):not(:nth-child(2))')
  itemEls.forEach(item => item.classList.remove('active'))
  itemEls[currentIndex]?.classList.add('active')
  itemEls[currentIndex]?.scrollIntoView({ block: 'nearest' })
 
  fillBottomBar(character)
  showCharacter(character)
}
 
arrowleft.addEventListener('click', () => selectByIndex(currentIndex - 1))
arrowright.addEventListener('click', () => selectByIndex(currentIndex + 1))
 
function showCharacter(character) {
  currentCharacter = character

  document.querySelector('.image-container').innerHTML = `<img src="${character.img ?? ''}" alt="${character.name}" style="height:100%; object-fit:contain;">`
  document.querySelector('.character-name').textContent = character.name
  document.querySelector('.character-desc').textContent = character.roles[0] ?? character.occupation ?? ''

  let favorites = JSON.parse(localStorage.getItem('favorites')) || []
  document.querySelector('.heart img').src = favorites.includes(character.id)
    ? '/images/heartfilled.png'
    : '/images/emptyheart.png'
}

function renderItems(characters) {
  document.querySelectorAll('.links .item:not(:first-child):not(:nth-child(2))').forEach(i => i.remove())
  let last = document.querySelector('.links .last')

    rowObserver.disconnect()  

  currentList = characters     
  currentIndex = -1             

  characters.forEach((character, index) => {  
    let item = document.createElement('div')
    item.classList.add('item')

    let regiment = character.groups.length > 0 ? character.groups[0].name : character.roles[0] ?? 'Unknown'
    let occupation = character.occupation ?? 'Unknown'
    let gender = character.gender ?? 'Unknown'
    let status = character.status ?? 'Unknown'
    let species = Array.isArray(character.species) ? character.species[0] ?? 'Unknown' : character.species ?? 'Unknown'

    item.innerHTML = `
      <p class="item-name">${character.name}</p>
      <p class="item-affiliation">${regiment}</p>
      <p class="item-occupation">${occupation}</p>
      <p class="item-gender">${gender}</p>
      <p class="item-status ${status.toLowerCase() === 'deceased' ? 'deceased' : ''}">${status}</p>
      <p class="item-species">${species}</p>
    `

    item.addEventListener('click', () => selectByIndex(index))   

    last.before(item)
    rowObserver.observe(item)   

  })
  selectByIndex(0)
}

let allCharacters = []

async function loadCharacters() {
  let characters = []

  for (let page = 1; page <= 11; page++) {
    const response = await fetch(
      `https://api.attackontitanapi.com/characters?page=${page}`
    )

    const data = await response.json()
    
    characters.push(...data.results)
  }

allCharacters = characters
renderItems(allCharacters)
selectByIndex(0)
}

let currentSort = null
let currentFilter = 'all'

document.querySelector('.sort-select').addEventListener('change', (e) => {
  currentSort = e.target.value

  let list = getFilteredList(currentFilter)

  list.sort((a, b) => currentSort === 'asc'
    ? a.name.localeCompare(b.name)
    : b.name.localeCompare(a.name))

  renderItems(list)
  selectByIndex(0)
})

function getFilteredList(filter) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || []

  if (filter === 'scout') return allCharacters.filter(c => c.groups.some(g => g.name === 'Scout Regiment'))
  if (filter === 'garrison') return allCharacters.filter(c => c.groups.some(g => g.name === 'Garrison Regiment'))
  if (filter === 'military') return allCharacters.filter(c => c.groups.some(g => g.name === 'Military Police Regiment'))
  if (filter === 'nobility' || filter === 'royal government') return allCharacters.filter(c => c.groups.some(g => g.name === 'Nobility' || g.name === 'Royal Government'))
  if (filter === 'marleyan') return allCharacters.filter(c => c.groups.some(g => g.name === 'Marleyan military'))
  if (filter === 'favourites') return allCharacters.filter(c => favorites.includes(c.id))
  return allCharacters
}


document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {

    document.querySelectorAll('.filter-btn').forEach(button => {
      button.classList.remove('active')
    })

    btn.classList.add('active')
    currentFilter = btn.dataset.filter

    let list = getFilteredList(currentFilter)
    list.sort((a, b) => currentSort === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name))

    renderItems(list)
  })
})

document.getElementById('search').addEventListener('input', (e) => {
  let searchValue = e.target.value.toLowerCase()
  
  document.querySelectorAll('.links .item').forEach(item => {
    let name = item.querySelector('.item-name')?.textContent.toLowerCase()
    if (name) {
      item.style.display = name.includes(searchValue) ? 'flex' : 'none'
    }
  })
})


function updateFavoritesBadge() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || []
  document.querySelector('.badge').textContent = favorites.length
}

document.querySelector('.heart').addEventListener('click', () => {
  if (!currentCharacter) return

  let favorites = JSON.parse(localStorage.getItem('favorites')) || []

  if (favorites.includes(currentCharacter.id)) {
    favorites = favorites.filter((id) => id !== currentCharacter.id);
    document.querySelector(".heart img").src = "/images/emptyheart.png";
  } else if (favorites.length >= 10) {
    alert("You can only have 10 favorites.");
  } else {
    favorites.push(currentCharacter.id);
    document.querySelector(".heart img").src = "/images/heartfilled.png";
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
  updateFavoritesBadge()
  if (currentFilter === 'favourites') {
    renderItems(getFilteredList('favourites'))
    
  }

  
})

loadCharacters()
updateFavoritesBadge()

const bgMusic = document.getElementById('bg-music')
const stopBtn = document.getElementById('stop-music')

function updateIcon() {
  stopBtn.src = bgMusic.paused
    ? '/images/mute.png'
    : '/images/volume.png'
}

document.addEventListener( "click", () => {
    bgMusic.muted = false;
    bgMusic.play();
    updateIcon();
  },
  { once: true }
);

stopBtn.addEventListener('click', (e) => {
  e.stopPropagation()
  if (bgMusic.paused) {
    bgMusic.play()
    bgMusic.muted = false
  } else {
    bgMusic.pause()
  }
  updateIcon()
})
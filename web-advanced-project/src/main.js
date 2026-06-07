import './style.scss'


let arrowleft = document.querySelector('.arrow.left img')
let arrowright = document.querySelector('.arrow.right img')
const leftOriginal = arrowleft.src
const rightOriginal = arrowright.src

arrowleft.addEventListener('mousedown', () => { arrowleft.src = './src/images/controlLR.png' })
arrowleft.addEventListener('mouseup', () => { arrowleft.src = leftOriginal })
arrowleft.addEventListener('mouseleave', () => { arrowleft.src = leftOriginal })

arrowright.addEventListener('mousedown', () => { arrowright.src = './src/images/controlRR.png' })
arrowright.addEventListener('mouseup', () => { arrowright.src = rightOriginal })
arrowright.addEventListener('mouseleave', () => { arrowright.src = rightOriginal })

let searchImg = document.querySelector('#search-button img')
searchImg.addEventListener('mousedown', () => { searchImg.src = './src/images/searchred.png' })
searchImg.addEventListener('mouseup', () => { searchImg.src = './src/images/search.png' })
searchImg.addEventListener('mouseleave', () => { searchImg.src = './src/images/search.png' })


function fillBottomBar(character) {
 document.querySelector('.bottom-bar .blok:nth-child(1) .value').textContent = character.groups[0]?.name ?? character.roles[0] ?? 'Unknown'
  document.querySelector('.bottom-bar .blok:nth-child(2) .value').textContent = character.occupation ?? 'Unknown'
  document.querySelector('.bottom-bar .blok:nth-child(3) .value').textContent = character.gender ?? 'Unknown'
 document.querySelector('.bottom-bar .blok:nth-child(4) .value').textContent = character.alias[0] ?? 'Unknown'
}



fetch('https://api.attackontitanapi.com/characters')
  .then(response => response.json())
  .then(data => {
    let last = document.querySelector('.links .last')

    data.results.forEach(character => {
      let item = document.createElement('div')
      item.classList.add('item')
      item.innerHTML = `
        <p class="item-name">${character.name}</p>
        <p class="item-affiliation">${character.groups[0]?.name ?? character.occupation ?? 'Unknown'}</p>
      `
      item.addEventListener('click', () => {
        document.querySelectorAll('.links .item').forEach(i => i.classList.remove('active'))
        item.classList.add('active')
        fillBottomBar(character)
      })
      last.before(item)
    })
  })
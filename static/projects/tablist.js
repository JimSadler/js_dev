// Start writing JavaScript here!
// const tabs = Array.from(document.querySelectorAll('.tab'))
const tabby = document.querySelector('.tabby')
const tabs = [...tabby.querySelectorAll('.tab')]
// const tabContents = Array.from(document.querySelectorAll('.tab-content'))
const tabContents = [...tabby.querySelectorAll('.tab-content')]

// tabs.forEach((tab) => {
//   tab.addEventListener('click', (event) => {
//     // console.log(tab)
//     const target = tab.dataset.theme
//     const tabContent = tabby.querySelector('#' + target)
//     tabs.forEach((t) => t.classList.remove('is-selected'))
//     tabContents.forEach((c) => c.classList.remove('is-selected'))
//     tabContent.classList.add('is-selected')

//     tab.classList.add('is-selected')
//     // console.log(tabContent)
//   })
// })

const tabList = tabby.querySelector('.tabs')

tabList.addEventListener('click', event => {
  const tab = event.target
  const target = tab.dataset.theme
  const tabContent = tabby.querySelector('#' + target)

  // select tab
  tabs.forEach(t => t.classList.remove('is-selected'))
  tab.classList.add('is-selected')

  tabContents.forEach(tc => tc.classList.remove('is-selected'))
  tabContent.classList.add('is-selected')

  console.log(tabContent)
})

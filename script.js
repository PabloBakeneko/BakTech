const logElement = () => {
  
const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})
}

document.addEventListener('DOMContentLoaded', logElement)
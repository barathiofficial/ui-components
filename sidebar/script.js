/**
 * @type {NodeListOf<HTMLAnchorElement>}
 */
const links = document.querySelectorAll('.link')

/**
 * @type {HTMLDivElement}
 */
const sidebar = document.querySelector('#sidebar')

/**
 * @type {HTMLButtonElement}
 */
const collapseBtn = document.querySelector('#collapse-btn')

links.forEach((link) => {
	link.onclick = (e) => {
		links.forEach((link) => {
			if (link === e.target) {
				link.classList.add('selected')
			} else {
				link.classList.remove('selected')
			}
		})
	}
})

collapseBtn.onclick = () => {
	sidebar.classList.toggle('collapsed')
}

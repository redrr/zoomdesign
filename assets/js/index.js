let contactMenuOpen = false
const contactMenu = $('.contact-menu')
const contactBtn = $('.contact-button')

contactBtn.on('click', () => {
    contactMenuOpen = !contactMenuOpen
    if (contactMenuOpen)
        contactMenu.addClass("active")
    else
        contactMenu.removeClass("active")
})

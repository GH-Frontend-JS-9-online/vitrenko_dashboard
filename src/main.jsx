function design() {
    const home = document.getElementById('home')
    const menu = document.getElementById('menu')
    const graffic = document.getElementById('graffic')
    const messages = document.getElementById('messages')
    const friends = document.getElementById('friends')

    const onclick_color = '#fbfbfc'
    const deafult_color = '#737aa1'

    home.onclick = () => {
        home.style.border = 'none'
        home.color = onclick_color
        menu.style.color = deafult_color
        graffic.style.color = deafult_color
        messages.style.color = deafult_color
        friends.style.color = deafult_color
    }

    menu.onclick = () => {
        menu.style.border = 'none'
        menu.color = onclick_color
        home.style.color = deafult_color
        graffic.style.color = deafult_color
        messages.style.color = deafult_color
        friends.style.color = deafult_color
    }

    graffic.onclick = () => {
        graffic.style.border = 'none'
        graffic.color = onclick_color
        menu.style.color = deafult_color
        home.style.color = deafult_color
        messages.style.color = deafult_color
        friends.style.color = deafult_color
    }

    messages.onclick = () => {
        messages.style.border = 'none'
        messages.color = onclick_color
        menu.style.color = deafult_color
        graffic.style.color = deafult_color
        home.style.color = deafult_color
        friends.style.color = deafult_color
    }

    friends.onclick = () => {
        friends.style.border = 'none'
        friends.color = onclick_color
        menu.style.color = deafult_color
        graffic.style.color = deafult_color
        messages.style.color = deafult_color
        home.style.color = deafult_color
    }
}

//design()
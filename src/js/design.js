import {light_label, label} from '../App'

export function design(id) {

    document.getElementById('home').style.color = '#737aa1'
    document.getElementById('menu').style.color = '#737aa1'
    document.getElementById('messages').style.color = '#737aa1'
    document.getElementById('friends').style.color = '#737aa1'
    document.getElementById('graffic').src = label
    
    if (document.getElementById(id).nodeName === 'IMG') {
        document.getElementById(id).src = light_label
    }
    else {
        document.getElementById(id).style.color = '#fbfbfc'
    }
}
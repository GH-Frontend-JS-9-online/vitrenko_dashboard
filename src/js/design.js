import {light_label, label} from '../App'
import { correctWidth } from './graffic'

export function design(id) {

    document.getElementById('h_icon').style.color = '#737aa1'
    document.getElementById('m_icon').style.color = '#737aa1'
    document.getElementById('mes_icon').style.color = '#737aa1'
    document.getElementById('f_icon').style.color = '#737aa1'
    document.getElementById('g_icon').src = label
    
    if (document.getElementById(id).nodeName === 'IMG') {
        document.getElementById(id).src = light_label
        setTimeout(correctWidth, 5)
    }
    else {
        document.getElementById(id).style.color = '#fbfbfc'
    }
}
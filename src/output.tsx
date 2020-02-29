import React from 'react'
import { messages } from './getMessages'
import { graffic } from './getGraffic'
import { design } from './js/design'

type OutputProps = {
    id: string
}

export const Output: React.FC<OutputProps> = ({id}) => {
    const ident: string = id;
    let content: any;

    if (ident === 'messages') {
        content = messages()
        design('mes_icon')
    }
    else if (ident === 'graffic') {
        content = graffic()
        design('g_icon')
    }
    else if (ident === 'home') {
        design('h_icon')
    }
    else if (ident === 'menu') {
        design('m_icon')
    }
    else if (ident === 'friends') {
        design('f_icon')
    }
    return(<>{content}</>)
}
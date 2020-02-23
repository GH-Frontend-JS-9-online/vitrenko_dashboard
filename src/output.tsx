import React from 'react'
import { messages } from './getMessages'
import { graffic } from './getGraffic'

type OutputProps = {
    id: string
}

export const Output: React.FC<OutputProps> = ({id}) => {
    const ident: string = id;
    let content: any;

    if (ident === 'messages') {
        content = messages()
    }
    else if (ident === 'graffic') {
        content = graffic()
    }
    return(<>{content}</>)
}
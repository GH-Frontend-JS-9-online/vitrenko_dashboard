export function correctFloat() {
    let myMessage = document.getElementsByClassName('my_message')
    let messageText = document.getElementsByClassName('message_text')

    for (let i = 0; i < myMessage.length; i++) {
        const margin_left = myMessage[i].offsetWidth - messageText[i].offsetWidth - myMessage[i].offsetWidth*0.03;

        messageText[i].style.marginLeft = margin_left + 'px'
    }

    //let message_section = document.getElementById('message')
    //message_section.style.maxHeight = document.getElementsByClassName('chat')[0].offsetHeight*0.9;

    //console.log(document.getElementsByClassName('chat')[0].offsetHeight*0.9)
}
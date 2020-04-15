import React, {useRef} from 'react'
import label from './img/label.png' 

export const Messages: React.FC = () => {

    const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const ref = useRef<HTMLInputElement>(null);

    function send(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter' && ref.current!.value !== '') {

            let chat = document.getElementById('message');

            const message = ref.current!.value;
            ref.current!.value = '';

            let div = document.createElement('div');
            div.classList.add('my_message');

            let p = document.createElement('p');
            p.classList.add('message_text');
            p.innerHTML = message;

            let span = document.createElement('span');
            span.classList.add('time')
            let timeOfSending = new Date();
            let day = timeOfSending.getDate();
            let month = timeOfSending.getMonth();
            let hours = timeOfSending.getHours();
            let minutes = timeOfSending.getMinutes();
            let ampm = hours >= 12 ? 'PM' : 'AM';

            hours = ampm === 'PM' ? hours-12 : hours;

            span.innerHTML = day + ' ' + months[month] + ' ' + hours + ':' + minutes + ' ' + ampm;

            div.appendChild(p);
            div.appendChild(span)

            chat!.appendChild(div);

            chat!.scrollTop = 100000

            let margin_left: number = div.offsetWidth - p.offsetWidth - div.offsetWidth*0.03;

            p.style.marginLeft = margin_left + 'px';
            
        }
    }  

    return(
        <section className="main_content">    
            <div className="options">
                <p className="option"><i className="fas fa-inbox"></i><span>inbox</span></p>
                <p className="option"><i className="fab fa-telegram-plane"></i><span>Sent</span></p>
                <p className="option"><i className="fas fa-trash"></i><span>Trash</span></p>
                <span className="filter_message">Filter message:</span>
                <select>
                    <option defaultChecked>Date</option>
                    <option>Name</option>
                </select>
            </div>

            <section className="chat_section">
                <div className="chat_list">
                    <div className="chat_list_element">
                        <div>
                            <img src={label} alt="" className="users_icons" />
                            <h3 className="user_name">Michelle Stewart</h3>
                            <span className="date">12:00</span>
                        </div>
                        <p className="last_message">Lorem ipsum</p>
                    </div>
                    <button>+ New conversation</button>
                </div>
                <section className="chat">
                    <section className="messages" id="message">
                        <div className="my_message">
                            <p className="message_text">Id nulla labore aliquip veniam velit ad dolore ullamco ad quis. Cillum irure occaecat mollit officia. Enim veniam aliquip Lorem incididunt ut reprehenderit Lorem amet duis enim cupidatat proident.</p>
                            <span className="time">dvdvdsfvdsf</span>
                        </div>
                        <div className="companion_message">
                            <p className="message_text">Officia in dolor mollit sint cillum proident. Labore aute tempor eiusmod ut in laborum qui. Do ex officia aliquip laboris commodo non minim et. Do irure cillum ut ullamco duis qui ullamco ex aute nulla. Mollit consectetur sit ut sunt.</p>
                            <span className="time">sdsvvfdf</span>
                        </div>
                    </section>
                    <div className="input">
                        <input
                            ref = {ref}
                            type="text"
                            id="messageText"
                            placeholder="Write a message"
                            onKeyPress = {send}
                        />
                        <i className="fas fa-paperclip"></i>
                    </div>    
                </section>
                <div className="info">
                    <img src={label} alt="User's icon" className="icon" />
                    <span className="user_info" id="status"></span>
                    <span className="user_info" id="description"></span>
                    <span className="user_info" id="email">Email</span>
                    <span className="user_info" id="phone">Phone</span>
                    <span className="user_info" id="adress">Adress</span>
                    <span className="user_info" id="oragnization">Organization</span>
                </div>
            </section>
        </section>
    )
}
import React from 'react'

export const getMessages = () => {
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

            <section className="message">
                <div className="chat_list">
                    <div className="chat_list_element">
                        <div>
                            <img src="./img/label.png" alt="" className="users_icons" />
                            <h3 className="user_name">Michelle Stewart</h3>
                            <span className="date">12:00</span>
                        </div>
                        <p className="last_message">Lorem ipsum</p>
                    </div>
                    <button>+ New conversation</button>
                </div>
                <section className="chat"></section>
                <div className="info">
                    <img src="./img/label.png" alt="User's icon" className="icon" />
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
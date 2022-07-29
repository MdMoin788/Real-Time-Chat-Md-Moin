import React from 'react'
// import "./Message.css";


const Message = ({ user, message, i ,classs }) => {

    
        return (
            <>
            { i > 0 &&  user ?   <div className={`messageBox ${classs}`}  >
                {message == "Online" ? null : message}
            </div> : <div className={`messageBox ${classs}`}>
            {message == "Online" ? null : message}

            </div>}
            </>
        )



   
}

export default Message


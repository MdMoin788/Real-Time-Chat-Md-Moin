import React from 'react'
// import "./Message.css";


const Message = ({ user, message, i ,classs }) => {

    
        return (
            <>
            { i > 0 &&  user ?   <div className={`messageBox ${classs}`}  >
                {`${user} : ${message}` == "Online" ? null : `${user} : ${message}` }
            </div> : <div className={`messageBox ${classs}`}>
           {message == "Online" ? null : `${"you"} : ${message}`}

            </div>}
            </>
        )



   
}

export default Message


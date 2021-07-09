import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Join.css';
const Join = () => {
    const [name , setName] = useState('');
    const [room, setRoom] = useState('');
    return(
        <div class="joinOuterContainer">
            <div class="joinInnerContainer">
                <h1 class="heading">Join</h1>
                <div><input placeholder="Name" class="joinInput" type="text" onChange={(event) => setName(event.target.value)}/></div>
                <div><input placeholder="Room" class="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)}/></div>
                <Link onClick={event=>(!name || !room)?event.preventDefault():null} to={`/chat?name=${name} & room=${room}`}>
                    <button type="button" class="btn btn-info" >Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;
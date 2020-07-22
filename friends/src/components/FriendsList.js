  
import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Friend } from './Friend'

export function FriendsList(props) {
    const [friends, setFriends] = useState()

  useEffect(() => {
    localStorage.getItem('token') &&
    axiosWithAuth().get('/api/friends')
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  console.log(friends)
    return(
        <div>
           {friends ? friends.map((item, index) => {
               return <Friend item={item} key={index} />

           }):
            <h3>Loading</h3>
           }
        </div>
    )
} 

///BEFORE MOVING AXIOS TO ACTIONS
// const Friends = () => {
//     const [friend, setFriend ] = useState([])

//     useEffect(() => {
//         axiosWithAuth()
//         .get('http://localhost:5000/api/friends')
//         .then(res => {
//             console.log(res.data)
//             setFriend(res.data)

//         })
//         .catch(err => console.log(err))
//     }, [])

//     return (
//         <div>
//             <h1>Hello from Friends</h1>
//             <p>{friend.map(friend => {
//                 return <div>
//                     <h2>{friend.name}</h2>
//                     <h2>{friend.age}</h2>
//                     <h2>{friend.email}</h2>
//                     </div>
//             })}</p>
//             <FriendForm/>

//         </div>
//     )
// }

// export default Friends

import React, {useEffect} from "react";
import { connect } from 'react-redux'
import { getFriend } from "../actions";
import Friend from './Friend'
import NewFriend from './NewFriend'


const FriendsList = ({getFriend, friends, error, isLoading}) => {

    useEffect(() => {
       getFriend()
    }, [getFriend])


    if(isLoading) {
        return <h3>Loading Friends...</h3>
    }

    return (
    
        <div>
            {/* {error && <p>{error}</p>} */}
            {friends.map(friend => (
                <Friend friend={friend}/>
            ))}  
        </div>
         
    
    )
}

const mapStateToProps = function(state) {
    return {
        friends: state.friends,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, {getFriend})(FriendsList)




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




import React, {useState, useEffect} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const Friends = () => {
    const [friend, setFriend ] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res.data)
            setFriend(res.data)
            
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Hello from Friends</h1>
            <p>{friend.map(friend => {
                return <div>
                    <h2>{friend.name}</h2>
                    <h2>{friend.age}</h2>
                    <h2>{friend.email}</h2>
                    </div>
            })}</p>

        </div>
    )
}

export default Friends


// class Friends extends React.Component {
//   state = {
//     friends: [],
//   };

//   componentDidMount() {
//     this.getData();
//   }

//   getData = () => {
//     axiosWithAuth()
//       .get("http://localhost:5000/api/friends")
//       .then((res) => {
//         console.log(res);
//         this.setState({ friends: res.data.data });
//       })
//       .catch((err) => console.log({ err }));
//   };

//   render() {
//     // const friends = this.formatData();
//     return (
//       <div className="friend-container">
//         <h1>Hello from friends</h1>
//         {
         
//         }
//       </div>
//     );
//   }
// }

// export default Friends;

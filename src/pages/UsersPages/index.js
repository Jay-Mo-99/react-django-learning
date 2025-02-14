import UserList from "./UserList"
import UserListPractice from "./UserListPractice"
import Map from "../../components/Map"
import StateProps from "../../components/StateProps"
import TimerApp from "../../components/TimerApp"
import TimerUseEffect from "../../components/TimerUseEffect"

export default function UsersPages(){
    return(
        <div>
            <h1>This is UserPage of Sample Project</h1>
            <TimerUseEffect></TimerUseEffect>
            {/* <TimerApp></TimerApp> */}
            {/* <StateProps></StateProps> */}
            {/* <Map></Map> */}
            {/* <UserListPractice></UserListPractice> */}
        </div>
    )
}
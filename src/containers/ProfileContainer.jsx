import React from 'react'
import Profile from '../components/Profile.jsx'
import ProfileForm from '../components/ProfileForm.jsx'
import {connect} from 'react-redux'

const ProfileContainer = (props) => {
    let user = props.userInfoFromGlobalState
    return (
        <div>
            <Profile key={user.id} user={user}/>
        </div>
    )
}

let mapStateToProps = (globalState) => {
    return {
        userInfoFromGlobalState: globalState.userInformation
    }
}


export default connect(mapStateToProps)(ProfileContainer)

import React from 'react'
import { Header, Icon} from 'semantic-ui-react'

const Logo = () => {

    return (
        <div>
            <Header as='h4' icon textAlign='center'>
                <Icon name='lightning' circular size='mini' />
                <Header.Content>Be Engaged</Header.Content>
            </Header>
        </div>
    )
}


export default Logo

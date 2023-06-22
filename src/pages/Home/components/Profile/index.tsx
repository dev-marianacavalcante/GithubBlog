import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
    ProfileContainer,
    ProfileDetails,
    ProfileImg
} from './styles'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { ExternalLink } from '../../../../components/externalLink'

export function Profile() {
    return(
        <ProfileContainer>
            <ProfileImg src='https://github.com/dev-marianacavalcante.png'/>
            <ProfileDetails>
                <header>
                    <h1>Mariana Cavalcante</h1>
                    <ExternalLink  text='Github' href="https://github.com/dev-marianacavalcante"/>
                </header>
                <p>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. 
                    Eu viverra massa quam dignissim aenean malesuada suscipit. 
                    Nunc, volutpat pulvinar vel mass.
                </p>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGithub} />
                        dev-marianacavalcante
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBuilding}/>
                        freelancer
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUserGroup}/>
                        32 seguidores
                    </li>
                </ul>
            </ProfileDetails>
        </ProfileContainer>
    )
}
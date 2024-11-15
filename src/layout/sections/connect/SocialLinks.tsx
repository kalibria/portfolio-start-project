import React from 'react';
import {S} from './Connect_Styles';
import {ReactComponent as GithubIcon} from '../../../assets/images/svg/github-142-svgrepo-com.svg';
import {ReactComponent as LinkedinIcon} from '../../../assets/images/svg/linkedin-svgrepo-com.svg';
import {ReactComponent as TelegramIcon} from '../../../assets/images/svg/telegram-svgrepo-com.svg';


export const SocialLinks:React.FC = () => {

  return (
    <S.SocialLinks>
        <LinkWithIcon Icon={GithubIcon} link={'https://github.com/kalibria'}/>
        <LinkWithIcon Icon={LinkedinIcon} link={'https://www.linkedin.com/in/maryia-kushlianskaya-228b3889'}/>
        <LinkWithIcon Icon={TelegramIcon} link={'https://.me/mariya_kalib'}/>
    </S.SocialLinks>
  );
};

type Props = {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>,
    link: string
}

const LinkWithIcon = ({Icon, link}: Props) => {
    return (
        <S.SocialLink href={link}>
            <Icon width={35} height={35}/>
        </S.SocialLink>
    )
}


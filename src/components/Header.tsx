import React from 'react';
import Image from 'next/image';

import LogoSvg from '../assets/images/logo.svg';

type HeaderProps = {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  const splitedName = userName.split(" ");

  return (
    <header>
      <span>
        <Image src={LogoSvg} height={40} width={40} alt="Venturus Logo"/>
        <p id="title">Squad Management Tool</p>
      </span>

      <span>
        <p>{userName}</p>
        <div className="userImage">
          <p>
            {userName.charAt(0).toUpperCase()}
            {splitedName.length >= 2 && splitedName[splitedName.length - 1].charAt(0).toUpperCase()}
          </p>
        </div>
      </span>

    </header>
  )
};

export default Header;

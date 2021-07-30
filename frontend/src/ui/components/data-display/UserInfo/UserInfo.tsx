import React from 'react';

import { UserShortInterface } from 'data/@types/UserInterface';

import  {
          UserInfoContainer,
          UserName,
          UserDescription,
          AvatarStyled,
          RatingStyled
        } from './UserInfo.style';

interface UserInfoProps extends UserShortInterface {};

const UserInfo: React.FC<UserInfoProps> = ({picture, name, rating, description}) => {
  return (
    <UserInfoContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      {description &&
        <UserDescription >{description}</UserDescription>
      }
    </UserInfoContainer>
  );
}

export default UserInfo;

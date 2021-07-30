import React from 'react';

import { Typography, Box } from '@material-ui/core';

import  {
          FooterStyled,
          FooterContainer, 
          FooterTitle, 
          FooterAppList 
        } from './Footer.style';

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{maxWidth: '400px'}}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={'body2'} sx={{marginTop: 2}}>
            e-Diaristas te ajuda a encontrar um profissional perfeito para realizar a limpeza da sua casa. Garantimos o melhor profissional com total segurança e praticidade! São milhares de clientes satisfeitos por todo o país.
          </Typography>
        </Box>

        <Box sx={{maxWidth: '400px'}}>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <FooterAppList>
            <li>
              <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                <img src={'/img/logos/app-store.png'} alt={'App Store'} />
              </a>
            </li>
            <li>
              <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                <img src={'/img/logos/google-play.png'} alt={'Google Play'} />
              </a>
            </li>
          </FooterAppList>
        </Box>
      </FooterContainer>
    </FooterStyled>
  );
}

export default Footer;

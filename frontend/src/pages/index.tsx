import React from 'react';

import  { 
          Button, 
          Typography, 
          Container,
          CircularProgress 
        } from '@material-ui/core';

import useIndex from 'data/hooks/pages/useIndex.page';

import  { 
          FormElementsContainer, 
          ProfissionaisPaper,
          ProfissionaisContainer
        } from '@styles/pages/index.style';

import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle       from 'ui/components/data-display/PageTitle/PageTitle';
import UserInfo        from 'ui/components/data-display/UserInfo/UserInfo';
import TextFieldMask   from 'ui/components/inputs/TextFieldMask/TextFieldMask';

const Home = () => {

  const {
          cep, setCep,
          errorMsg,
          loading,
          searched,
          firstSearch,
          diaristas,
          count,
          cepValido,
          buscarProfissionais
        } = useIndex();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
  }

  const handleClickSearch = (e: React.MouseEvent) => {
    if (cepValido && !loading) buscarProfissionais(cep);
  }

  return (
    <>
      <SafeEnvironment />

      <PageTitle 
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua região'}
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            fullWidth
            label={'Digite seu CEP'}
            mask={'99.999-999'}
            variant={'outlined'}
            value={cep}
            onChange={handleChangeInput}
          />

          {(errorMsg !== '') &&
            <Typography color={'error'}>{errorMsg}</Typography>
          }

          <Button 
            variant={'contained'} 
            color={'secondary'} 
            sx={{width: '220px'}}
            disabled={!cepValido || loading}
            onClick={handleClickSearch}
          >
            {
              loading ?
              <CircularProgress size={20} /> :
              'Buscar'
            }
          </Button>
        </FormElementsContainer>

        {(searched && diaristas && (diaristas.length > 0)) ? (
          <ProfissionaisPaper>
            <ProfissionaisContainer>
              {diaristas.map(({nome_completo, foto_usuario, reputacao, cidade}, index) => {
                return (
                  <UserInfo
                    key={`diarista-${index}`} 
                    name={nome_completo}
                    picture={foto_usuario}
                    rating={reputacao}
                    description={cidade}
                  />
                );
              })}
            </ProfissionaisContainer>

            <Container sx={{textAlign: 'center'}}>
              {(count > 0) && (
                <Typography sx={{marginTop: 5}}>
                  E mais {count} {(count > 1) ? 'profissionais atendem' : 'profissional atende'} na sua região.
                </Typography>
              )}

              <Button 
                variant={'contained'} 
                color={'secondary'}
                sx={{marginTop: 5}}
              >
                Contratar profissional
              </Button>
            </Container>
          </ProfissionaisPaper>
        ) : (
          <Typography 
            align={'center'} 
            color={'textPrimary'}
            sx={{marginBottom: 7}}
          >
            {
              firstSearch ?
              'Vamos ver quem pode te atender =)' :
              'Ainda não temos diaristas disponíveis na sua região.'
            }
          </Typography>
        )}
      </Container>
    </>
  );
}

export default Home;

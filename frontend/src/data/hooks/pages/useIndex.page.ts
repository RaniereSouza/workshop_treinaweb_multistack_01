import { useState, useMemo } from 'react';

import { UserShortInterface, UserShortInterfaceDB } from 'data/@types/UserInterface';

import { ValidationService } from 'data/services/ValidationService';
import { ApiService }        from 'data/services/ApiService';

const useIndex = () => {

  const [cep, setCep]                 = useState(''),
        [errorMsg, setErrorMsg]       = useState(''),
        [loading, setLoading]         = useState(false),
        [searched, setSearched]       = useState(false),
        [firstSearch, setFirstSearch] = useState(true),
        [diaristas, setDiaristas]     = useState(Array<UserShortInterfaceDB>()),
        [count, setCount]             = useState(0),
        cepValido                     = useMemo(() => ValidationService.cep(cep), [cep]);

  const buscarProfissionais = async (cep: string) => {

    setLoading(true);
    setSearched(false);
    setErrorMsg('');

    try {

      const { data }  = await ApiService.get<{
                          diaristas:           UserShortInterfaceDB[];
                          quantidade_restante: number;
                          // quantidade_diaristas: number;
                        }>(`/diaristas_cidade?cep=${cep.replace(/\D/g, '')}`);
                        // }>(`/diaristas-cidade?cep=${cep.replace(/\D/g, '')}`);

      setDiaristas(data.diaristas);
      setCount(data.quantidade_restante);
      setLoading(false);
      setSearched(true);
    }
    catch (err) {
      setErrorMsg('CEP não encontrado.');
      setDiaristas([]);
      setCount(0);
      setLoading(false);
      setSearched(true);
    }

    if (firstSearch) setFirstSearch(false);
  }

  return {
    cep, setCep,
    errorMsg,
    loading,
    searched,
    firstSearch,
    diaristas,
    count,
    cepValido,
    buscarProfissionais
  };
}

export default useIndex;

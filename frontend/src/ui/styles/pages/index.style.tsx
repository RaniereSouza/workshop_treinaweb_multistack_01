import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Paper }                        from "@material-ui/core";

export const FormElementsContainer = styled('div')`
  display:        flex;
  flex-direction: column;
  align-items:    center;
  gap:            ${({theme}) => theme.spacing(5)};
  max-width:      650px;
  margin:         0 auto ${({theme}) => theme.spacing(7)};
  float:          none;
`;

export const ProfissionaisPaper = styled(Paper)`
  margin:  0 auto ${({theme}) => theme.spacing(10)};
  padding: ${({theme}) => theme.spacing(7)};

  ${({theme}) => theme.breakpoints.down('md')} {
    &.MuiPaper-root {
      padding:    0;
      box-shadow: none;
    }
  }
`;

export const ProfissionaisContainer = styled('div')`
  display:               grid;
  grid-template-columns: 1fr;

  ${({theme}) => theme.breakpoints.up('md')} {
    grid-template-columns: repeat(2, 1fr);
    gap:                   ${({theme}) => theme.spacing(6)};
  }

  ${({theme}) => theme.breakpoints.down('md')} {
    /* margin: 0 ${({theme}) => theme.spacing(-2)}; */
    margin: 0;

    > :nth-of-type(odd) {
      /* background-color: ${({theme}) => theme.palette.background.paper}; */
      background-color: ${({theme}) => theme.palette.grey[100]};
    }
  }
`;

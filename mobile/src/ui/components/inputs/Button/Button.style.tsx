import { Button } from "react-native-paper";

import styled from "@emotion/native";

export const ButtonStyled = styled(Button)`
  margin:        0 auto;
  padding:       ${({theme}) => theme.spacing(0.5)};
  width:         100%;
  max-width:     300px;
  border-radius: ${({theme}) => theme.shape.borderRadius};
`;

ButtonStyled.defaultProps = {
  dark:      true,
  uppercase: false
};

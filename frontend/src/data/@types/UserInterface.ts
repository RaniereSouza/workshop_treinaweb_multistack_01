export interface UserShortInterface {
  name:         string;
  picture?:     string;
  rating?:      number;
  description?: string;
}

export interface UserShortInterfaceDB {
  nome_completo: string;
  foto_usuario?: string;
  reputacao?:    number;
  cidade?:       string;
}

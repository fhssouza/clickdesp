export interface Endereco {
  id?: any;
  logradouro: string;
  cep: string;
  complemento: string;
  localidade: string;
  bairro: string;
  uf: string;
  ddd: string;
  numero: string;
  principal?: boolean;
}

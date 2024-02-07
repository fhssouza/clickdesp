export interface Endereco {
  id?: any;
  logradouro: string;
  cep: string;
  complemento: string;
  localidade: string;
  bairro: string;
  uf: string;
  numero: string;
  enderecos: Endereco[];
}

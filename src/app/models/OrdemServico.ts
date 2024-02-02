import { Itens } from "./Itens";
export interface OrdemServico{
  id?: any;
  status?: string;
  tipoServico: any;
  observacao: string;
  veiculoPlaca?: string;
  veiculo?: any;
  proprietarioNome?: string;
  valorTotal?: number;
  itens?: Itens[]
}

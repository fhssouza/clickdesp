import { Veiculo } from "./Veiculo";

export interface OrdemServico{
  id?: any;
  status: string;
  observacao: string;
  veiculoPlaca?: string;
  proprietarioNome?: string;
  valorTotal?: number
}

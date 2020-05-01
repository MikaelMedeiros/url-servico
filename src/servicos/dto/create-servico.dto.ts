export class CreateServicoDto {
  readonly codigo: number
  readonly nome: string;
  readonly url: string;
  readonly tipo: number;
  readonly sistema: number;
  readonly exluido: boolean;
  readonly ambiente: string;
}
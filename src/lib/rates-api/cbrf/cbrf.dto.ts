export type CBRFResponseDTO = {
  Date: Date;
  Timestamp: Date;
  Valute: Record<
    string,
    {
      ID: string;
      NumCode: string;
      CharCode: string;
      Nominal: number;
      Name: string;
      Value: number;
      Previous: number;
    }
  >;
};

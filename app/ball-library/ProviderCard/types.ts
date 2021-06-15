export interface providerImageProps {
  uri: string;
}
export interface providerInfoProps {
  providerName: string;
  providerAddress: string;
}

export interface IProviderCard {
  sportId: string;
  type: 'sport' | 'sportComplex';
  uri: string;
  providerName: string;
  providerAddress: string;
}

export interface IReserveButton {
  id: string;
  type: 'sport' | 'sportComplex';
  onReservePress?: () => void;
}

type sports =
  | 'basketball'
  | 'football'
  | 'futsal'
  | 'Karting'
  | 'paintball'
  | 'Pool'
  | 'Game-room'
  | 'scape-room'
  | 'sport-complex'
  | 'volleyball';

export default interface ISportIcon {
  sportType: sports;
  size: number;
  color: string;
}

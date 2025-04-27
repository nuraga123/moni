interface Chain {
  id: number;
  name: string;
  slug: string;
  logoUrl: string;
}

interface Platform {
  id: number;
  name: string;
  slug: string;
  logoUrl: string;
}

interface Volume {
  USD: string;
}

interface MarketCap {
  USD: string;
}

interface MarketCapChange {
  USD: string;
}

interface MarketCapChangePercents {
  USD: string;
}

interface Liquidity {
  USD: string;
}

interface Security {
  shortName: string;
  name: string;
  status: boolean;
}

export interface ILink {
  name: string;
  linkUrl: string;
  logoUrl: string;
}

export interface Item {
  id: number;
  address: string;
  logoUrl: string;
  name: string;
  symbol: string;
  chain: Chain;
  platform: Platform;
  createdAt: number;
  smartFollowersCount: number;
  smartFollowersCountChange: number;
  smartMentionsCount: number;
  smartMentionsCountChange: number;
  txsBuyCount: number;
  txsSellCount: number;
  txsCountChange: number;
  volumeBuy: Volume;
  volumeSell: Volume;
  volumeChange: Volume;
  marketCap: MarketCap;
  marketCapChange: MarketCapChange;
  marketCapChangePercents: MarketCapChangePercents;
  liquidity: Liquidity;
  holdersCount: number;
  holdersCountChange: number;
  security: Security[];
  links: ILink[];
}

export interface ItemsResponse {
  items: Item[];
}

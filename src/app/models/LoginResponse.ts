interface LoginResponse {
    token: string;
    links: { rel: string; href: string }[];
  }

  export type { LoginResponse }
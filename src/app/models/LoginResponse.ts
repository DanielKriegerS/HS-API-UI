interface LoginResponse {
    token: string;
    links: { rel: string; href: string }[];
    userId: string;
  }

  export type { LoginResponse }
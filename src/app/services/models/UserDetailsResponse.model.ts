export interface UserDetailsResponse {
  id: number | null;
  name: string | null;
  socialName: string | null;
  email: string | null;
  dtNasc: Date | null;
  phone: string | null;
  avatar: Uint8Array | null;
  description: string | null;
  state: string | null;
  city: string | null;
  coverImg: Uint8Array | null;
  employee: boolean | null;
  workplace: string | null;
  recent_Education: string | null;
  current_Company: string | null;
  profission: string | null;
}





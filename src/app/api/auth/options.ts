import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const googleClientId = `${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`;
const googleSecret = `${process.env.NEXT_PRIVATE_GOOGLE_CLIENT_SECRET}`;
const secret = `${process.env.NEXTAUTH_SECRET}`;

export const options: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleSecret,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret,
  },
};

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import Auth0Provider from "next-auth/providers/auth0";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from  "../../../middlwares/connect";
import userModel from "../../../models/userModel"
// import AppleProvider from "next-auth/providers/apple"
// import EmailProvider from "next-auth/providers/email"

export default NextAuth({
  secret: "w1821480",
  adapter: MongoDBAdapter(clientPromise),
  //database: process.env.DATABASE_URL,
  providers: [
    //FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET}),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_ID,
    //   clientSecret: process.env.TWITTER_SECRET,
    // }),
    // Auth0Provider({
    //   clientId: process.env.AUTH0_ID!,
    //   clientSecret: process.env.AUTH0_SECRET!,
    //   issuer: process.env.AUTH0_ISSUER
    // }),
  ],
  // callbacks: {
  //   async jwt({ token, account }) {
  //   // Persist the OAuth access_token to the token right after signin
  //   if (account) {
  //     token.accessToken = account.access_token;
  //   }
  //   return token;
  // },
  async session({ session, token, user }) {
    // Send properties to the client, like an access_token from a provider.
    session.accessToken = token.accessToken;
    console.log(user, token, session);
    return session;
  }
  // },
  
});
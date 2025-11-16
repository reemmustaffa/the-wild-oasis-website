import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    authorized({ auth, request }) {
      //دي بتحول الاسترنج لترو وفولس بدل ماعمل شرط طويل
      return !!auth?.user;
    },
  },

  //دا عشان لو انت مش عامل تسجيل الدخول وحاولت تدحل علي الصفحه يوديك مباشرة ل الصفحه دي
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);

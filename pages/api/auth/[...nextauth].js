import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { Router, useRouter } from 'next/router';
import authApi from '/modules/auth/queries';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';

// For more information on each option (and a full list of options) go to

// https://next-auth.js.org/configuration/options
export default NextAuth({

	// https://next-auth.js.org/configuration/providers
	providers: [
		CredentialsProvider({
			type: 'credentials',
			credentials: {},
			async authorize (credentials, req) {
				if (credentials.postRegistration === 'true') {
					return {
						id: credentials._id,
						name: credentials.fullName,
						image: credentials.image,
						email: credentials.email,
						role: credentials.role,
						newUser: true
					};
				} else {
					return await authApi.signIn({
						'email': credentials.email,
						'password': credentials.password
					}).then(response => {
						return {
							id: response.data._id,
							email: response.data.email,
							image: response.data.photo,
							name: `${response.data.firstName} ${response.data.lastName}`
						};
					}).catch(err => {
						throw new Error(JSON.stringify({
							message: err.response.data.message,
							status: err.response.status
						}));
					});
				}
			}
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET
		}),
		FacebookProvider({
			clientId: process.env.FACEBOOK_CLIENT_ID,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET
		})
	],

	// The redirect should be set to a reasonably long random string.
	// It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
	// a separate redirect is defined explicitly for encrypting the JWT.
	secret: process.env.JWT_SECRET,

	session: {
		// Use JSON Web Tokens for session instead of database sessions.
		// This option can be used with or without a database for users/accounts.
		// Note: `jwt` is automatically set to `true` if no database is specified.
		strategy: 'jwt',
		maxAge: 30 * 24 * 60 * 60 // 30 days
		// Seconds - How long until an idle session expires and is no longer valid.
		// maxAge: 30 * 24 * 60 * 60, // 30 days

		// Seconds - Throttle how frequently to write to database to extend a session.
		// Use it to limit write operations. Set to 0 to always update the database.
		// Note: This option is ignored if using JSON Web Tokens
		// updateAge: 24 * 60 * 60, // 24 hours
	},

	// JSON Web tokens are only used for sessions if the `jwt: true` session
	// option is set - or by default if no database is specified.
	// https://next-auth.js.org/configuration/options#jwt
	jwt: {
		// A redirect to use for key generation (you should set this explicitly)
		// redirect: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
		// Set to true to use encryption (default: false)
		// encryption: true,
		// You can define your own encode/decode functions for signing and encryption
		// if you want to override the default behaviour.
		// encode: async ({ redirect, token, maxAge }) => {},
		// decode: async ({ redirect, token, maxAge }) => {},
	},

	// You can define custom pages to override the built-in ones. These will be regular Next.js pages
	// so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
	// The routes shown here are the default URLs that will be used when a custom
	// pages is not specified for that route.
	// https://next-auth.js.org/configuration/pages
	pages: {
		// signIn: '/auth/signin',  // Displays signin buttons
		// signOut: '/auth/signout', // Displays form with sign out button
		// error: '/auth/error', // Error code passed in query string as ?error=
		// verifyRequest: '/auth/verify-request', // Used for check email page
		// newUser: null // If set, new users will be directed here on first sign in
	},

	// Callbacks are asynchronous functions you can use to control what happens
	// when an action is performed.
	// https://next-auth.js.org/configuration/callbacks
	callbacks: {
		async signIn ({ user, account, profile }) {
			if (account.provider === 'google') {
				const req = authApi.signInWithGoogle({ account, profile })
			} else if (account.provider === 'facebook') {
				return await authApi
					.signInWithFacebook({ account, profile })
					.then(function (response) {
						if (response.status === 204) {
						} else {
						}
					})
					.catch((error) => {
						if (error.response.status === 409) {
						}
					});
			}

			return true;
		},
		async jwt ({ token, user, account, profile, isNewUser }) {
			return token;
		},
		async session ({ session, user, token }) {
			return session;
		}
	},

	// Events are useful for logging
	// https://next-auth.js.org/configuration/events

	// Enable debug messages in the console if you are having problems
	debug: process.env.NODE_ENV === 'development'
});

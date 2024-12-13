import { Session, User } from "@supabase/supabase-js";
import * as QueryParams from "expo-auth-session/build/QueryParams";
import { SplashScreen, useRouter, useSegments } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";

import { supabase } from "@/config/supabase";

SplashScreen.preventAutoHideAsync();

type SupabaseContextProps = {
  user: User | null;
  session: Session | null;
  initialized?: boolean;
  signOut: () => Promise<void>;
  createSessionFromUrl: (url: string) => Promise<Session | null | undefined>;
  sendMagicLink: (email: string, redirectTo: string) => Promise<void>;
};

type SupabaseProviderProps = {
  children: React.ReactNode;
};

export const SupabaseContext = createContext<SupabaseContextProps>({
  user: null,
  session: null,
  initialized: false,
  signOut: async () => {},
  sendMagicLink: async () => {},
  createSessionFromUrl: async () => undefined,
});

export const useSupabase = () => useContext(SupabaseContext);

export const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
  const router = useRouter();
  const segments = useSegments();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [initialized, setInitialized] = useState<boolean>(false);

  const sendMagicLink = async (email: string, redirectTo: string) => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectTo,
      },
    });
    if (error) throw error;
  };

  const createSessionFromUrl = async (url: string) => {
    const { params, errorCode } = QueryParams.getQueryParams(url);
    if (errorCode) throw new Error(errorCode);
    const { access_token, refresh_token } = params;
    if (!access_token) return;
    const { data, error } = await supabase.auth.setSession({
      access_token,
      refresh_token,
    });
    if (error) throw error;
    return data.session;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session ? session.user : null);
      setInitialized(true);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session ? session.user : null);
    });
  }, []);

  useEffect(() => {
    if (!initialized) return;
    const inProtectedGroup = segments[1] === "(tabs)";
    if (session && !inProtectedGroup) {
      router.replace("/(app)/(tabs)");
    } else if (!session) {
      router.replace("/(app)/welcome");
    }

    /* HACK: Something must be rendered when determining the initial auth state... 
		instead of creating a loading screen, we use the SplashScreen and hide it after
		a small delay (500 ms)
		*/

    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 500);
  }, [initialized, session]);

  return (
    <SupabaseContext.Provider
      value={{
        user,
        session,
        initialized,
        signOut,
        sendMagicLink,
        createSessionFromUrl,
      }}
    >
      {children}
    </SupabaseContext.Provider>
  );
};

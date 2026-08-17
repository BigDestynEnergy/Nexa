import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../Z-Index/supabase";

const AuthenticationContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        const initializeAuth = async () => {
            const {
                data: { session },
                error
            } = await supabase.auth.getSession();

            if (error) {
                console.error("Session error:", error);
            }

            if (!mounted) return;

            setSession(session);
            setUser(session?.user ?? null);
            setAuthLoading(false);
        };

        initializeAuth();

        const {
            data: { subscription }
        } = supabase.auth.onAuthStateChange((event, session) => {
            console.log("Auth event:", event);

            setSession(session);
            setUser(session?.user ?? null);
            setAuthLoading(false);
        });

        return () => {
            mounted = false;
            subscription.unsubscribe();
        };
    }, []);

    async function signOut() {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error("Sign out error:", error);
            return { error };
        }

        return { error: null };
    }

    return (
        <AuthenticationContext.Provider
            value={{
                user,
                session,
                authLoading,
                signOut
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
}

export const useAuth = () => useContext(AuthenticationContext);
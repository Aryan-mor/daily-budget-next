"use client";
import {Button} from "@/components/button";
import createSupabaseBrowerClient from "@/lib/supabase/client";
import React from "react";

export default function AuthForm() {
    const supabase = createSupabaseBrowerClient();

    const loginWithGoogle = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${location.origin}/login/callback`,
            },
        });
    };

    return (
        <div className="space-y-5">
            <h1>Login with oAuth</h1>
            <Button className="w-full" onClick={loginWithGoogle}>
                Login with google
            </Button>
        </div>
    );
}

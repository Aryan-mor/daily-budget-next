"use client";
import createSupabaseBrowerClient from "@/app/_lib/supabase/client";
import React from "react";
import Image from 'next/image'
import {Button} from "@nextui-org/button";

export default function AuthForm() {
    const supabase = createSupabaseBrowerClient();

    const loginWithGoogle = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${process.env.NEXT_PUBLIC_HOST}/login/callback`,
            },
        });
    };

    return (
        <div className="space-y-5">
            <h1>Welcome to <b>Daily Budget</b></h1>
            <Button className="w-full py-6" variant="bordered" onClick={loginWithGoogle}>
                <Image src="/google.webp" className="mr-4" alt="google" width="24" height="24"/>
                Login with google
            </Button>
        </div>
    );
}

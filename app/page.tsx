import {readUserSession} from "@/lib/actions";
import {createSupabaseServerClient} from "@/lib/supabase/server";
import {redirect} from "next/navigation";
import React from "react";
import {getUser} from "@/api/user";
import {Button} from "@nextui-org/button";

export default async function page() {
    const {data} = await readUserSession();

    if (!data.session) {
        return redirect("/login");
    }

    const logout = async () => {
        "use server";
        const supabse = await createSupabaseServerClient();
        await supabse.auth.signOut();
        redirect("/login");
    };

    const {data: user,} = await getUser();

    return (
        <div>
            <form action={logout}>
                <Button color="primary" type="submit">SignOut</Button>
                test
            </form>
            <pre>
            	{JSON.stringify(user)}
            </pre>
        </div>
    );
}

import {readUserSession} from "@/app/_lib/actions";
import {createSupabaseServerClient} from "@/app/_lib/supabase/server";
import {redirect} from "next/navigation";
import React from "react";
import {getUser} from "@/app/_api/user";
import {Button} from "@nextui-org/button";
import {getWallets} from "@/app/_api/wallets";
import {getCategories} from "@/app/_api/categories";
import {isEmpty} from "@nextui-org/shared-utils";

export default async function page() {
    const {data} = await readUserSession();
    return <div>
        test
    </div>
    if (!data.session) {
        return redirect("/login");
    }

    const logout = async () => {
        "use server";
        const supabase = await createSupabaseServerClient();
        await supabase.auth.signOut();
        redirect("/login");
    };

    const {data: user,} = await getUser();
    const {data: wallets,} = await getWallets();
    const {data: categories,} = await getCategories();

    if (isEmpty(wallets)) {
        return redirect("/new");
    }

    return (
        <div>
            <form action={logout}>
                <Button color="primary" type="submit">SignOut</Button>
            </form>
            <pre>
            	{JSON.stringify(user)}
            </pre>
            <br/>
            <br/>
            <br/>
            <pre>
            	{JSON.stringify(wallets)}
            </pre>
            <br/>
            <br/>
            <br/>
            <pre>
            	{JSON.stringify(categories)}
            </pre>
        </div>
    );
}

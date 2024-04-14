import {createSupabaseServerClient} from "@/app/_lib/supabase/server";

export async function getUser() {
    const supabase = await createSupabaseServerClient();
    const {data, error} = await supabase.auth.getUser();
    return {
        data: data?.user,
        error
    }
}

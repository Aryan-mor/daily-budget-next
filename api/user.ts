import {createSupabaseServerClient} from "@/lib/supabase/server";

export async function getUser() {
    const supabse = await createSupabaseServerClient();
    const {data,error} =  await supabse.auth.getUser();
    return{
        data:data?.user,
        error
    }
}

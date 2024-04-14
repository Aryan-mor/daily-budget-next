import {createSupabaseServerClient} from "@/app/_lib/supabase/server";

export async function getCategories() {
    const supabase = await createSupabaseServerClient();
    const {data, error} = await supabase.from('category').select("*");
    return {
        data: data,
        error
    }
}

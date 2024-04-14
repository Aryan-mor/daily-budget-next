"use server"
import {createSupabaseServerClient,} from "@/app/_lib/supabase/server";
import {delay} from "@/app/_lib/utils";

export async function getCurrencies() {
    const supabase = await createSupabaseServerClient();
    const {data, error} = await supabase.from('currency').select("*").order('label', {ascending: true});
    await delay(5000)
    return {
        data,
        error
    }
}

export async function getCurrency(id: Currency['id']) {
    const {data: currencies, ...props} = await getCurrencies()

    return currencies?.find(it => it.id === id);
}


'use server';
import {z} from 'zod';
import {createSupabaseServerClient} from "@/app/_lib/supabase/server";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {getUser} from "@/app/_api/user";

export async function getWallets() {
    const supabase = await createSupabaseServerClient();
    const {data, error} = await supabase.from('wallet').select("*");
    return {
        data,
        error
    }
}


const FormSchema = z.object({
    id: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
    user_id: z.string(),
    budget: z.coerce.number({
        invalid_type_error: 'Please select a budget.'
    }),
    currency_id: z.number({
        invalid_type_error: 'Please select a currency.',
    }),
});

const CreateWallet = FormSchema.omit({id: true, created_at: true, updated_at: true, user_id: true});

export type State = {
    errors?: {
        budget?: string[];
        currency_id?: string[];
    };
    message?: string | null;
};


export async function createWallet(prevState: State, formData: FormData) {
    const validatedFields = CreateWallet.safeParse({
        budget: formData.get('budget'),
        currency_id: formData.get('currency_id'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Wallet.',
        };
    }
    const supabase = await createSupabaseServerClient();
    const {data: user,} = await getUser();


    const {currency_id, budget} = validatedFields.data;

    if (!currency_id || !budget || !user?.id) {
        return {
            message: 'Error: Type string | undefined is not assignable to type string',
        };
    }

    const date = new Date().toISOString()

    const {data, error} = await supabase
        .from('wallet')
        .insert({
            currency_id: currency_id,
            budget: budget,
            user_id: user.id,
            created_at: date,
            updated_at: date
        })

    if (error) {
        console.error('Error creating wallet:', error)
        return {
            message: 'Error on creating wallet',
        };

    }

    revalidatePath('/');
    redirect('/');
    // redirect('/dashboard/invoices');
}

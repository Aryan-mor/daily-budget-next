import type {Database as DB} from './supabase'
import {getCurrencies} from "@/app/_api/currencies";

declare global {
    type Database = DB;
    type Wallet = DB['public']['Tables']['wallet']['Row']
    type Currency = DB['public']['Tables']['currency']['Row']
}

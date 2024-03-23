import type {Database as DB} from './supabase'

declare global{
    type Database = DB;
    type Wallet = DB['public']['Tables']['wallet']
}

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      category: {
        Row: {
          created_at: string
          id: number
          name: string
          user_id: string
          visibility: boolean
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string
          user_id?: string
          visibility?: boolean
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          user_id?: string
          visibility?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "public_category_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      currency: {
        Row: {
          code: string | null
          id: number
          label: string | null
          symbol: string | null
        }
        Insert: {
          code?: string | null
          id?: number
          label?: string | null
          symbol?: string | null
        }
        Update: {
          code?: string | null
          id?: number
          label?: string | null
          symbol?: string | null
        }
        Relationships: []
      }
      daily_budget: {
        Row: {
          created_at: string
          id: number
          price: number
          user_id: string
          wallet_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          price: number
          user_id: string
          wallet_id: number
        }
        Update: {
          created_at?: string
          id?: number
          price?: number
          user_id?: string
          wallet_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_daily_budget_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_daily_budget_wallet_id_fkey"
            columns: ["wallet_id"]
            isOneToOne: false
            referencedRelation: "wallet"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          first_name: string | null
          has_set_password: boolean
          id: string
          last_name: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          has_set_password?: boolean
          id: string
          last_name?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          has_set_password?: boolean
          id?: string
          last_name?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles2: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          first_name: string | null
          id: number
          last_name: string | null
          title: string | null
          updated_at: string | null
          user_id: string | null
          xx: boolean | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: number
          last_name?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
          xx?: boolean | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: number
          last_name?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
          xx?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "public_profiles2_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      test: {
        Row: {
          id: string
          text: string | null
        }
        Insert: {
          id: string
          text?: string | null
        }
        Update: {
          id?: string
          text?: string | null
        }
        Relationships: []
      }
      transaction: {
        Row: {
          category_id: number
          created_at: string
          id: number
          price: number
          wallet_id: number
        }
        Insert: {
          category_id: number
          created_at?: string
          id?: number
          price: number
          wallet_id: number
        }
        Update: {
          category_id?: number
          created_at?: string
          id?: number
          price?: number
          wallet_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_transaction_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_transaction_wallet_id_fkey"
            columns: ["wallet_id"]
            isOneToOne: false
            referencedRelation: "wallet"
            referencedColumns: ["id"]
          },
        ]
      }
      wallet: {
        Row: {
          budget: number
          created_at: string
          currency_id: number
          id: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          budget?: number
          created_at?: string
          currency_id: number
          id?: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          budget?: number
          created_at?: string
          currency_id?: number
          id?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_wallet_currency_id_fkey"
            columns: ["currency_id"]
            isOneToOne: false
            referencedRelation: "currency"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_wallet_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

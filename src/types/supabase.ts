export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      blogs: {
        Row: {
          author_id: string;
          content: string | null;
          excerpt: string | null;
          id: string;
          image_file: string | null;
          last_updated_at: string | null;
          published_at: string | null;
          slug: string | null;
          title: string | null;
        };
        Insert: {
          author_id: string;
          content?: string | null;
          excerpt?: string | null;
          id?: string;
          image_file?: string | null;
          last_updated_at?: string | null;
          published_at?: string | null;
          slug?: string | null;
          title?: string | null;
        };
        Update: {
          author_id?: string;
          content?: string | null;
          excerpt?: string | null;
          id?: string;
          image_file?: string | null;
          last_updated_at?: string | null;
          published_at?: string | null;
          slug?: string | null;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "blogs_author_id_fkey";
            columns: ["author_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      profiles: {
        Row: {
          handle: string | null;
          id: string;
        };
        Insert: {
          handle?: string | null;
          id: string;
        };
        Update: {
          handle?: string | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

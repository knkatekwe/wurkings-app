import { User } from './user.model';

export interface UserDocument {
  id: string;
  user_documents_title: string;
  user_documents_url: string;
  user_documents_type: string;
  user: User;//
  is_verified: string;
  created_at: string;
  updated_at: string;
}

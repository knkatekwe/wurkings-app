export class CommentListConfig{

  type: string;

  filters: {
    reviewee?: string,
    reviewer?: string,
    is_active?: number
  };

}

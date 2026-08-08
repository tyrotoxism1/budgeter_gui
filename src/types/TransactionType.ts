export type Transaction = {
  id: number;
  title: string;
  amount: number;
  date: Date;
  description: string;
  toBucketName: string;
  fromBucketName: string;
  tags: Array<string>;
};

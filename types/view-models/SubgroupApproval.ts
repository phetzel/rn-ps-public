export default interface SubgroupApproval {
  id: string;
  staticId: string;
  approvalRating: number;
  staticData: {
    name: string;
    category: string;
    [key: string]: any;
  };
}

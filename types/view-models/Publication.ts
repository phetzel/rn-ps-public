export default interface Publication {
  id: string;
  staticData: {
    name: string;
    description: string;
    politicalLeaning: string;
    [key: string]: any;
  };
  getApprovalRating: () => Promise<number>;
}

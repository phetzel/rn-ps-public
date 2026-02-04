export default interface CabinetMember {
  id: string;
  name: string;
  staticId: string;
  approvalRating: number;
  psRelationship: number;
  staticData: {
    cabinetName: string;
    [key: string]: any;
  };
}

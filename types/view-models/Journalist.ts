export default interface Journalist {
  id: string;
  staticId: string;
  psRelationship: number;
  staticData: {
    name: string;
    publicationStaticId: string;
    [key: string]: any;
  };
}

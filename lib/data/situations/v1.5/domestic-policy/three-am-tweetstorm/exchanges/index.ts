import { allPublicationsExchange } from "./allPublicationsExchange";
import { PublicationStaticId } from "~/types";

// The questions in this situation are generic enough that any publication could ask them.
// To create variety, we'll generate the exchange list dynamically.
export const threeAmTweetstormExchanges = [
  { ...allPublicationsExchange, publication: PublicationStaticId.LibPrimary },
  { ...allPublicationsExchange, publication: PublicationStaticId.ConPrimary },
  {
    ...allPublicationsExchange,
    publication: PublicationStaticId.Investigative,
  },
];

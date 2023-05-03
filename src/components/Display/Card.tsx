import Image from "next/image";
import type { CardData } from "~/interface";
import Uptrend from "./Badges/Uptrend";
import { isHighestOffer } from "~/functions";
import Text from "./Badges/Text";
import Business from "./Badges/Business";
import OfficialPage from "./Badges/OfficialPage";

const Card = ({ props }: { props: CardData }) => {
  return (
    <div className="mx-5 my-5">
      <div className="card-compact card h-52 w-48 bg-base-100 shadow-xl">
        <figure>
          <Image
            loader={() => "https://www.offeroptimist.com/" + props.imageUrl}
            src={"https://www.offeroptimist.com/" + props.imageUrl}
            width={500}
            height={500}
            alt={props.name}
            unoptimized
            priority
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.name.replace("Business", "")}</h2>
          <div className="card-actions justify-end ">
            {props.annualFee > 0 && <Text fee={`$${props.annualFee}`} />}
            {props.isBusiness && <Business />}
            {isHighestOffer(props.offers, props.historicalOffers) && (
              <Uptrend />
            )}
            {<OfficialPage url={props.url} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

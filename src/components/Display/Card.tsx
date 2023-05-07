import Image from "next/image";
import type { CardData } from "~/interface";
import Uptrend from "./Badges/Uptrend";
import { isHighestOffer } from "~/functions";
import Business from "./Badges/Business";
import OfficialPage from "./Badges/OfficialPage";
import Fee from "./Badges/Fee";
import { useContext } from "react";
import { AppData } from "~/context/AppData";

const Card = ({ props }: { props: CardData }) => {
  const { setCurrent } = useContext(AppData);
  const handleClick = () => {
    setCurrent(props);
  };
  return (
    <>
      <div className="mx-3 my-5" onClick={handleClick}>
        <label
          className="card-compact card btn h-52 w-52 flex-nowrap bg-base-100 px-0 shadow-xl"
          htmlFor="my-modal-4"
        >
          <figure>
            <Image
              loader={() => "https://www.offeroptimist.com/" + props.imageUrl}
              src={"https://www.offeroptimist.com/" + props.imageUrl}
              width={1000}
              height={500}
              alt={props.name}
              unoptimized
              priority
            />
          </figure>
          <div className="card-body justify-start ">
            <h2 className="card-title justify-center text-xs">
              {props.name.includes("Business") &&
              !props.name.includes("Delta") &&
              props.issuer.includes("American Express")
                ? props.name
                : props.name.replace("Business", "")}
            </h2>
            <div className="m-auto">
              {props.annualFee > 0 && <Fee fee={`$${props.annualFee}`} />}
              {isHighestOffer(props.offers, props.historicalOffers) && (
                <Uptrend />
              )}
              {props.isBusiness && <Business />}
              {<OfficialPage url={props.url} />}
            </div>
          </div>
        </label>
      </div>
    </>
  );
};
export default Card;

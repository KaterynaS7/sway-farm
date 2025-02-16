import { Dispatch, SetStateAction } from "react";
import BuySeeds from "./BuySeeds";
import SellItem from "./SellItem";
import { ContractAbi } from "../../contracts";

interface MarketModalProps {
  contract: ContractAbi | null;
  updatePageNum: () => void;
  items: number;
  setCanMove: Dispatch<SetStateAction<boolean>>;
}

export default function MarketModal({
  contract,
  updatePageNum,
  items,
  setCanMove,
}: MarketModalProps) {
  return (
    <div className="market-modal">
      <BuySeeds
        contract={contract}
        updatePageNum={updatePageNum}
        setCanMove={setCanMove}
      />
      {items > 0 && (
        <SellItem
          contract={contract}
          updatePageNum={updatePageNum}
          items={items}
          setCanMove={setCanMove}
        />
      )}
    </div>
  );
}

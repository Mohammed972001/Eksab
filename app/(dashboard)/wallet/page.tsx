import OpportunityOffers from "@/components/dashboard/wallet/OpportunityOffers";
import WalletHeader from "@/components/dashboard/wallet/WalletHeader";
import WinnersBouquets from "@/components/dashboard/wallet/WinnersBouquets";


const Page: React.FC = () => {
  return (
    <div className="w-full h-full pb-20">
   <WalletHeader />
   <OpportunityOffers/>
  <WinnersBouquets/>
    </div>
  );
};

export default Page;

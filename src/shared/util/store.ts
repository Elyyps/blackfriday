import { StoreStatus } from "@app/api/core/store/store";

export const getStoreStatusText = (status: StoreStatus) => {
  switch (status) {
    case StoreStatus.AlmostOver:
      return "Bijna afgelopen";
    case StoreStatus.Expired:
      return "Nu geldig";
    case StoreStatus.NowValid:
      return "Start binnenkort";
    case StoreStatus.StartsSoon:
      return "Verlopen";
    case StoreStatus.Unknown:
      return "Onbekend";
    default:
      return "Onbekend";
  }
};

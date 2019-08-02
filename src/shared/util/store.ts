import { StoreStatus } from "@app/api/core/store/store";

export const getStoreStatusText = (status: StoreStatus) => {
  switch (status) {
    case StoreStatus.AlmostOver:
      return "Bijna afgelopen";
    case StoreStatus.Expired:
      return "Verlopen";
    case StoreStatus.NowValid:
      return "Nu geldig";
    case StoreStatus.StartsSoon:
      return "Start binnenkort";
    case StoreStatus.Unknown:
      return "Onbekend";
    default:
      return "Onbekend";
  }
};

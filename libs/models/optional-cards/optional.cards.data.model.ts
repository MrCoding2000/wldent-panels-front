export interface OptionalCardsDataModel<T> {
  id: number,
  adImage: string,
  productName: string,
  adCode: string,
  adDate: string,
  adRejectDate?: string,
  adRejectReason?: string,
  detailsList: T
}

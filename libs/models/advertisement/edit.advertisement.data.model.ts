export interface EditAdvertisementDataModel {
  id: number,
  isExist: true,
  cost: number,
  existenceNumber: number,
  images: {id: number, src: string} [],
  name: string,
  code: string,
  date: string,
  questionNumbers: number,
  commentNumbers: number,
  rate: number,
  sellNumbers: number,
  isStock: boolean,
  videoNumbers: number
}

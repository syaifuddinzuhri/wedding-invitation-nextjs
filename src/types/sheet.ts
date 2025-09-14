export type Guest = {
  name: string;
  address: string;
};

export type SheetContextType = {
  data: Guest[];
};

export interface Greeting {
  id: string;
  name: string;
  comment: string;
  type: "hadir" | "tidak_hadir";
  createdAt: string;
}

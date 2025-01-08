import { create } from "zustand";

// TODO: разрулить с PizzaDTO
type CartItem = {
  id: number;
  category: number;
  name: string;
  img: string;
  ingridients: string;
  startPrice: number;
  quantity: number;
};

interface CartState {
  items: CartItem[];
  getTotalPrice: () => number;
  addItem: (newItem: Omit<CartItem, "quantity">) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  getTotalPrice: () =>
    get().items.reduce((acc, cur) => acc + cur.startPrice, 0),
  // TODO: сделать чтобы при наличии товара в корзине увеличивался его счетчик, а не добовлялся новый товар
  addItem: (newItem) => {
    const curItems = get().items;
    const existingItem = curItems.find((itm) => itm.id === newItem.id);

    if (existingItem) {
      set({
        items: curItems.map((itm) =>
          itm.id === newItem.id ? { ...itm, quantity: itm.quantity + 1 } : itm,
        ),
      });
    } else {
      set({ items: [...curItems, { ...newItem, quantity: 1 }] });
    }
  },
  clearCart: () => set({ items: [] }),
}));

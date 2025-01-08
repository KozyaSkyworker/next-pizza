import { create } from "zustand";

// TODO: разрулить с PizzaDTO
export type CartItem = {
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
  getTotals: () => { price: number; quantity: number };
  removeItem: (id: number) => void;
  updateQuantity: (id: number, type: "plus" | "minus") => void;
  addItem: (newItem: Omit<CartItem, "quantity">) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  getTotals: () => {
    const { items } = get();
    let price = 0;
    let quantity = 0;
    items.forEach(
      (itm) => (
        (price += itm.startPrice * itm.quantity), (quantity += itm.quantity)
      ),
    );
    return { price, quantity };
  },
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((itm) => itm.id !== id) })),
  updateQuantity: (id, type) =>
    set((state) => ({
      items: state.items.map((itm) => {
        if (itm.id === id) {
          return type === "plus"
            ? { ...itm, quantity: itm.quantity + 1 }
            : { ...itm, quantity: itm.quantity - 1 };
        }
        return itm;
      }),
    })),
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

import CartCounter from '@/app/dashboard/shopping-cart/components/CartCounter'

export const metadata = {
  title: "Counter Page",
  description: "Un simple contador",
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
     <CartCounter/>
    </div>
  );
}

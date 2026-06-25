"use client";

import Link from "next/link";
import { useMyOrders } from "@/hooks/orders/use-my-orders";

export default function MyOrdersPage() {
  const { data, isLoading } = useMyOrders();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold">My Orders</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {data?.map((order) => (
          <Link key={order.id} href={`/orders/my/${order.id}`}>
            <div className="rounded border p-4 hover:shadow-md transition-shadow">
              <p>Order #{order.id}</p>
              <p>userId: #{order.userId}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Total Price: ${order.totalPrice}</p>
              <p>Created At: {order.createdAt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

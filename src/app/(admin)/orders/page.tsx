"use client";

import Link from "next/link";
import { useOrders } from "@/hooks/orders/use-orders";
import dayjs from "dayjs";
import { useHandlePagination } from "@/hooks/shared/use-handle-pagination";
import { CustomPagination } from "@/components/shared/custom-pagination";

export default function OrdersPage() {
  const {limit, setPage, page} = useHandlePagination();
  const { data, isLoading } = useOrders({limit, page});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold">Orders</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {data.data.map((order) => (
          <Link key={order.id} href={`/orders/${order.id}`}>
            <div className="rounded border p-4 hover:shadow-md transition-shadow">
              <p>Order #{order.id}</p>
              <p>userId: #{order.userId}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Total Price: ${order.totalPrice}</p>
              <p>
                Created at: {dayjs(order.createdAt).format("DD/MM/YYYY HH:mm")}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <CustomPagination
        totalItems={data.count}
        itemsPerPage={limit}
        setCurrentPage={setPage}
        currentPage={page}
      />
    </div>
  );
}

import { useProduct } from "@/context/ProductContext";
import { useState } from "react";

const Delivery = () => {
  const { setShippingPrice } = useProduct();
  const [selectedDelivery, setSelectDelivery] = useState<string>("");

  const handleDeliveryChange = (deliveryType: string) => {
    setSelectDelivery(deliveryType); // Corrigido o nome da função

    if (deliveryType === 'standard') {
      setShippingPrice(4.99);
    } else if (deliveryType === 'express') {
      setShippingPrice(9.99);
    } else {
      setShippingPrice(0);
    }
  };

  return (
    <table className="mt-3">
      <thead>
        <tr>
          <th className="text-gray-400 font-normal text-left">ENTREGA</th>
          <th className="text-gray-400 font-normal text-left">DIAS</th>
          <th className="text-gray-400 font-normal text-left">VALOR</th>
        </tr>
      </thead>
      <tbody>
        <tr
          className={`hover:bg-gray-200 cursor-pointer mt-1 ${
            selectedDelivery === "standard" ? "bg-gray-300" : ""
          }`}
          onClick={() => handleDeliveryChange("standard")}
        >
          <td>Entrega padrão</td>
          <td>1-4 dias úteis</td>
          <td>R$ 4,99</td>
        </tr>

        <tr
          className={`hover:bg-gray-200 cursor-pointer mt-1 ${
            selectedDelivery === "express" ? "bg-gray-300" : ""
          }`}
          onClick={() => handleDeliveryChange("express")}
        >
          <td>Entrega Express</td>
          <td>24h</td>
          <td>R$ 9,99</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Delivery;

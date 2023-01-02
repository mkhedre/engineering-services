import endpoint from '@mongez/http';

// for dummy purpose only
type GetCheckoutType = {
  limit?: number;
  page?: number;
};
export const getCheckout = ({ limit = 10, page = 1 }: GetCheckoutType) =>
  endpoint.get('/checkout', {
    params: { limit, page },
  });

export const postEPay = (data: any) => endpoint.post('/e-pay', data);

export const getBankAccounts = () => endpoint.get('/bank-accounts');

export const initializeMadaPaymentService = (notes = '') =>
  endpoint.post('/orders', { paymentMethod: 'mada', notes });

export const initializeBankTransferPaymentService = (data: any) =>
  endpoint.post('/orders', data);

export function removeCoupon() {
  return endpoint.delete('/cart/coupon');
}

export const getCart = () => endpoint.get('/cart');

export const deleteCartItem = (item: string | number) =>
  endpoint.delete(`/cart/${item}/items`);

export const updateCartItem = (
  cart: string | number,
  quantity: number | string
) => endpoint.put(`/cart/${cart}/quantity`, { quantity });

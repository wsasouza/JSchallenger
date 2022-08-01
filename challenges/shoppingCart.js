/**
 *  Calcular o valor total do carrinho e retornar se o frete é grátis ou não.
 *  > Caso o valor total do carrinho seja maior que R$300,00 o frete é grátis.
 *  > Retornar 2 variáveis (totalPrice e isFreeShipping)
 */

const cart_products = [
  {
    product_id: 'RFA98B',
    product_name: 'Controle Remoto RFA',
    product_price: '49',
    product_qty: '5',
  },
  {
    product_id: 'SAM47B',
    product_name: 'Controle Remoto Smart TV Samsung',
    product_price: '89',
    product_qty: '2',
  },
  {
    product_id: 'LGE65B',
    product_name: 'Controle Remoto Smart TV LG',
    product_price: '35',
    product_qty: '4',
  },
  {
    product_id: 'SON10C',
    product_name: 'Controle Remoto Smart TV Sony Bravia',
    product_price: '99',
    product_qty: '1',
  },
  {
    product_id: 'PHI32Y',
    product_name: 'Controle Remoto Home Theather Philips',
    product_price: '25',
    product_qty: '2',
  },
];

const totalPrice = cart_products.reduce(
  (acc, { product_price, product_qty }) =>
    acc + Number(product_price * product_qty),
  0
);

let isFreeShipping = false;

if (totalPrice >= 300) {
  isFreeShipping = true;
}

console.log(totalPrice, isFreeShipping);

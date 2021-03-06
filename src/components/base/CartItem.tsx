import React, { useState } from 'react';
import styled from 'styled-components';
import QuantityPicker, { Props as QtyProps } from 'components/base/QuantityPicker';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .header {
    padding:${({ theme }) => theme.spacer * 2}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      color:${({ theme }) => theme.palette.primary};
      margin: 0;
    }

    .QuantityPicker{
      font-size: 2rem;
    }
  }

  .details {
    width: 100%;
    font-size: ${({ theme }) => theme.textSize.h4};

    .number {
      text-align: right;
    }
    .quantityPickerCell {
      text-align: center;      
    }
    td {
      padding:${({ theme }) => theme.spacer}px ${({ theme }) => theme.spacer * 2}px;
    }
    tfoot {
      td {
        border-top: 1px dotted ${({ theme }) => theme.palette.grey.normal};
        padding:${({ theme }) => theme.spacer * 1.5}px ${({ theme }) => theme.spacer * 2}px;
      }
      .number{
        font-weight: 900;
        font-size:1.8rem;
      }
    }
  }
  .itemPict {
    display: flex;
    justify-content: center;
  }
`;

export type Props = {
  className?: string;
  mode?: "compact" | "default";
  item: {
    name: string;
    quantity: number;
    unitPrice: number;
    shippingCost: number;
    percDiscount: number;
    picUrl: string;
    currency: "€" | "£";
  },
  onChange?(value: number): void;
}

function calcRoundedPerc(num: number, perc: number) {
  return Math.ceil(num * perc / 100);
}

function calcRoundedDiscount(num: number, perc: number) {
  return num - calcRoundedPerc(num, perc);
}

const Component: React.FC<Props> = ({ className, item, mode = 'default', onChange = () => null }: Props) => {
  const [quantity, setQuantity] = useState(1);

  function changeQty(value: number) {
    setQuantity(value)
    onChange(value);
  }

  const qtyOptions: QtyProps = {
    onChange: changeQty,
    initialQuantity: 1
  }

  const classes = ['CartItem']
  if (className) classes.push(className);

  const isCompact = mode === 'compact';

  return item ? (
    <Wrapper className={classes.join(' ')}>
      {!isCompact && (
        <div className="header">
          <h3>{item.name}</h3>
          <QuantityPicker {...qtyOptions} />
        </div>
      )}
      <div className='itemPict'>
        <img src={item.picUrl} alt={item.name} />
      </div>

      <table className="details">
        <tbody>
          {isCompact && (
            <tr>
              <td className='quantityPickerCell' colSpan={2}><QuantityPicker {...qtyOptions} /></td>
            </tr>
          )}
          <tr>
            <td>{item.name}</td>
            <td className='number'>{item.currency}{item.unitPrice * quantity}</td>
          </tr>

          <tr>
            <td>Shipping</td>
            <td className='number'>{item.currency}{item.shippingCost}</td>
          </tr>
          <tr>
            <td>Discount {item.percDiscount}&#37;</td>
            <td className='number'>- {item.currency}{calcRoundedPerc(item.unitPrice * quantity, item.percDiscount)}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td className='number'>{item.currency}{calcRoundedDiscount(item.unitPrice * quantity, item.percDiscount)}</td>
          </tr>
        </tfoot>
      </table>
    </Wrapper >
  ) : null
}

Component.displayName = 'CartItem'

export default Component
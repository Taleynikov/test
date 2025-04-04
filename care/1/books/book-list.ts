import { Good } from '../../../../../core-library/src/lib/component/shop-list/good.interface';
import { createGoodList } from '../../../../../core-library/src/lib/component/shop-list/adapter';

export const BOOK_LIST: Good[] = createGoodList([
    {
        label: 'Tattoos Identification',
        price: 1953
    },
    {
        label: 'Tattoo',
        price: 1953
    }
]);

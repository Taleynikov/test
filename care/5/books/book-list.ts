import { Good } from '../../../../../core-library/src/lib/component/shop-list/good.interface';
import { createGoodList } from '../../../../../core-library/src/lib/component/shop-list/adapter';

export const BOOK_LIST: Good[] = createGoodList([
    {
        label: 'Healthy Feet',
        price: 1953
    },
    {
        label: 'How To Make Your OWN Perfume',
        price: 2353
    }
]);

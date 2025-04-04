import { Good } from '../../../../../core-library/src/lib/component/shop-list/good.interface';
import { createGoodList } from '../../../../../core-library/src/lib/component/shop-list/adapter';

export const BOOK_LIST: Good[] = createGoodList([
    {
        label: 'Bath and Body Beauty',
        price: 1953
    },
    {
        label: 'Cosmetic Surgery - Is it For You',
        price: 2353
    },
    {
        label: 'Natural Cellulite Home Treatment',
        price: 4053
    }
]);

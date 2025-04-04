import { Good } from '../../../../../core-library/src/lib/component/shop-list/good.interface';
import { createGoodList } from '../../../../../core-library/src/lib/component/shop-list/adapter';

export const BOOK_LIST: Good[] = createGoodList([
    {
        label: 'Anti-Aging Made Easy',
        price: 1953
    },
    {
        label: 'Top 10 Skin Care Tips',
        price: 2353
    }
]);

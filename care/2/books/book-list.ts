import { Good } from '../../../../../core-library/src/lib/component/shop-list/good.interface';
import { createGoodList } from '../../../../../core-library/src/lib/component/shop-list/adapter';

export const BOOK_LIST: Good[] = createGoodList([
    {
        label: 'A Guide To Eyebrow Shaping',
        price: 1953
    },
    {
        label: 'Top Beauty Tips and Tricks',
        price: 2353
    }
]);

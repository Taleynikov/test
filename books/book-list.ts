import { createBookList } from '../../src/app/page/book-shop-page/data/adapter';
import { Category } from '../../src/app/shared/category-filter/category-list';

export const BOOK_LIST = createBookList([
    {
        label: 'All About Laptop Computer Parts',
        price: 1953,
        category: Category.IT
    },
    {
        label: 'Computer Components',
        price: 2353,
        category: Category.IT
    },
    {
        label: 'Computer Data Recovery Vol. 3',
        price: 4053,
        category: Category.IT
    }
]);

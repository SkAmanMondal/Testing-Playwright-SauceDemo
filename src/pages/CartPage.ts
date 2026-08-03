import {Page, Locator} from '@playwright/test';

import {BasePage} from './BasePage';

export class CartPage extends BasePage {
    readonly cartContainer: Locator;
    readonly cartItems: Locator;
    constructor(page: Page){
        super(page);
        this.cartContainer = page.locator('[data-test="cart-list"]');
        this.cartItems = page.locator('[data-test="inventory-item"]');
        
    }
}


import {Page, Locator} from '@playwright/test';

import {BasePage} from './BasePage';

export class CartPage extends BasePage {
    readonly cartContainer: Locator;
    readonly cartItems: Locator;
    readonly cartItemsNames: Locator;
    readonly cartItemsPrices: Locator;
    readonly continueShoppingButton: Locator;
    readonly checkoutButton: Locator;
    constructor(page: Page){
        super(page);
        this.page = page;
        this.cartContainer = page.locator('[data-test="cart-list"]');
        this.cartItems = page.locator('[data-test="inventory-item"]');
        this.cartItemsNames = page.locator('[data-test="inventory-item-name"]');
        this.cartItemsPrices = page.locator('[data-test="inventory-item-price"]');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }

    async removeProductFromCart(productName: string) {

        const removeButton = this.page.getByTestId( //to use any test id we have to set it through playwright.config.ts file, otherwise it will not work
            `remove-${productName.toLowerCase().replace(/\s+/g, "-")}`
        );
        await removeButton.click();
    }

    async continueShopping(){
        await this.continueShoppingButton.click();
    }

    async checkout(){
        await this.checkoutButton.click();
    }
}


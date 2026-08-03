import {Page, Locator} from '@playwright/test';
import {BasePage} from './BasePage';

export class InventoryPage extends BasePage {
    readonly inventoryContainer: Locator;
    readonly inventoryTitle: Locator;
    readonly inventoryItems: Locator;
    readonly inventoryItemsNames: Locator;
    readonly inventoryItemsPrices: Locator;
    readonly sortDropdown: Locator;
    readonly cartBadge: Locator;
    readonly cartIcon: Locator;
    constructor(page: Page){
        super(page);
        this.inventoryContainer = page.locator('[data-test="inventory-container"]');
        this.inventoryTitle = page.locator('.app_logo');
        this.inventoryItems = page.locator('[data-test="inventory-item"]');
        this.inventoryItemsNames = page.locator('[data-test="inventory-item-name"]');
        this.inventoryItemsPrices = page.locator('[data-test="inventory-item-price"]');
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
    }

    async sort(option: string){
        await this.sortDropdown.selectOption(option);
    }

    formatProductName(productName: string): string {
    return productName
        .toLowerCase()
        .replace(/\s+/g, "-");
    }

    async addProductToCart(productName: string){
        await this.page.locator(`[data-test="add-to-cart-${this.formatProductName(productName)}"]`).click();
    }

    async removeProductFromCart(productName: string){
        await this.page.locator(`[data-test="remove-${this.formatProductName(productName)}"]`).click();
    }

    async openCart(){
        await this.cartIcon.click();
    }

}
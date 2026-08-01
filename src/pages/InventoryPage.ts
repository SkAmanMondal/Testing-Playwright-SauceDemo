import {Page, Locator} from '@playwright/test';
import {BasePage} from './BasePage';

export class InventoryPage extends BasePage {
    readonly inventoryContainer: Locator;
    readonly inventoryTitle: Locator;
    readonly inventoryItems: Locator;
    readonly inventoryItemsNames: Locator;
    readonly inventoryItemsPrices: Locator;
    readonly sortDropdown: Locator;
    constructor(page: Page){
        super(page);
        this.inventoryContainer = page.locator('[data-test="inventory-container"]');
        this.inventoryTitle = page.locator('.app_logo');
        this.inventoryItems = page.locator('[data-test="inventory-item"]');
        this.inventoryItemsNames = page.locator('[data-test="inventory-item-name"]');
        this.inventoryItemsPrices = page.locator('[data-test="inventory-item-price"]');
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    }

    async sort(option: string){
        await this.sortDropdown.selectOption(option);
    }
}
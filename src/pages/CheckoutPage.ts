import {Page, Locator} from '@playwright/test';
import {BasePage} from './BasePage';

export class CheckoutPage extends BasePage {
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly errorMessage: Locator;
    readonly continueBtn: Locator;
    
    constructor(page: Page){
        super(page);
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[placeholder="Last Name"]');
        this.postalCode = page.locator('[placeholder="Zip/Postal Code"]');
        this.errorMessage = page.locator('[data-test="error"]');
        this.continueBtn = page.locator('[data-test="continue"]');
    }

    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);

        await this.continueBtn.click();
    }
}
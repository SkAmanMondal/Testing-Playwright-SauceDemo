import {Page, Locator} from '@playwright/test';
import {BasePage} from './BasePage';

export class CheckoutPage extends BasePage {
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly errorMessage: Locator;
    readonly continueBtn: Locator;
    readonly checkoutSummary: Locator;
    readonly finishBtn: Locator;
    readonly productNames: Locator;
    readonly paymentInfo: Locator;
    readonly shippingInfo: Locator;
    readonly itemTotal: Locator;
    readonly tax: Locator;
    readonly total: Locator;
    readonly completeHeader: Locator;
    readonly completeText: Locator;
    readonly backHomeBtn: Locator;
    
    constructor(page: Page){
        super(page);
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[placeholder="Last Name"]');
        this.postalCode = page.locator('[placeholder="Zip/Postal Code"]');
        this.errorMessage = page.locator('[data-test="error"]');
        this.continueBtn = page.locator('[data-test="continue"]');
        this.checkoutSummary = page.locator('[data-test="checkout-summary-container"]');
        this.finishBtn = page.locator('[data-test="finish"]');
        this.productNames = page.locator('[data-test="inventory-item-name"]');
        this.paymentInfo = page.locator('[data-test="payment-info-value"]');
        this.shippingInfo = page.locator('[data-test="shipping-info-value"]');
        this.itemTotal = page.locator('[data-test="subtotal-label"]');
        this.tax = page.locator('[data-test="tax-label"]');
        this.total = page.locator('[data-test="total-label"]');
        this.completeHeader = page.locator('[data-test="complete-header"]');
        this.completeText = page.locator('[data-test="complete-text"]');
        this.backHomeBtn = page.locator('[data-test="back-to-products"]');
    }

    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);

        await this.continueBtn.click();
    }

    async finishCheckout(){
        await this.finishBtn.click();
    }

    async backHome(){
        await this.backHomeBtn.click();
    }
}
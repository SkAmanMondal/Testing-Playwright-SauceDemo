import { test, expect } from "../../src/fixtures/baseFixtures";
import { env } from "../../src/config/env";
import {PRODUCTS} from "../../src/constants/products";
import {checkoutData} from "../../src/data/checkoutData";


test.describe("Checkout Module", () => {
  test.beforeEach(async ({ loginPage, page }) => {
    await loginPage.open();

    await loginPage.login(env.username, env.password);

    await expect(page).toHaveURL(/inventory/);

  });

  test("CHK-001 | Verify checkout information page opens", async({page, inventoryPage, cartPage, checkoutPage})=>{
    await inventoryPage.addProductToCart(PRODUCTS.BACKPACK);

    await inventoryPage.openCart();
    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one/);

    await expect(checkoutPage.firstName).toBeVisible();
    await expect(checkoutPage.lastName).toBeVisible();
    await expect(checkoutPage.postalCode).toBeVisible();

  });

  test("CHK-002 | Checkout with valid information", async({page, inventoryPage, cartPage, checkoutPage})=>{
    await inventoryPage.addProductToCart(PRODUCTS.BACKPACK);

    await inventoryPage.openCart();
    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one/);

    await checkoutPage.fillCheckoutInformation(checkoutData.validUser.firstName, checkoutData.validUser.lastName, checkoutData.validUser.postalCode);

    await expect(page).toHaveURL(/checkout-step-two/);
  });

  test("CHK-003 | Empty First Name", async({page, inventoryPage, cartPage, checkoutPage})=>{
    await inventoryPage.addProductToCart(PRODUCTS.BACKPACK);

    await inventoryPage.openCart();
    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one/);

    await checkoutPage.fillCheckoutInformation(checkoutData.emptyFirstName.firstName, checkoutData.emptyFirstName.lastName, checkoutData.emptyFirstName.postalCode);

    await expect(checkoutPage.errorMessage).toContainText("First Name is required");
  });
  
  test("CHK-004 | Empty Last Name", async({page, inventoryPage, cartPage, checkoutPage})=>{
    await inventoryPage.addProductToCart(PRODUCTS.BACKPACK);

    await inventoryPage.openCart();
    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one/);

    await checkoutPage.fillCheckoutInformation(checkoutData.emptyLastName.firstName, checkoutData.emptyLastName.lastName, checkoutData.emptyLastName.postalCode);

    await expect(checkoutPage.errorMessage).toContainText("Last Name is required");
  });

  test("CHK-005 | Empty Postal Code", async({page, inventoryPage, cartPage, checkoutPage})=>{
    await inventoryPage.addProductToCart(PRODUCTS.BACKPACK);

    await inventoryPage.openCart();
    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one/);

    await checkoutPage.fillCheckoutInformation(checkoutData.emptyPostalCode.firstName, checkoutData.emptyPostalCode.lastName, checkoutData.emptyPostalCode.postalCode);

    await expect(checkoutPage.errorMessage).toContainText("Postal Code is required");
  });
  
  test("CHK-006 | Verify checkout overview page", async({page, inventoryPage, cartPage, checkoutPage})=>{
    await inventoryPage.addProductToCart(PRODUCTS.BACKPACK);

    await inventoryPage.openCart();
    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one/);

    await checkoutPage.fillCheckoutInformation(checkoutData.validUser.firstName, checkoutData.validUser.lastName, checkoutData.validUser.postalCode);

    await expect(page).toHaveURL(/checkout-step-two/);
    
    await expect(checkoutPage.checkoutSummary).toBeVisible();

    await expect(checkoutPage.finishBtn).toBeVisible();

  });
  
  test("CHK-007 | Verify selected products are displayed", async({page, inventoryPage, cartPage, checkoutPage})=>{
    await inventoryPage.addProductToCart(PRODUCTS.BACKPACK);
    await inventoryPage.addProductToCart(PRODUCTS.BIKE_LIGHT);

    await inventoryPage.openCart();
    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one/);

    await checkoutPage.fillCheckoutInformation(checkoutData.validUser.firstName, checkoutData.validUser.lastName, checkoutData.validUser.postalCode);

    const products = await checkoutPage.productNames.allTextContents();

    expect(products).toEqual(
      expect.arrayContaining([
        PRODUCTS.BACKPACK,
        PRODUCTS.BIKE_LIGHT
      ])
    );

    expect(products).toHaveLength(2);
  });
  
  test("CHK-008 | Verify payment information", async({page, inventoryPage, cartPage, checkoutPage})=>{
    await inventoryPage.addProductToCart(PRODUCTS.BACKPACK);

    await inventoryPage.openCart();
    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one/);

    await checkoutPage.fillCheckoutInformation(checkoutData.validUser.firstName, checkoutData.validUser.lastName, checkoutData.validUser.postalCode);

    await expect(checkoutPage.paymentInfo).toHaveText("SauceCard #31337");
    await expect(checkoutPage.shippingInfo).toHaveText("Free Pony Express Delivery!");

  });
  
  test("CHK-009 | Verify shipping information", async({page, inventoryPage, cartPage, checkoutPage})=>{
    await inventoryPage.addProductToCart(PRODUCTS.BACKPACK);

    await inventoryPage.openCart();
    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one/);

    await checkoutPage.fillCheckoutInformation(checkoutData.validUser.firstName, checkoutData.validUser.lastName, checkoutData.validUser.postalCode);

    await expect(checkoutPage.shippingInfo).toHaveText("Free Pony Express Delivery!");
  });
  
  test("CHK-010 | Verify total price calculation", async({page, inventoryPage, cartPage, checkoutPage})=>{
    await inventoryPage.addProductToCart(PRODUCTS.BACKPACK);

    await inventoryPage.openCart();
    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one/);

    await checkoutPage.fillCheckoutInformation(checkoutData.validUser.firstName, checkoutData.validUser.lastName, checkoutData.validUser.postalCode);

    const itemTotal = Number((await checkoutPage.itemTotal.textContent())?.replace("Item total: $", ""));
    const tax = Number((await checkoutPage.tax.textContent())?.replace("Tax: $", ""));
    const total = Number((await checkoutPage.total.textContent())?.replace("Total: $", ""));

    expect(itemTotal + tax).toBeCloseTo(total);
  });
  
  test("CHK-011 | Finish checkout", async({page, inventoryPage, cartPage, checkoutPage})=>{
    await inventoryPage.addProductToCart(PRODUCTS.BACKPACK);

    await inventoryPage.openCart();
    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one/);

    await checkoutPage.fillCheckoutInformation(checkoutData.validUser.firstName, checkoutData.validUser.lastName, checkoutData.validUser.postalCode);

    await checkoutPage.finishCheckout();

    await expect(page).toHaveURL(/checkout-complete/);

  });
  
  test("CHK-012 | Verify order confirmation", async({page, inventoryPage, cartPage, checkoutPage})=>{
    await inventoryPage.addProductToCart(PRODUCTS.BACKPACK);

    await inventoryPage.openCart();
    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one/);

    await checkoutPage.fillCheckoutInformation(checkoutData.validUser.firstName, checkoutData.validUser.lastName, checkoutData.validUser.postalCode);

    await checkoutPage.finishCheckout();

    await expect(page).toHaveURL(/checkout-complete/);

    await expect(checkoutPage.completeHeader).toHaveText("Thank you for your order!");
    await expect(checkoutPage.completeText).toHaveText("Your order has been dispatched, and will arrive just as fast as the pony can get there!");

  });
  
  test("CHK-013 | Back Home navigation", async({page, inventoryPage, cartPage, checkoutPage})=>{
        await inventoryPage.addProductToCart(PRODUCTS.BACKPACK);

    await inventoryPage.openCart();
    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one/);

    await checkoutPage.fillCheckoutInformation(checkoutData.validUser.firstName, checkoutData.validUser.lastName, checkoutData.validUser.postalCode);

    await checkoutPage.finishCheckout();

    await expect(page).toHaveURL(/checkout-complete/);

    await checkoutPage.backHome();

    await expect(page).toHaveURL(/inventory/);

    await expect(inventoryPage.inventoryContainer).toBeVisible();
  });
  


});
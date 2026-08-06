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
    
  });
  
  test("CHK-007 | Verify selected products are displayed", async({page, inventoryPage, cartPage, checkoutPage})=>{
    
  });
  
  test("CHK-008 | Verify payment information", async({page, inventoryPage, cartPage, checkoutPage})=>{
    
  });
  
  test("CHK-009 | Verify shipping information", async({page, inventoryPage, cartPage, checkoutPage})=>{
    
  });
  
  test("CHK-010 | Verify total price calculation", async({page, inventoryPage, cartPage, checkoutPage})=>{
    
  });
  
  test("CHK-011 | Finish checkout", async({page, inventoryPage, cartPage, checkoutPage})=>{
    
  });
  
  test("CHK-012 | Verify order confirmation", async({page, inventoryPage, cartPage, checkoutPage})=>{
    
  });
  
  test("CHK-013 | Back Home navigation", async({page, inventoryPage, cartPage, checkoutPage})=>{
    
  });
  


});
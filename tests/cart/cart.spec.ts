import { test, expect } from "../../src/fixtures/baseFixtures";
import { env } from "../../src/config/env";
import {PRODUCTS} from "../../src/constants/products";


test.describe("Cart Module", () => {
  test.beforeEach(async ({ loginPage, page }) => {
    await loginPage.open();

    await loginPage.login(env.username, env.password);

    await expect(page).toHaveURL(/inventory/);
  });

  test("CART-001 | Verify cart page opens", async({page, inventoryPage, cartPage})=>{
    await inventoryPage.openCart();

    await expect(cartPage.cartContainer).toBeVisible();
  });

  test("CART-002 | Verify selected product is displayed", async({page, inventoryPage, cartPage})=>{
    
    await inventoryPage.addProductToCart(PRODUCTS.BACKPACK);

    await inventoryPage.openCart();

    await expect(cartPage.cartItems).toHaveCount(1);

    await expect(cartPage.cartItemsNames).toContainText(PRODUCTS.BACKPACK);
    
  });

  test("CART-003 | Verify multiple selected products are displayed", async({page, inventoryPage, cartPage})=>{
    
    await inventoryPage.addProductToCart(PRODUCTS.BACKPACK);
    await inventoryPage.addProductToCart(PRODUCTS.BIKE_LIGHT);
    await inventoryPage.addProductToCart(PRODUCTS.ONESIE);

    await inventoryPage.openCart();

    await expect(cartPage.cartItems).toHaveCount(3);

    const names = await cartPage.cartItemsNames.allTextContents();

    expect(names).toEqual(
      expect.arrayContaining([
        PRODUCTS.BACKPACK,
        PRODUCTS.BIKE_LIGHT,
        PRODUCTS.ONESIE
      ])
    );
    
  });

  test("CART-004 | Verify product name", async({page, inventoryPage, cartPage})=>{
    
    await inventoryPage.addProductToCart(PRODUCTS.BACKPACK);
    await inventoryPage.addProductToCart(PRODUCTS.ONESIE);

    await inventoryPage.openCart();

    await expect(cartPage.cartItems).toHaveCount(2);

    const names = await cartPage.cartItemsNames.allTextContents();

    expect(names.length).toBeGreaterThan(0);

    for(const name of names){
      expect(name.trim()).not.toBe("");
    }
  });

  test("CART-005 | Verify product price", async({page, inventoryPage, cartPage})=>{
    
    await inventoryPage.addProductToCart(PRODUCTS.BACKPACK);
    await inventoryPage.addProductToCart(PRODUCTS.ONESIE);

    await inventoryPage.openCart();

    await expect(cartPage.cartItems).toHaveCount(2);

    const prices = await cartPage.cartItemsPrices.allTextContents();

    expect(prices.length).toBeGreaterThan(0);

    for(const price of prices){
      expect(price).toMatch(/^\$\d+\.\d{2}$/);
    }
  });

  test("CART-006 | Remove product from cart", async({page, inventoryPage, cartPage})=>{
    
    await inventoryPage.addProductToCart(PRODUCTS.BACKPACK);

    await inventoryPage.openCart();

    await expect(cartPage.cartItems).toHaveCount(1);

    await cartPage.removeProductFromCart(PRODUCTS.BACKPACK);

    await expect(cartPage.cartItems).toHaveCount(0);
    
  });

  test("CART-007 | Continue Shopping", async({page, inventoryPage, cartPage})=>{
    
    await inventoryPage.addProductToCart(PRODUCTS.FLEECE_JACKET);

    await inventoryPage.openCart();

    await expect(cartPage.cartItems).toHaveCount(1);

    await cartPage.continueShopping();

    await expect(page).toHaveURL(/inventory/);
    
  });

  test("CART-008 | Checkout button navigation", async({page, inventoryPage, cartPage})=>{
    
    await inventoryPage.addProductToCart(PRODUCTS.RED_TSHIRT);

    await inventoryPage.openCart();

    await expect(cartPage.cartItems).toHaveCount(1);

    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one/);
    
  });

  test("CART-009 | Verify empty cart", async({page, inventoryPage, cartPage})=>{

    await inventoryPage.openCart();

    await expect(cartPage.cartItems).toHaveCount(0);
    
  });



});
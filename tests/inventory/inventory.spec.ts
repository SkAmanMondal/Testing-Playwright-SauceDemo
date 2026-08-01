import { test, expect } from "../../src/fixtures/baseFixtures";
import { env } from "../../src/config/env";

test.describe("Inventory Module", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();

    await loginPage.login(env.username, env.password);
  });

  test("INV-001 | Verify user is redirected to Inventory page after login", async ({
    page,
    inventoryPage,
  }) => {
    await expect(page).toHaveURL(/inventory/);

    await expect(inventoryPage.inventoryContainer).toBeVisible();
  });

  test("INV-002 | Verify inventory page title", async ({
    page,
    inventoryPage,
  }) => {
    await expect(page).toHaveURL(/inventory/);

    await expect(inventoryPage.inventoryTitle).toContainText("Swag Labs");
  });

  test("INV-003 | Verify all products are displayed", async ({
    page,
    inventoryPage,
  }) => {
    await expect(page).toHaveURL(/inventory/);

    await expect(inventoryPage.inventoryItems).toHaveCount(6);
  });

  test("INV-004 | Verify each product has a name", async ({
    page,
    inventoryPage,
  }) => {
    await expect(page).toHaveURL(/inventory/);

    const productsNames =
      await inventoryPage.inventoryItemsNames.allTextContents();

    await expect(productsNames.length).toBeGreaterThan(0);

    for (const productName of productsNames) {
      await expect(productName).not.toBe("");
    }
  });

  test("INV-005 | Verify each product has a price", async ({
    page,
    inventoryPage,
  }) => {
    await expect(page).toHaveURL(/inventory/);

    const productsPrices =
      await inventoryPage.inventoryItemsPrices.allTextContents();

    await expect(productsPrices.length).toBeGreaterThan(0);

    for (const productPrice of productsPrices) {
      await expect(productPrice).not.toBe("");
    }
  });

  test("INV-006 | Sort products A → Z", async ({
    page,
    inventoryPage,
  }) => {
    await expect(page).toHaveURL(/inventory/);

    await inventoryPage.sort("az");

    const names = await inventoryPage.inventoryItemsNames.allTextContents();

    const expectedNames = [...names].sort();

    await expect(names).toEqual(expectedNames);
  });

  test("INV-007 | Sort products Z → A", async ({
    page,
    inventoryPage,
  }) => {
    await expect(page).toHaveURL(/inventory/);

    await inventoryPage.sort("za");

    const names = await inventoryPage.inventoryItemsNames.allTextContents();

    const expectedNames = [...names].sort().reverse();

    await expect(names).toEqual(expectedNames);
  });

  test("INV-008 | Sort products Low → High", async ({
    page,
    inventoryPage,
  }) => {
    await expect(page).toHaveURL(/inventory/);

    await inventoryPage.sort("lohi");

    const prices = await inventoryPage.inventoryItemsPrices.allTextContents();

    const actualPrices = prices.map((price) => Number(price.replace("$", "")));

    const expectedPrices = [...actualPrices].sort((a, b) => a - b);

    await expect(actualPrices).toEqual(expectedPrices);
  });

  test("INV-009 | Sort products High → Low", async ({
    page,
    inventoryPage,
  }) => {
    await expect(page).toHaveURL(/inventory/);

    await inventoryPage.sort("hilo");

    const prices = await inventoryPage.inventoryItemsPrices.allTextContents();

    const actualPrices = prices.map((price) => Number(price.replace("$", "")));

    const expectedPrices = [...actualPrices].sort((a, b) => b - a);

    await expect(actualPrices).toEqual(expectedPrices);
  });

  test.only("INV-010 | Add single product to cart", async ({
    page,
    inventoryPage,
  }) => {
    await expect(page).toHaveURL(/inventory/);

    await inventoryPage.sort("hilo");

    const prices = await inventoryPage.inventoryItemsPrices.allTextContents();

    const actualPrices = prices.map((price) => Number(price.replace("$", "")));

    const expectedPrices = [...actualPrices].sort((a, b) => b - a);

    await expect(actualPrices).toEqual(expectedPrices);
  });



});

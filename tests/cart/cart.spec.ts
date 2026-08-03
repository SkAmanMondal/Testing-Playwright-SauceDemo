import { test, expect } from "../../src/fixtures/baseFixtures";
import { env } from "../../src/config/env";


test.describe("Inventory Module", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();

    await loginPage.login(env.username, env.password);
  });

  test.only("", async({page, cartPage})=>{
    
  });

});
import { test, expect } from '../../src/fixtures/baseFixtures';
import { env } from "../../src/config/env";

test('Valid Login', async ({ page, loginPage }) => {


  await loginPage.open();

  await loginPage.login(
    env.username!,
    env.password!
  );

  await expect(page).toHaveURL(/inventory/);

});
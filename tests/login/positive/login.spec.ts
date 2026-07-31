import {test, expect} from '../../../src/fixtures/baseFixtures';
import { loginData } from '../../../src/data/loginData';



test('LGN-001 | Login with valid credentials', async ({ page, loginPage }) => {

  await loginPage.open();

  await loginPage.login(
    loginData.validUser.username!,
    loginData.validUser.password!
  );

  await expect(page).toHaveURL(/inventory/);

});

test('LGN-009 | Verify password field is masked', async ({ page, loginPage }) => {

  await loginPage.open();

    await expect(loginPage.passwordInput).toHaveAttribute(
        "type",
        "password"
    );

});

test('LGN-010 | Verify page title', async ({ page, loginPage }) => {

  await loginPage.open();

    await expect(loginPage.loginLogo).toContainText("Swag Labs");

});

test('LGN-011 | Verify login logo is displayed', async ({ page, loginPage }) => {

  await loginPage.open();

    await expect(loginPage.loginLogo).toBeVisible();

});

import {test, expect} from '../../../src/fixtures/baseFixtures';
import { loginData } from '../../../src/data/loginData';




test('LGN-002 | Login with invalid username', async ({page, loginPage})=>{
    await loginPage.open();

    await loginPage.login(
        loginData.invalidUsername.username!,
        loginData.invalidUsername.password!
    );

    
    await expect(loginPage.errorMessage).toContainText(
        "Username and password do not match"
    );
    await expect(page).not.toHaveURL(/inventory/);

});

test('LGN-003 | Login with invalid password', async ({page, loginPage})=>{
    await loginPage.open();

    await loginPage.login(
        loginData.invalidPassword.username!,
        loginData.invalidPassword.password!
    );

    
    await expect(loginPage.errorMessage).toContainText(
        "Username and password do not match"
    );
    await expect(page).not.toHaveURL(/inventory/);

});

test('LGN-004 | Login with invalid username & password', async ({page, loginPage})=>{
    await loginPage.open();

    await loginPage.login(
        loginData.invalidCredentials.username!,
        loginData.invalidCredentials.password!
    );

    
    await expect(loginPage.errorMessage).toContainText(
        "Username and password do not match"
    );
    await expect(page).not.toHaveURL(/inventory/);

});

test('LGN-005 | Login with empty username', async ({page, loginPage})=>{
    await loginPage.open();

    await loginPage.login(
        loginData.emptyUsername.username!,
        loginData.emptyUsername.password!
    );

    
    await expect(loginPage.errorMessage).toContainText(
        "Epic sadface: Username is required"
    );
    await expect(page).not.toHaveURL(/inventory/);

});

test('LGN-006 | Login with empty password', async ({page, loginPage})=>{
    await loginPage.open();

    await loginPage.login(
        loginData.emptyPassword.username!,
        loginData.emptyPassword.password!
    );

    
    await expect(loginPage.errorMessage).toContainText(
        "Epic sadface: Password is required"
    );
    await expect(page).not.toHaveURL(/inventory/);

});

test('LGN-007 | Login with empty username & password', async ({page, loginPage})=>{
    await loginPage.open();

    await loginPage.login(
        loginData.emptyCredentials.username!,
        loginData.emptyCredentials.password!
    );

    
    await expect(loginPage.errorMessage).toContainText(
        "Epic sadface: Username is required"
    );
    await expect(page).not.toHaveURL(/inventory/);

});

test('LGN-008 | Login with locked out user', async ({page, loginPage})=>{
    await loginPage.open();

    await loginPage.login(
        loginData.lockedUser.username!,
        loginData.lockedUser.password!
    );

    
    await expect(loginPage.errorMessage).toContainText(
        "Epic sadface: Sorry, this user has been locked out."
    );
    await expect(page).not.toHaveURL(/inventory/);

});
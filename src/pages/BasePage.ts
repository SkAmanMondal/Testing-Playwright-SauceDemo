import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async getTitle() {
    return await this.page.title();
  }

  async getUrl() {
    return this.page.url();
  }

  async click(locator: Locator) {
    await locator.click();
  }

  async fill(locator: Locator, text: string) {
    await locator.fill(text);
  }

  async type(locator: Locator, text: string) {
    await locator.pressSequentially(text);
  }

  async getText(locator: Locator) {
    return await locator.textContent();
  }

  async isVisible(locator: Locator) {
    return await locator.isVisible();
  }

  async waitForVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }
}
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  const consentButton = page.getByRole('button', { name: 'Zgadzam się' });
  if (await consentButton.isVisible().catch(() => false)) {
    await consentButton.click();
  }
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('TestLogin');
  await page.getByRole('textbox', { name: 'Name' }).press('Tab');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('testmail@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('TestLogin2312038213');
  await page.locator('form').filter({ hasText: 'Email Address already exist!' }).getByPlaceholder('Email Address').fill('testmail21321312313@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).fill('testtest12312331$%#@');
  await page.locator('#days').selectOption('2');
  await page.locator('#months').selectOption('9');
  await page.locator('#years').selectOption('2016');
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).fill('firstname');
  await page.getByRole('textbox', { name: 'Last name *' }).fill('lastname');
  await page.getByRole('textbox', { name: 'Company', exact: true }).click();
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('company');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('adree 1');
  await page.getByRole('textbox', { name: 'Address 2' }).fill('adress 2');
  await page.getByRole('textbox', { name: 'State *' }).fill('state');
  await page.getByLabel('Country *').selectOption('United States');
  await page.getByRole('textbox', { name: 'State *' }).click();
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('city');
  await page.locator('#zipcode').fill('312312');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('131232132');
  await page.goto('https://www.automationexercise.com/account_created');
  await page.getByText('Account Created!').click();
  await page.getByText('Congratulations! Your new').click();
  await page.getByText('You can now take advantage of').click();
});
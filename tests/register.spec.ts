import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  // Handle Polish or English consent dialogs if present
  // DODAĆ TAKŻE OBSŁUGĘ INNYCH JĘZYKÓW, najlepiej wszystkich po DOM i zrobic z tego modul bo bede tego raczej uzywal w roznych testach
  
  const consentButtonPl = page.getByRole('button', { name: 'Zgadzam się' });
  const consentButtonEn = page.getByRole('button', { name: 'Consent' });
  if (await consentButtonPl.isVisible()) {
    await consentButtonPl.click();
  } else if (await consentButtonEn.isVisible()) {
    await consentButtonEn.click();
  }
  await page.getByRole('heading', { name: 'AutomationExercise' }).click();
  await page.getByRole('link', { name: 'Website for automation' }).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('heading', { name: 'New User Signup!' }).click();
  // await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('namegenearte66665');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('newusrgmail232312451@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByText('Enter Account Information').click();
  await page.getByRole('radio', { name: 'Mr.' }).check();
  // await page.getByRole('textbox', { name: 'Name *', exact: true }).click();
  await page.getByRole('textbox', { name: 'Name *', exact: true }).fill('namegenearte66665test');
  // await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).fill('testpassword2234');
  await page.locator('#days').selectOption('2');
  await page.locator('#months').selectOption('4');
  await page.locator('#years').selectOption('2012');
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  // await page.getByRole('textbox', { name: 'First name *' }).click();
  await page.getByRole('textbox', { name: 'First name *' }).fill('FirstNameTest');
  // await page.getByRole('textbox', { name: 'First name *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last name *' }).fill('LastNameTest');
  // await page.getByRole('textbox', { name: 'Last name *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('CompanyNameTest');
  // await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).click();
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('TestAdress 1');
  // await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).press('Tab');
  await page.getByRole('textbox', { name: 'Address 2' }).fill('TestAdress 2');
  await page.getByLabel('Country *').selectOption('United States');
  // await page.getByRole('textbox', { name: 'State *' }).click();
  await page.getByRole('textbox', { name: 'State *' }).fill('TestState');
  // await page.getByRole('textbox', { name: 'City * Zipcode *' }).click();
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('TestCity');
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).press('Tab');
  await page.locator('#zipcode').fill('20292');
  // await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('1234567');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByText('Account Created!').click();
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.getByText('Logged in as').click();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await page.getByText('Account Deleted!').click();
  await page.getByRole('link', { name: 'Continue' }).click();
});
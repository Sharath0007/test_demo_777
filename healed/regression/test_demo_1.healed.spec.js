const { test, expect } = require('../../fixtures/walker_fixture.js');
import testData from '../../test-data.json';

test("Test case id: TC-0119 - create new product item via sidebar  @regression", async ({ page }) => {
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  const signInWithEmailButton = page.locator("xpath=//button[@data-cy='btnLoginVisible']");
  await expect(signInWithEmailButton).toBeEnabled();
  await signInWithEmailButton.click();

  const emailInput = page.locator("xpath=//input[@name='email']");
  await expect(emailInput).toBeEditable();
  await emailInput.fill(testData.email);

  const passwordInput = page.locator("xpath=//input[@name='password']");
  await expect(passwordInput).toBeEditable();
  await passwordInput.fill(testData.password);

  const signInWithEmailButtonAfterCredentials = page.getByRole('button', { name: 'Sign in with Email' });
  await expect(signInWithEmailButtonAfterCredentials).toBeEnabled();
  await signInWithEmailButtonAfterCredentials.click();

  const itemsSidebarButton = page.locator("xpath=//nav[@data-cy='sidebarDesktop']//button[contains(concat(' ', normalize-space(@class), ' '), ' overflow-hidden ') and normalize-space(.)='Items']");
  await expect(itemsSidebarButton).toBeEnabled();
  await itemsSidebarButton.click();

  const productItemsLink = page.getByRole('link', { name: 'Product Items' });
  await expect(productItemsLink).toBeEnabled();
  await productItemsLink.click();

  const newProductItemLink = page.getByRole('link', { name: 'New Product Item' });
  await expect(newProductItemLink).toBeEnabled();
  await newProductItemLink.click();

  const selectCustomerButton = page.getByRole('button', { name: 'Select Customer' });
  await expect(selectCustomerButton).toBeEnabled();
  await selectCustomerButton.click();

  const customerRadioInput = page.locator("xpath=//input[@id='radio.input.1000']");
  await expect(customerRadioInput).toBeEnabled();
  await customerRadioInput.click();

  const continueButton = page.getByRole('button', { name: 'Continue' });
  await expect(continueButton).toBeEnabled();
  await continueButton.click();

  const selectProductClassTextbox = page.getByRole('textbox', { name: 'Select a Product Class' });
  await expect(selectProductClassTextbox).toBeEnabled();
  await selectProductClassTextbox.click();

  const blankLabelOption = page.locator("xpath=//input[@name='deliverableItem.product_class_id']/following::li[@data-label='Blank Label']");
  await expect(blankLabelOption).toBeEnabled();
  await blankLabelOption.click();

  const customerPartNumberInput = page.locator("xpath=//input[@name='productItemExtension.customer_part_number']");
  await expect(customerPartNumberInput).toBeEditable();
  await customerPartNumberInput.fill(testData.productItemExtensionCustomerPartNumber);

  const brandNameInput = page.locator("xpath=//input[@name='productItemExtension.brand_name']");
  await expect(brandNameInput).toBeEditable();
  await brandNameInput.fill(testData.productItemExtensionBrandName);

  const maxRollDiameterInput = page.locator("xpath=//input[@name='maxRollDiameter']");
  await expect(maxRollDiameterInput).toBeEditable();
  await maxRollDiameterInput.fill(testData.maxRollDiameter);

  const substrateTextInput = page.locator("xpath=//input[@name='productItemExtension.substrate_text']");
  await expect(substrateTextInput).toBeEditable();
  await substrateTextInput.fill(testData.enterSubstrate);

  const enterCoatingTextbox = page.getByRole('textbox', { name: 'Enter Coating' });
  await expect(enterCoatingTextbox).toBeEnabled();
  await enterCoatingTextbox.click();

  const coatingTypeOption = page.locator("xpath=//input[@name='specification.coating_type_valuelist_option_id']/following::li[@data-value='117']");
  await expect(coatingTypeOption).toBeEnabled();
  await coatingTypeOption.click();

  const selectCoreDiameterTextbox = page.getByRole('textbox', { name: 'Select a Core Diameter' });
  await expect(selectCoreDiameterTextbox).toBeEnabled();
  await selectCoreDiameterTextbox.click();

  const coreDiameterOption = page.locator("xpath=//input[@name='specification.core_diameter_id']/following::li[@data-label='.75']");
  await expect(coreDiameterOption).toBeEnabled();
  await coreDiameterOption.click();

  const selectUnwindTextbox = page.getByRole('textbox', { name: 'Select an Unwind' });
  await expect(selectUnwindTextbox).toBeEnabled();
  await selectUnwindTextbox.click();

  const unwindDirectionOption = page.locator("xpath=//input[@name='specification.wind_direction_id']/following::li[@data-label='1 - Print out, Head first.']");
  await expect(unwindDirectionOption).toBeEnabled();
  await unwindDirectionOption.click();

  const enterLaminateTextbox = page.getByRole('textbox', { name: 'Enter Laminate' });
  await expect(enterLaminateTextbox).toBeEnabled();
  await enterLaminateTextbox.click();

  const laminateTypeOption = page.locator("xpath=//input[@name='specification.laminate_type_valuelist_option_id']/following::li[@data-value='90']");
  await expect(laminateTypeOption).toBeEnabled();
  await laminateTypeOption.click();

  const selectSalesUnitTextbox = page.getByRole('textbox', { name: 'Select a Sales Unit' });
  await expect(selectSalesUnitTextbox).toBeEnabled();
  await selectSalesUnitTextbox.click();

  const salesUnitOption = page.locator("xpath=//input[@name='item.sales_unit_id']/following::li[@data-label='Inches']");
  await expect(salesUnitOption).toBeEnabled();
  await salesUnitOption.click();

  const quantityInSalesUomInput = page.locator("xpath=//input[@name='item.quantity_in_sales_uom']");
  await expect(quantityInSalesUomInput).toBeEditable();
  await quantityInSalesUomInput.fill(testData.itemQuantityInSalesUom);

  const deliverableItemDescriptionTextarea = page.locator("xpath=//textarea[@id='deliverableItem.description']");
  await expect(deliverableItemDescriptionTextarea).toBeEditable();
  await deliverableItemDescriptionTextarea.fill(testData.deliverableItemDescription);

  const cOfCRequiredCheckbox = page.getByRole('checkbox', { name: 'C of C Required' });
  await expect(cOfCRequiredCheckbox).toBeEnabled();
  await cOfCRequiredCheckbox.click();

  const selectCategoryTextbox = page.getByRole('textbox', { name: 'Select a category' });
  await expect(selectCategoryTextbox).toBeEnabled();
  await selectCategoryTextbox.click();

  const filmCategoryOption = page.locator("xpath=//input[@name='productItemExtension.product_item_category']/following::li[@data-label='Film']");
  await expect(filmCategoryOption).toBeEnabled();
  await filmCategoryOption.click();

  const createButton = page.getByRole('button', { name: 'Create' });
  await expect(createButton).toBeEnabled();
  await createButton.click();

});

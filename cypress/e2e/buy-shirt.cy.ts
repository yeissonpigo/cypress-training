import * as pom from "../page/index";

const menuContentPage = new pom.MenuContentPage();
const productsListPage = new pom.ProductsListPage();
const shopingCartPage = new pom.ShopingCartPage();
const loginPage = new pom.LoginPage();
const addressStepPage = new pom.AddressStepPage();
const shippingStepPage = new pom.ShippingStepPage();
const paymentStepPage = new pom.PaymentStepPage();
const confirmationPage = new pom.ConfirmationPage();

describe("Buy a t-shirt", () => {
  it("finds t-shirt button and clicks on it", ()=>{
    // Arrange
    const expectedAnswer = "Your order on My Store is complete.";
    const assertType = "have.text";
    menuContentPage.visitMenuContentPage();

    // Act
    menuContentPage.goToTShirtMenu();
    productsListPage.addToCart(1);
    shopingCartPage.clickProceed();
    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");
    addressStepPage.clickOnCheckout();
    shippingStepPage.clickCheckbox();
    shippingStepPage.checkoutFun();
    paymentStepPage.clickOnSelectPaymentMethod();
    paymentStepPage.clickOnConfirmOrder();

    // Assert
    confirmationPage.checksConfirmation(expectedAnswer, assertType);
  });
});

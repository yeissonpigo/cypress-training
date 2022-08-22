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
    
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productsListPage.addToCart(1);
    shopingCartPage.clickProceed();
    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");
    addressStepPage.checkout();
    shippingStepPage.clickCheckbox();
    shippingStepPage.checkoutFun();
    paymentStepPage.selectPaymentMethod();
    paymentStepPage.confirmOrderFun();
    confirmationPage.checksConfirmation();
  });
});

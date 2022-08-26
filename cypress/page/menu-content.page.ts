class MenuContentPage {
    private tShirtButton: string
    private menuContentPageUrl: string

    constructor(){
        this.tShirtButton = "#block_top_menu > ul > li > a[title='T-shirts']"
        this.menuContentPageUrl = "http://automationpractice.com/"
    }

    //Page elements

    public tShirtButtonFun() {
        return cy.get(this.tShirtButton)
    }

    //Page actions
    public visitMenuContentPage() {
        cy.visit(this.menuContentPageUrl)
    }

    public goToTShirtMenu() {
        this.tShirtButtonFun().click()
    }
}

export {MenuContentPage}

class MenuContentPage {
    private tShirtButton: string
    private menuContentPageUrl: string

    constructor(){
        this.tShirtButton = "#block_top_menu > ul > li > a[title='T-shirts']"
        this.menuContentPageUrl = "http://automationpractice.com/"
    }

    public visitMenuContentPage() {
        cy.visit(this.menuContentPageUrl)
    }

    public goToTShirtMenu() {
        cy.get(this.tShirtButton).click()
    }
}

export {MenuContentPage}

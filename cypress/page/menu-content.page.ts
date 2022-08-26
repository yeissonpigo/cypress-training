class MenuContentPage {
    private tShirtButton: string
    private menuContentPageUrl: string

    constructor(){
        this.tShirtButton = "#block_top_menu > ul > li:nth-child(3) > a"
        this.menuContentPageUrl = "http://automationpractice.com/"
    }

    public visitMenuContentPage() {
        cy.visit(this.menuContentPageUrl)
    }

    public TShirtMenu() {
        return this.tShirtButton
    }
}

export {MenuContentPage}

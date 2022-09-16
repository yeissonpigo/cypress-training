class IFramePage {

    private baseUrl: string
    private cssUrl: string
    private selectorIFrame: string
    private selectorIFrameTitle: string
    private selectorIFrameCssButton: string

    constructor() {
        this.baseUrl = "https://www.w3schools.com/html/html_iframe.asp"
        this.cssUrl = "https://www.w3schools.com/css/default.asp"
        this.selectorIFrame = "#main > div > iframe[title='W3Schools HTML Tutorial']"
        this.selectorIFrameTitle = "#main h1"
        this.selectorIFrameCssButton = "[title='CSS Tutorial']"
    }

    visit() {
        cy.visit(this.baseUrl)
    }

    getFrameTitle(titleExpected: string) {
        cy.iframe(this.selectorIFrame).find(this.selectorIFrameTitle).should('have.text', titleExpected)
    }

    goToCssPageInFrame(titleExpected: string) {
        cy.iframe(this.selectorIFrame).find(this.selectorIFrameCssButton).click()
        cy.frameLoaded(this.selectorIFrame, {
            url: this.cssUrl,
        });
        cy.iframe(this.selectorIFrame).find(this.selectorIFrameTitle).should('have.text', titleExpected)
    }

}
export { IFramePage }

class UploadPage {

    private baseUrl: string
    private selectorFileUploadButton: string
    private selectorForm: string
    private selectorUploadedFilesText: string

    constructor() {
        this.baseUrl = "https://the-internet.herokuapp.com/upload"
        this.selectorFileUploadButton = "#file-upload"
        this.selectorForm = "form"
        this.selectorUploadedFilesText = "#uploaded-files:contains('example.json')"
    }

    visitPage() {
        cy.visit(this.baseUrl)
    }

    uploadFile(fileLocation: string) {
        cy.get(this.selectorFileUploadButton).attachFile(fileLocation)
        cy.get(this.selectorForm).submit()
    }

    checkUploadedFileName(expectedResult: string) {
        cy.get(this.selectorUploadedFilesText).should('be.visible')
    }
}
export { UploadPage }

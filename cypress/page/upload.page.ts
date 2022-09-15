class UploadPage {

    private baseUrl: string
    private selectorFileUploadButton: string
    private selectorForm: string
    private selectorUploadedFilesText: string

    constructor() {
        this.baseUrl = "https://the-internet.herokuapp.com/upload"
        this.selectorFileUploadButton = "#file-upload-button"
        this.selectorForm = "form"
        this.selectorUploadedFilesText = "#upload-files"
    }

    visitPage() {
        cy.visit(this.baseUrl)
    }

    uploadFile(fileLocation: string) {
        cy.get(this.selectorFileUploadButton).attachFile(fileLocation)
        cy.get(this.selectorForm).submit()
    }

    checkUploadedFileName(expectedResult: string) {
        cy.get(this.selectorUploadedFilesText).should('have.text', expectedResult)
    }
}

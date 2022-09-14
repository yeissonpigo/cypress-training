class PracticeFormPage {

    private selectorParentStateDropdown = ".css-1wa3eu0-placeholder:contains('Select State')"
    private selectorParentCityDropdown = ".css-1wa3eu0-placeholder:contains('Select City')"
    private selectorFirstNameInput = "#firstName"
    private selectorLastNameInput = "#lastName"
    private selectorUserEmailInput = "#userEmail"
    private selectorUserNumberInput = "#userNumber"
    private selectorUserDateOfBirthInput = "#dateOfBirthInput"
    private selectorAddressInput = "#currentAddress"
    private selectorPopUpTitle = "#example-modal-sizes-title-lg"
    private selectorForm = "#userForm"

    private transformHobby = {
        "Sports": 1,
        "Reading": 2,
        "Music": 3
    }

    private getSelectorState(state: string) {
        return `.css-26l3qy-menu > div > div:contains('${state}')`
    }

    private getSelectorGenderByText(gender: string) {
        return `[value="${gender}"]`
    }

    private getSelectorHobbieByPosition(position: number) {
        return `#hobbies-checkbox-${position}`
    }

    private getSelectorSubmitButton = "#submit"

    private formContentPage: string

    constructor() {
        this.formContentPage = "https://demoqa.com/automation-practice-form"
    }

    public click(element: string) {
        cy.get(element).click({ force: true })
    }

    public visitFormContentPage() {
        cy.visit(this.formContentPage)
    }

    public insertIntoInput(selector: string, text: string) {
        cy.get(selector).type(text)
    }

    public selectGender(gender: string) {
        cy.get(this.getSelectorGenderByText(gender)).check({ force: true })
    }

    public selectHobby(hobby: number) {
        cy.get(this.getSelectorHobbieByPosition(hobby)).check({ force: true })
    }

    public selectState(state: string) {
        this.click(this.selectorParentStateDropdown)
        this.click(this.getSelectorState(state))
    }

    public selectCity(city: string) {
        this.click(this.selectorParentCityDropdown)
        this.click(this.getSelectorState(city))
    }

    public fillForm(information: Information) {
        this.insertIntoInput(this.selectorFirstNameInput, information.name)
        this.insertIntoInput(this.selectorLastNameInput, information.lastName)
        this.insertIntoInput(this.selectorUserEmailInput, information.email)
        this.selectGender(information.gender)
        this.insertIntoInput(this.selectorUserNumberInput, information.mobileNumber)
        this.insertIntoInput(this.selectorUserDateOfBirthInput, information.dateOfBirth)
        information.hobbies.forEach((hobbie) => {
            this.selectHobby(this.transformHobby[`${hobbie}`])
        })
        this.insertIntoInput(this.selectorAddressInput, information.currentAddress)
        this.selectState(information.state)
        this.selectCity(information.city)
        cy.get(this.selectorForm).submit()
    }

    public verifyModalHeaderText(expectedText: string) {
        cy.get(this.selectorPopUpTitle).should("have.text", expectedText)
    }
}

interface Information {
    name: string,
    lastName: string,
    email: string,
    gender: string,
    dateOfBirth: string,
    mobileNumber: string,
    hobbies: Array<string>,
    currentAddress: string,
    state: string,
    city: string
}

export { PracticeFormPage }

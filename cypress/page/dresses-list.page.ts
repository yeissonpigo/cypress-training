class DressesListPage {
    private dressItem: string;
    private dressName: string;

    constructor(){
        this.dressItem = ".product-container";
        this.dressName = `${this.dressItem} .product-name`;
    }

    getDressProducts() {
        return cy.get(this.dressItem);
    }

    validateItemsNumber(itemsNumber: number){
        this.getDressProducts().should("have.length", itemsNumber);
    }

    validateItemsName(names: string[]){
        cy.get(this.dressName).each((item, index) => {
            cy.wrap(item).should("contain.text", names[index]);
        });
    }
}

export {DressesListPage}

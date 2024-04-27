    describe('Handle Tables',()=>{
      
      beforeEach('Login',()=>{
      cy.visit('https://demo.opencart.com/admin/index.php');
      cy.get('#input-username').should('be.visible').type('demo');
      cy.get('#input-password').should('be.visible').type('demo');
      cy.get('button[type="submit"]').click();
      cy.get('button.btn-close').click();
      cy.get('#menu-customer>a').click(); // click on customer main item
      cy.get('#menu-customer>ul>li:first-child').click();  //click on the customer main item

      })
        
      it.skip('Check no of Rows & columns',()=>{
       cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10');
       cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','7');

        })
        it.skip('Check cell data from specific Rows & columns',()=>{
          cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(5)>td:nth-child(3)')
          .contains('hfgjhgjgjggj@gmail.com');
   
           })
        it.skip('Read all the Rows & column data in first page',()=>{

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        .each(  ($row,index,$rows)=>{
             cy.wrap($row).within( ()=>{
               cy.get('td')
               .each(  ($col,index,$cols)=>{
                cy.log($col.text());


        })
        })

        })
        })
       it('pagination get total no od pages',()=>{


        
       })


    })
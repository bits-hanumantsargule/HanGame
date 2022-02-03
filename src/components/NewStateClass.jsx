import React from 'react';
import axios from 'axios';
import {
    Grid,
    GridColumn as Column
  } from "@progress/kendo-react-grid";
  import '@progress/kendo-theme-default/dist/all.css';

class NewStateClass extends React.Component{

    
      static getData = () => {
        var data = [];
        for (var i = 0; i < 500; i++)
          data.push({
            ProductID: i,
            ProductName: "Ikura",
            SupplierID: 4,
            CategoryID: 8,
            QuantityPerUnit: "12 - 200 ml jars",
            UnitPrice: 31,
            UnitsInStock: 31,
            UnitsOnOrder: 0,
            ReorderLevel: 0,
            Discontinued: false,
            Category: {
              CategoryID: 8,
              CategoryName: "Seafood",
              Description: "Seaweed and fish"
            },
            FirstOrderedOn: new Date(1996, 8, 5),
            padding: Math.random() * 50
          });
        return data;
      };

     static statesdsd = () => {
        var data = [];
         axios.get(`http://localhost/phpApi/phpinfo.php`)
        .then(resd => {
            const usersd = resd.data;
            this.setState({ usersd});
            data.push({usersd});
        });
        return data;
    }
      state = {
        // data: NewStateClass.getData(),
        data: NewStateClass.statesdsd(),
        skip: 0
      };

      pageChange = (event) => {
        this.setState({
          skip: event.page.skip
        });
        console.log(' state call '+this.state.skip);
      };

render(){
    const { data } = this.state;
    return(
        <div> <h3>Example virtual Scoll {this.state.skip}</h3>

<Grid
        data={data.slice(this.state.skip, this.state.skip + 25)}
        onItemChange={this.itemChange}
        editField={this.editField}
        dataItemKey="ProductID"
        scrollable="virtual"
        pageSize={50}
        style={{ height: "800px" }}
        total={data.length}
        skip={this.state.skip}
        onPageChange={this.pageChange}
      >
        <Column field="ProductID" title="Id" width="50px" editable={false} />
        <Column field="ProductName" title="Product Name" />
        <Column field="Category.CategoryName" title="Category Name" />
        <Column field="Category.Description" title="Category Description" />
        
      </Grid>
        </div>
        
    );
}

}

export default NewStateClass
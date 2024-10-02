const products = [
    {
      id: 1,
      name: "Iphone 12",
      price: 1000,
      brand: "Apple",
    },
    {
      id: 2,
      name: "Galaxy S21",
      price: 900,
      brand: "Samsung",
    },
    {
      id: 3,
      name: "Xperia 1",
      price: 800,
      brand: "Sony",
    },
  ];

  function printProducts() {
    for (let i = 0; i < products.length; i++){
        
        console.log(products[i]);
        // let table = 
        //     <tr>
        //         <th>ID</th>
        //         <th>Name</th>
        //         <th>Price</th>
        //         <th>Brand</th>
        //       </tr>
        //     </thead>
        //     <tbody>
        //       <tr>
        //         <td>`${id}`</td>
        //         <td>`${name}`</td>
        //         <td>`${price}`</td>
        //         <td>`${brand}`</td>
        //       </tr>
        //   </thead>
        //   </table>
    }
  }
  printProducts(products);



  document.write("${table}");
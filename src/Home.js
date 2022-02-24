import { Link } from "react-router-dom";

const Home = () => {

    const products = [
        {
            id: 1,
            category: 'Eco bags and tote bags',
            name: 'Canvas tote (M)',
            image: 'https://www.shop-stationery.com/user_data/packages/default/img/pages/design_simulator/ds-sample01.jpg'
        },
        {
            id: 2,
            category: 'Eco bags and tote bags',
            name: '[MOTTERU] Kururito Daily Bag',
            image: 'https://www.shop-stationery.com/user_data/packages/default/img/pages/design_simulator/ds-sample02.jpg'
        },
        {
            id: 3,
            category: 'Pouches and Cases',
            name: 'Canvas flat pouch (M)',
            image: 'https://www.shop-stationery.com/user_data/packages/default/img/pages/design_simulator/ds-sample03.jpg'
        },
        {
            id: 4,
            category: 'Drawstrings, Rucksacks, Knapsacks',
            name: 'Poly Purse (L)',
            image: 'https://www.shop-stationery.com/user_data/packages/default/img/pages/design_simulator/ds-sample04.jpg'
        },
        {
            id: 5,
            category: 'Tumblers',
            name: 'Vacuum Stainless Tumbler 450ml',
            image: 'https://www.shop-stationery.com/user_data/packages/default/img/pages/design_simulator/ds-sample05.jpg'
        },
        {
            id: 6,
            category: 'Bottles',
            name: 'Bertona One Push Vacuum Stainless Bottle',
            image: 'https://www.shop-stationery.com/user_data/packages/default/img/pages/design_simulator/ds-sample06.jpg'
        },
    ];

    return ( 
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Try the Design Simulator</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Sort</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Filter</button>
                </div>
                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                  <span data-feather="calendar"></span>
                  Price
                </button>
              </div>
            </div>
      
            <strong>Designing is easy for anyone right now! Try the design simulator</strong>
            <p>For those who want to use the design simulator for the time being, or who want to create a design with a shape close to the product under consideration, you can try the design simulator with the following products.</p>

            <div className="container">
                <div className="row row-cols-md-3 row-cols-sm-2">
                    {products.map((product) => (
                        <div className="col">
                            <div className="card" style={{width: '18rem',}}>
                                <img src={product.image} alt="" className="card-img-top" />
                                <div className="card-header">
                                    {product.category}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu leo est. In in nisl.</p>
                                    <Link to={`/options/${product.id}`} className="btn btn-outline-primary">With this product, try to make a design</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                {/* <% for(let i in products) { %>
                    
                    <div className="col">
                        <div className="card" style="width: 18rem;">
                            <img src="<%= products[i].image %>" class="card-img-top" alt="...">
                            <div className="card-header">
                                <%= products[i].category %>
                            </div>
                            <div className="card-body">
                              <h5 className="card-title"><%= products[i].name %></h5>
                              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu leo est. In in nisl.</p>
                              <a href="/options/<%= i %>" className="btn btn-outline-primary">With this product, try to make a design</a>
                            </div>
                          </div>
                    </div>
                <% } %> */}
                </div>
            </div>

          </main>
     );
}
 
export default Home;
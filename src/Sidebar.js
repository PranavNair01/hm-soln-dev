import { Link } from "react-router-dom";

const Sidebar = () => {

    const sidebarItems = [
        'Search by Price',
        'Search by Product Category',
        'Search by Purpose/Scene',
        'Search by Target',
        'Search by Print',
        'Search by Body Color',
        'Search by Special Feature'
    ];

    return ( 
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse mt-4">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                  { sidebarItems.map((sidebarItem) => {
                      return <li className="nav-item">
                        {/* if(sidebarItem == sidebarItems[0]){
                            <Link to="#" className="nav-link-active" ariaCurrent="page" />
                        }
                        else{
                            <Link to="#" className="nav-link" ariaCurrent="page" />
                        } */}
                        <Link to="#" className="nav-link" ariaCurrent="page" />
                        <span dataFeather="home"></span>
                        {sidebarItem}
                      </li>
                  }) }
              </ul>
      
            
            </div>
          </nav>
     );
}
 
export default Sidebar;
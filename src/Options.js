import { Link, useParams } from "react-router-dom";

const Options = () => {
    const { id } = useParams();

    let options = [
        {
            id: 1,
            title: 'Skill Printing 1 color',
            description: 'This is a printing method generally called silk screen printing or silk printing. Used for novelties that are flat and have a wide print surface.',
            image: 'https://storage.googleapis.com/ideas-ds/printtype/p/f/4ytiz6cmdxtnzbvirnq83zor.jpg'
        },
        {
            id: 2,
            title: 'Full Color Transfer Printing',
            description: 'It is a printing method that prints in full color on a transfer sheet and heat presses it to novelty. The design has a border of about 1 to 2 mm. Charges vary depending on the print size.',
            image: 'https://storage.googleapis.com/ideas-ds/printtype/h/0/u4mjrbnpqqprmqxnhv9okes3.jpg'
        },
        {
            id: 3,
            title: 'Inkjet Printing Full Color',
            description: 'Bag inkjet printing, which sprays ink directly onto the fabric, is characterized by a soft finish that takes advantage of the texture of the fabric.',
            image: 'https://storage.googleapis.com/ideas-ds/printtype/5/s/zcikllygepi8kkbwv9bt1oet.jpg'
        }
    ];

    return ( 
        <main class="mx-4">
          <h2>Select a print format</h2>
          <hr />

          <h4>If you prefer multiple printing methods, save the design for each printing method and issue a design key.</h4>
          <p>The design is saved in association with the browser cookie. Please enable cookies.</p>
          <p>It is not saved in secret mode (private mode), so switch to normal mode.</p>

          <div class="container">
            <div class="row row-cols-md-3 row-cols-sm-2">
                {options.map((option) => (
                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={option.image} alt="" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{option.title}</h5>
                                <p className="card-text">{option.description}</p>
                                <Link to={`/editor/${id}/${option.id}`} className="btn btn-outline-danger">Make a design</Link>
                            </div>
                        </div>
                    </div>
                ))}
            {/* <% for(let i in options) { %>
                
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <img src="<%= options[i].image %>" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title"><%= options[i].title %></h5>
                          <p class="card-text"><%= options[i].description %></p>
                          <a href="/editor/<%= item %>/<%= i %>" class="btn btn-outline-danger">Make a design</a>
                        </div>
                      </div>
                </div>
            <% } %> */}
            </div>
        </div>
      </main>
     );
}
 
export default Options;
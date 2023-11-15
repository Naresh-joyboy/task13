import './App.css';
import Ooo from './Message.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Ooo title="Free" price="$0" user="5 user" store="5GB Storage" project="Unlimited Public Projects" access="Community Acces" priproj="Unlimited Private Projects" support="Dedicated Phone Support" subdomain="Free Subdomain" status="Monthly Status Reports" />
          </div>
          <div className="col-lg-4">
            <Ooo title="Plus" price="$44" user="10 user" store="50GB Storage" project="Unlimited Public Projects" access="Community Acces" priproj="Unlimited Private Projects" support="Dedicated Phone Support" subdomain="Free Subdomain" status="Monthly Status Reports" />
          </div>
          <div className="col-lg-4">
            <Ooo title="Pro" price="$56" user="18 user" store="150GB Storage" project="Unlimited Public Projects" access="Community Acces" priproj="Unlimited Private Projects" support="Dedicated Phone Support" subdomain="Free Subdomain" status="Monthly Status Reports" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

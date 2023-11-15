//import logo from './logo.svg';
import './App.css';
import Ooo from './Message.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <section class="pricing py-5">
    <div class="container">
    <div class="row">
    
    <tr><Ooo title="Free" price="$0"  user="5 user"  store="5GB Storage"  project="Unlimited Public Projects" access="Community Acces" priproj="Unlimited Private Projects" support="Dedicated Phone Support" subdomain="Free Subdomain" status="Monthly Status Reports"></Ooo></tr>
    <tr><Ooo title="Plus" price="$44" user="10 user" store="50GB Storage" project="Unlimited Public Projects" access="Community Acces" priproj="Unlimited Private Projects" support="Dedicated Phone Support" subdomain="Free Subdomain" status="Monthly Status Reports"></Ooo></tr>
    <tr><Ooo title="pro"  price="$56" user="18 user" store="150GB Storage" project="Unlimited Public Projects" access="Community Acces" priproj="Unlimited Private Projects" support="Dedicated Phone Support" subdomain="Free Subdomain" status="Monthly Status Reports"></Ooo></tr>

    </div>
    </div>
</section>
  );
}

export default App;

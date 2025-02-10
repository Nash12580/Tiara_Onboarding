import LoginSideBar from '../components/LoginSideBar';
import VenCliCard from '../components/VenCliCard';

function VendorClient() {
  return (
    <div>
      <div style={{display:'flex', flexDirection:'row'}}>
      <LoginSideBar/>
      <VenCliCard/>
      </div>
    </div>
  );
}

export default VendorClient;
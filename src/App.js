// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Header/Navbar';
import Home from './Pages/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Aboutus from './Pages/Aboutus';
import Porfolio from './Pages/Portfolio';
import Servise from './Pages/Servise';
import Contactus from './Pages/Contactus';
import Webdevelopment from './Pages/Webdevelopment';
import Degitalmarketing from './Pages/Degitalmarketing';
import Wordpress from './Pages/Wordpress';
import It from './Pages/It';
import UIUXdesign from './Pages/UIUXdesign';
import Bussinus from './Pages/Bussinus';
import EcomServices from './Pages/EcomServices';
import Shopify from './Pages/Shopify';
import Groupon from './Pages/Groupon';
import Amazon from './Pages/Amazon';
import InfMarketing from './Pages/InfMarketing';
import PPCServices from './Pages/PPCServices';
import EmailMarketing from './Pages/EmailMarketing';
import ContentMarketing from './Pages/ContentMarketing';
import SEOServices from './Pages/SEOServices';
import SEOCopyright from './Pages/SEOCopyright';
import FinacialAperal from './Pages/FinacialAperal';
import Budgetprepare from './Pages/Budgetprepare';
import VATcalculation from './Pages/VATcalculation';
import BookingKeeping from './Pages/BookingKeeping';
import SaleTexFilling from './Pages/SaleTexFilling';
import Incorpuration from './Pages/Incorpuration';
import TexRegistration from './Pages/TexRegistration';
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/'element={<Navbar/>} >
    <Route index element={<Home/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/portfolio' element={<Porfolio/>}/>
    <Route path='/service' element={<Servise/>}/>
    <Route path='/contactus' element={<Contactus/>}/>
    <Route path='/webdevelopment' element={<Webdevelopment/>}/>
    <Route path='/degitalmarketing' element={<Degitalmarketing/>}/>
    <Route path='/wordpress' element={<Wordpress/>}/>
    <Route path='/itnetworking' element={<It/>}/>
    <Route path='/uiuxdeigner' element={<UIUXdesign/>}/>
    <Route path='/bussines' element={<Bussinus/>}/>
    <Route path='/ecomServices' element={<EcomServices/>}/>
    <Route path='/shopify' element={<Shopify/>}/>
    <Route path='/groupon' element={<Groupon/>}/>
    <Route path='/amazon' element={<Amazon/>}/>
    <Route path='/infmarketing' element={<InfMarketing/>}/>
    <Route path='/ppcservices' element={<PPCServices/>}/>
    <Route path='/emailmarketing' element={<EmailMarketing/>}/>
    <Route path='/contentmarketing' element={<ContentMarketing/>}/>
    <Route path='/seoservices' element={<SEOServices/>}/>
    <Route path='/seocopyright' element={<SEOCopyright/>}/>
    <Route path='/finacialapperal' element={<FinacialAperal/>}/>
    <Route path='/budgetprepare' element={<Budgetprepare/>}/>
    <Route path='/vatcalculation' element={<VATcalculation/>}/>
    <Route path='/bookingKeeping' element={<BookingKeeping/>}/>
    <Route path='/SaleTexFilling' element={<SaleTexFilling/>}/>
    <Route path='/TexRegistration' element={<TexRegistration/>}/>
    <Route path='/Incorpuration' element={<Incorpuration/>}/>














  </Route>
</Routes>
</BrowserRouter>


  );
}

export default App;

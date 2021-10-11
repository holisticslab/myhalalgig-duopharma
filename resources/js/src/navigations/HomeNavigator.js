import React from 'react'
import { Input, Menu, Segment ,Dropdown,
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Sidebar,
    Divider,
    
} from 'semantic-ui-react';

import {Switch,Route,Link,useRouteMatch} from "react-router-dom";

import logo from '../assets/img/banner-client.png'; 

import {AuthContext} from '../screens/auth/auth';
import HomeScreen from '../screens/HomeScreen';
import CompanyNavigator from './CompanyNavigator';
import ProfileNavigator from './ProfileNavigator';
import SupplierNavigator from './SupplierNavigator';
import ProductNavigator from './ProductNavigator';
import HASNavigator from './HASNavigator';
import HalalFileNavigator from './HalalNavigator';
import CertBodiesNavigator from './CertBodiesNavigator';
import Dashboard from '../screens/Dashboard';
import SubscriptionNavigator from './SubscriptionNavigator';
import AdvisorNavigator from './AdvisorNavigator';
import ClientAdvisorRecordNavigator from './ClientAdvisorRecordNavigator';
import AdvisorListAll from '../screens/advisor/AdvisorListAll';



const HomeNavigator = () => {
    const [activeItem, setactiveItem] = React.useState(window.location.pathname.split("/")[1])
    const { profile,signOut,changeAccess } = React.useContext(AuthContext);
    let { path, url } = useRouteMatch();
    
  return (
////////////////////////////////////////////////////TOP VERTICAL NAV//////////////////////////////////////////////////////////////////
    <div style={{height:'100vh',display:'flex', flexDirection:'column' }}>
      
    <Menu borderless stackable attached='top' inverted color={'teal'}size='large'>
      <Menu.Item>
        <Image
          src={logo}
          size='small'
          href='/'
          spaced
        />
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Dropdown item text={profile.name}>
            <Dropdown.Menu>
              <Dropdown.Item onClick={signOut}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
   <div style={{display:'flex', flexDirection:'row',flex:1, overflow:'hidden' }}>
{/* ////////////////////////////////////////////////////TOP VERTICAL NAV////////////////////////////////////////////////////////////////// */}

{/* ////////////////////////////////////////////////////SIDEBAR MENU////////////////////////////////////////////////////////////////// */}
    <Menu pointing secondary vertical>
      <div className="ui divider"></div>
        <Menu.Item as={Link} onClick={()=>setactiveItem('home')}
          icon= 'home'
          name='Halaman Utama'
          to="/"
          active={activeItem === 'home'}
        />
      <div className="ui divider"></div>
        <Menu.Item header>Maklumat</Menu.Item>
        <Menu.Item as={Link} onClick={()=>setactiveItem('company')}
          icon= 'building outline'
          name='Syarikat'
          to="/company"
          active={activeItem === 'company'}
        />
        {/* <Menu.Item as={Link} onClick={()=>setactiveItem('subcr')}
          icon= 'building outline'
          name='Syarikat'
          to="/subcr"
          active={activeItem === 'subcr'}
        /> */}
        {/* <Menu.Item as={Link} onClick={()=>setactiveItem('premises')}
          icon= 'building outline'
          name='Premis'
          to="/premises"
          active={activeItem === 'premises'}
        />
        <Menu.Item as={Link} onClick={()=>setactiveItem('iha')}
          icon= 'building outline'
          name='IHA'
          to="/iha"
          active={activeItem === 'iha'}
        />
        <Menu.Item as={Link} onClick={()=>setactiveItem('training')}
          icon= 'building outline'
          name='Latihan Halal'
          to="/training"
          active={activeItem === 'training'}
        /> */}
        <Menu.Item as={Link} onClick={()=>setactiveItem('supplier')}
          icon= 'truck'
          name='Pembekal'
          to="/supplier"
          active={activeItem === 'supplier'}
        />
        <Menu.Item as={Link} onClick={()=>setactiveItem('advisor')}
          icon= 'address card outline'
          name='Advisors'
          to="/advisor"
          active={activeItem === 'advisor'}
        />
        {/* <Menu.Item as={Link} onClick={()=>setactiveItem('user')}
          name='Users'
          to="/profile"
          active={activeItem === 'user'}
        /> */}
        {/* <Menu.Item as={Link} onClick={()=>setactiveItem('product')}
          icon= 'food'
          name='Produk 𝘭 Menu'
          to="/product"
          active={activeItem === 'product'}
        /> */}
      {/* <div class="ui divider"></div>
        <Menu.Item header>Dokumen</Menu.Item>
        <Menu.Item as={Link} onClick={()=>setactiveItem('HASFile')}
          icon= 'file alternate outline'
          name='Fail HAS'
          to="/HASFile"
          active={activeItem === 'HASFile'}
        />
        <Menu.Item as={Link} onClick={()=>setactiveItem('HalalFile')}
          icon= 'file archive outline'
          name='HAS File'
          to="/HalalFile"
          active={activeItem === 'HalalFile'}
        /> */}
      <div className="ui divider"></div>
        <Menu.Item header>Tetapan</Menu.Item>   
          <Menu.Item as={Link} onClick={()=>setactiveItem('certbodies')}
            icon= 'tasks'
            name='Certification Bodies'
            to="/certbodies"
            active={activeItem === 'certbodies'}
          />
        {/* <Menu.Item as={Link} onClick={()=>setactiveItem('advisorall')}
            icon= 'address card outline'
            name='Advisors'
            to="/advisorall"
            active={activeItem === 'advisorall'}
          /> */}
        <Menu.Item as={Link} onClick={()=>setactiveItem('CArecord')}
            icon= 'address card outline'
            name='Rekod Advisor Client'
            to="/CArecord"
            active={activeItem === 'CArecord'}
          />
    </Menu>
{/* ////////////////////////////////////////////////////SIDEBAR MENU////////////////////////////////////////////////////////////////// */}

{/* ////////////////////////////////////////////////////SIDEBAR ROUTE////////////////////////////////////////////////////////////////// */}
      <Segment className="innerContainer" basic>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/company">
              <CompanyNavigator />
          </Route>
          <Route path="/profile">
              <ProfileNavigator />
          </Route>
          <Route path="/supplier">
              <SupplierNavigator />
          </Route>
          <Route path="/product">
              <ProductNavigator />
          </Route>
          {/* <Route path="/HASFile">
              <HASNavigator />
          </Route> */}
          <Route path="/HalalFile">
              <HalalFileNavigator />
          </Route>
          <Route path="/certbodies">
              <CertBodiesNavigator />
          </Route>
          <Route path="/advisorall">
              <AdvisorListAll />
          </Route>
          <Route path="/CArecord">
              <ClientAdvisorRecordNavigator />
          </Route>
          <Route path="/subcr">
            <SubscriptionNavigator />
          </Route>
          <Route path="/advisor">
            <AdvisorNavigator />
          </Route>
          {/* <Route path="/profile">
            <ProfileNavigator />
          </Route> */}
        </Switch>
    </Segment>
{/* ////////////////////////////////////////////////////SIDEBAR ROUTE////////////////////////////////////////////////////////////////// */}
  </div>
</div>
  )
}

export default HomeNavigator
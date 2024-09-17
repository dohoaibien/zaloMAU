import React, { useState } from 'react';
import { Route} from 'react-router-dom'
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider, BottomNavigation, Icon } from 'zmp-ui'; 
import { RecoilRoot } from 'recoil';
import HomePage from '../pages';
import About from '../pages/about';
import Form from '../pages/form';
import User from '../pages/user';


const MyApp = () => {
  const [activeTab, setActiveTab] = useState('/');
  return (
    <RecoilRoot>
      <App >
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/form" element={<Form></Form>}></Route>
            <Route path="/user" element={<User></User>}></Route>
          </AnimationRoutes>
        </ZMPRouter>
        <BottomNavigation fixed activeKey={activeTab} onChange={(key) => setActiveTab(key)} >
        <BottomNavigation.Item
          label="Trang chủ"
          key="homepage"
          icon={<Icon icon="zi-home" />}
          activeIcon={<Icon icon="zi-home" />}
        />
        <BottomNavigation.Item
          label="Nhật ký"
          key="library"
          icon={<Icon icon="zi-more-grid" />}
          activeIcon={<Icon icon="zi-more-grid-solid" />}
        />
        <BottomNavigation.Item
          key="notification"
          label="Thông báo"
          icon={<Icon icon="zi-notif" />}
          activeIcon={<Icon icon="zi-notif-ring" />}
        />
        <BottomNavigation.Item
          key="me"
          label="Cá nhân"
          icon={<Icon icon="zi-user-circle" />}
          activeIcon={<Icon icon="zi-user-circle-solid" />}
        />
      </BottomNavigation>
      </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
}
export default MyApp;
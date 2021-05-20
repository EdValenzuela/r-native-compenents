import { MenuItem } from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen'
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen'
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen'
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen'
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen'
  },
  {
    name: 'PullToRefresh',
    icon: 'refresh-circle-outline',
    component: 'PullToRefreshScreen'
  },
  {
    name: 'SectionList',
    icon: 'list-circle-outline',
    component: 'SectionListScreen'
  },
  {
    name: 'Modals',
    icon: 'logo-windows',
    component: 'ModalScreen'
  },
  {
    name: 'InfiniteScroll',
    icon:'infinite-outline',
    component: 'InfiniteScrollScreen'
  }
];
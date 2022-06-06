import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomeGuard } from '../guards/home.guard';
import { UserDataResolver } from '../resolvers/userData.resolver';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    canActivate: [HomeGuard],
    resolve: {
      userData: UserDataResolver
    },
    children:[
      {
        path: 'devices',
        loadChildren:() =>
          import('../pages/devices/devices.module').then(m => m.DevicesPageModule)
      },
      {
        path: 'detail',
        loadChildren:() =>
          import('../pages/detail/detail.module').then(m => m.DetailPageModule)
      },
      {
        path: 'tank-detail',
        loadChildren:() =>
          import('../pages/tank-detail/tank-detail.module').then(m => m.TankDetailPageModule)
      },
      {
        path: 'bore-detail',
        loadChildren:() =>
          import('../pages/bore-detail/bore-detail.module').then(m => m.BoreDetailPageModule)
      },
      {
        path: 'fence-detail',
        loadChildren:() =>
          import('../pages/fence-detail/fence-detail.module').then(m => m.FenceDetailPageModule)
      },
      {
        path: 'gate-detail',
        loadChildren:() =>
          import('../pages/gate-detail/gate-detail.module').then(m => m.GateDetailPageModule)
      },
      {
        path: 'weather-detail',
        loadChildren:() =>
          import('../pages/weather-detail/weather-detail.module').then(m => m.WeatherDetailPageModule)
      },
      {
        path: 'rainGauge-detail',
        loadChildren:() =>
          import('../pages/raingauge-detail/raingauge-detail.module').then(m => m.RaingaugeDetailPageModule)
      },
      {
        path: 'flowMeter-detail',
        loadChildren:() =>
          import('../pages/flowmeter-detail/flowmeter-detail.module').then(m => m.FlowmeterDetailPageModule)
      },
      {
        path: 'trough-detail',
        loadChildren:() =>
          import('../pages/trough-detail/trough-detail.module').then(m => m.TroughDetailPageModule)
      },
      {
        path: 'map',
        loadChildren:() =>
          import('../pages/map/map.module').then(m => m.MapPageModule)
      },
      {
        path: 'notifications',
        loadChildren:() =>
          import('../pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: 'messages',
        loadChildren:() =>
          import('../pages/messages/messages.module').then(m => m.MessagesPageModule)
      },
      {
        path: 'settings',
        loadChildren:() =>
          import('../pages/settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'history',
        loadChildren:() =>
          import('../pages/history/history.module').then(m => m.HistoryPageModule)
      },
      {
        path: 'configuration',
        loadChildren:() =>
          import('../pages/configuration/configuration.module').then(m => m.ConfigurationPageModule)
      },
      {
        path: 'tank-history',
        loadChildren:() =>
          import('../pages/tank-history/tank-history.module').then(m => m.TankHistoryPageModule)
      },
      {
        path: 'bore-history',
        loadChildren:() =>
          import('../pages/bore-history/bore-history.module').then(m => m.BoreHistoryPageModule)
      },
      {
        path: 'trough-history',
        loadChildren:() =>
          import('../pages/trough-history/trough-history.module').then(m => m.TroughHistoryPageModule)
      },
      {
        path: 'fence-history',
        loadChildren:() =>
          import('../pages/fence-history/fence-history.module').then(m => m.FenceHistoryPageModule)
      },
      {
        path: 'weather-history',
        loadChildren:() =>
          import('../pages/weather-history/weather-history.module').then(m => m.WeatherHistoryPageModule)
      },
      {
        path: 'rainGauge-history',
        loadChildren:() =>
          import('../pages/raingauge-history/raingauge-history.module').then(m => m.RaingaugeHistoryPageModule)
      },
      {
        path: 'flowMeter-history',
        loadChildren:() =>
          import('../pages/flowmeter-history/flowmeter-history.module').then(m => m.FlowmeterHistoryPageModule)
      },
      {
        path: 'trough-settings',
        loadChildren: () => 
          import('../pages/trough-settings/trough-settings.module').then( m => m.TroughSettingsPageModule)
      },
      {
        path: 'tank-settings',
        loadChildren: () => 
          import('../pages/tank-settings/tank-settings.module').then( m => m.TankSettingsPageModule)
      },
      {
        path: 'fence-settings',
        loadChildren: () => 
          import('../pages/fence-settings/fence-settings.module').then( m => m.FenceSettingsPageModule)
      },
      {
        path: 'bore-settings',
        loadChildren: () => 
          import('../pages/bore-settings/bore-settings.module').then( m => m.BoreSettingsPageModule)
      },
      {
        path: 'raingauge-settings',
        loadChildren: () => 
          import('../pages/raingauge-settings/raingauge-settings.module').then( m => m.RaingaugeSettingsPageModule)
      },
      {
        path: 'flowmeter-settings',
        loadChildren: () => 
          import('../pages/flowmeter-settings/flowmeter-settings.module').then( m => m.FlowmeterSettingsPageModule)
      },
      {
      path: 'app-details',
        loadChildren: () => 
          import('../pages/app-details/app-details.module').then( m => m.AppDetailsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

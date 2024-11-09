import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'remeras',
    loadChildren: () => import('./remeras/remeras.module').then( m => m.RemerasPageModule)
  },
  {
    path: 'pantalones',
    loadChildren: () => import('./pantalones/pantalones.module').then( m => m.PantalonesPageModule)
  },
  {
    path: 'buzos',
    loadChildren: () => import('./buzos/buzos.module').then( m => m.BuzosPageModule)
  },
  {
    path: 'zapatillas',
    loadChildren: () => import('./zapatillas/zapatillas.module').then( m => m.ZapatillasPageModule)
  },
  {
    path: 'camperas',
    loadChildren: () => import('./camperas/camperas.module').then( m => m.CamperasPageModule)
  },
  {
    path: 'iniciar',
    loadChildren: () => import('./iniciar/iniciar.module').then( m => m.IniciarPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

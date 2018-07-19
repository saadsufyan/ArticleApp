import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddarticlePage } from './addarticle';

@NgModule({
  declarations: [
    AddarticlePage,
  ],
  imports: [
    IonicPageModule.forChild(AddarticlePage),
  ],
})
export class AddarticlePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { CardComponent } from './card/card.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';

@NgModule({
  declarations: [StructuralDirectivesComponent, CardComponent, AttributeDirectivesComponent],
  imports: [CommonModule],
  exports: [StructuralDirectivesComponent, AttributeDirectivesComponent],
})
export class DirectivesModule {}

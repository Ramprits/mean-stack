import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { PostCreateComponent } from './post-create/post-create.component';

@NgModule({
  imports: [CommonModule, FormsModule, PostRoutingModule, TranslateModule, FlexLayoutModule, MaterialModule],
  declarations: [PostComponent, PostCreateComponent]
})
export class PostModule {}
